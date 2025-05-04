'use client';
import { useEffect, useState } from 'react';

export default function useStorage(key: string, initialValue: any = []) {
  const [storage, setStorage] = useState(() => JSON.parse(localStorage.getItem(key) || initialValue));
  // useEffect(() => {
  //   setStorage(JSON.parse(window.localStorage.getItem(key) || initialValue))
  // }, []);

  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storage) : value;
      setStorage(valueToStore);
      // useEffect(() => {
        localStorage.setItem(key, JSON.stringify(valueToStore));
      // }, []);
    } catch (error) {
      console.error(error);
    }
  };

  return [storage, setValue] /*as const*/;
}