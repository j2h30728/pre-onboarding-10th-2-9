import { useState } from 'react';

const useInput = (initialState: string) => {
  const [value, setValue] = useState<string>(initialState);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const clear = () => setValue(initialState);
  return { value, onChange, clear };
};

export default useInput;
