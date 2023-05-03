import { useEffect, useState } from 'react';

const useDebounce = (value: string, dealy: number): string => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, dealy);
    return () => {
      clearTimeout(timer);
    };
  }, [value, dealy]);

  return debouncedValue;
};
export default useDebounce;
