import React from 'react';
import styled from 'styled-components';

const LoadingActor = () => (
  <>
    <ActorProfilePlaceholder />
    <div>
      <ActorDetailsTextPlaceholder />
      <SmallActorDetailsTextPlaceholder />
      <SmallActorDetailsTextPlaceholder />
      <SmallActorDetailsTextPlaceholder />
      <SmallActorDetailsTextPlaceholder />
    </div>
  </>
);

const ActorProfilePlaceholder = styled.div`
  width: 200px;
  height: 300px;
  padding: 3px;
  border-radius: 5px;
  background-color: #CDCDCD;
`;

const ActorDetailsTextPlaceholder = styled.div`
  grid-area: 1 / 2 / span 1 / span 1;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  background-color: #CDCDCD;
  margin-top: 10px;
  margin-bottom: 140px;
`;

const SmallActorDetailsTextPlaceholder = styled(ActorDetailsTextPlaceholder)`
  margin-bottom: 0;
  height: 20px;
`;

export default LoadingActor;
