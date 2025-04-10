"use client";

import { useState, ChangeEvent } from 'react';

type InputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

interface UseInputReturn {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  inputProps: InputProps;
}

export const useInput = (initialValue = ''): UseInputReturn => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return {
    value,
    onChange: handleChange,
    reset,
    // React の input 要素に直接渡せるprops
    inputProps: {
      value,
      onChange: handleChange
    }
  };
};
