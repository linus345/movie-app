import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import * as api from '../api';

import ActorGrid from '../components/ActorGrid';
import LoadMovies from '../components/LoadMovies';
import Button from '../components/Button';
import LoadingActor from '../components/LoadingActor';
import LoadingMovies from '../components/LoadingMovies';
import CustomError from '../components/CustomError';
import defaultProfile from '../images/default-profile.svg';

const Actor = ({ history, mainEl, isMobile }) => {
  const { actorId } = useParams();
  const [actor, setActor] = useState(null);
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const getActor = async actorId => {
    try {
      setLoading(true);
      const actorPromise = api.getActor(actorId);
      const moviePromise = api.getMoviesWithActor(actorId);
      const [res, movieRes] = await Promise.all([actorPromise, moviePromise]);
      setActor(res.data);
      setMovies(movieRes.data.results);
      console.log("actor res: ", res);
      console.log("movie res: ", movieRes);
    } catch(err) {
      if(err.response) {
        if(err.response.data.status_message) {
          setErr({
            ...err.response,
            message: err.response.data.status_message
          });
        } else {
          setErr(err.response);
        }
      } else {
        setErr(err);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getActor(actorId);
  }, [actorId]);

  return (
    <>
      <Button onClick={history.goBack}>
        <FaIcon icon={faArrowLeft} />
        <p>Back</p>
      </Button>
      <ActorGrid isMobile={isMobile}>
        {loading ? <LoadingActor /> : err ? (
          <CustomError>
            <p>{err.message || "Something went wrong"}</p>
          </CustomError>
        ) : (
          <>
            <img
              src={actor.profile_path ? (
                `${api.imageBase}/w185${actor.profile_path}`
              ) : defaultProfile}
              alt="actor profile"
              className="actor-profile-image"
            />
            <div className="info">
              <h1>{actor.name}</h1>
              <p className="birthplace">{actor.place_of_birth}</p>
              <p className="dates"><span>Born:</span> {actor.birthday}</p>
              {actor.deathday && (
                <p className="dates"><span>Dead:</span> {actor.deathday}</p>
              )}
              <h4 className="biography">Biography</h4>
              <p className="text">{actor.biography}</p>
            </div>
            <div className="movies">
              <h2>Also plays in</h2>
              <LoadMovies
                movies={movies}
                loading={false}
                err={null}
                mainEl={mainEl}
              />
            </div>
          </>
        )}
      </ActorGrid>
      {loading && <LoadingMovies />}
    </>
  );
}

export default Actor;
