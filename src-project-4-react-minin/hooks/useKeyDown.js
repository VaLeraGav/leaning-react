import { useRef, useEffect, useCallback } from 'react';

export function useKeyDown(key, callback) {
  const callbackRef = useRef(callback);

  const keydownHandler = useCallback((event) => {
    if (event.key === key) {
      callbackRef.current(event);
    }
  });

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  }, [key]);

};
