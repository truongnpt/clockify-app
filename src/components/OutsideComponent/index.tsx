import React, { useRef, useEffect, FC } from 'react';

interface Props {
  children: FC;
}

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideEffect(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

/**
 * Component wrapper if you click outside of it
 */
export function OutsideComponent(props) {
  const wrapperRef = useRef(null);
  useOutsideEffect(wrapperRef, props.onClickOutside);

  return <div ref={wrapperRef}>{props.children}</div>;
}
