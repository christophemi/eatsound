"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

export function useWakeLock() {
  const [isActive, setIsActive] = useState(false);
  const wakeLockRef = useRef<any>(null);

  const requestWakeLock = useCallback(async () => {
    if (!('wakeLock' in navigator)) {
      console.warn('Wake Lock API is not supported by this browser.');
      return;
    }

    try {
      // Release any existing lock
      if (wakeLockRef.current) {
        await wakeLockRef.current.release();
      }
      
      wakeLockRef.current = await (navigator as any).wakeLock.request('screen');
      setIsActive(true);
      console.log('Wake Lock is active.');

      wakeLockRef.current.addEventListener('release', () => {
        setIsActive(false);
        console.log('Wake Lock was released.');
      });
    } catch (err: any) {
      setIsActive(false);
      console.error(`${err.name}, ${err.message}`);
    }
  }, []);

  const releaseWakeLock = useCallback(async () => {
    if (wakeLockRef.current) {
      await wakeLockRef.current.release();
      wakeLockRef.current = null;
    }
  }, []);

  useEffect(() => {
    // Initial request
    requestWakeLock();

    // Re-acquire when page becomes visible again
    const handleVisibilityChange = () => {
      if (wakeLockRef.current !== null && document.visibilityState === 'visible') {
        requestWakeLock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      releaseWakeLock();
    };
  }, [requestWakeLock, releaseWakeLock]);

  return { isActive, isSupported: typeof navigator !== 'undefined' && 'wakeLock' in navigator };
}
