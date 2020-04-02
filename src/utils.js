import React, { useEffect, useRef } from 'react';

// taken from https://stackoverflow.com/a/42234988
// slightly modified from the SO answer
export const useOutsideAlerter = (ref, cb) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
