"use client";

import { useState, useCallback } from 'react';

interface FormErrors {
  [key: string]: string;
}

interface FormState<T> {
  values: T;
  errors: FormErrors;
  touched: { [key: string]: boolean };
}

interface UseFormOptions<T> {
  initialValues: T;
  validate?: (values: T) => FormErrors;
  onSubmit: (values: T) => void;
}

export const useForm = <T extends Record<string, any>>({
  initialValues,
  validate,
  onSubmit,
}: UseFormOptions<T>) => {
  const [state, setState] = useState<FormState<T>>({
    values: initialValues,
    errors: {},
    touched: {},
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setState((prev) => ({
        ...prev,
        values: {
          ...prev.values,
          [name]: value,
        },
        touched: {
          ...prev.touched,
          [name]: true,
        },
      }));
    },
    []
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name } = e.target;
      setState((prev) => ({
        ...prev,
        touched: {
          ...prev.touched,
          [name]: true,
        },
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const errors = validate ? validate(state.values) : {};
      setState((prev) => ({
        ...prev,
        errors,
        touched: Object.keys(prev.values).reduce(
          (acc, key) => ({ ...acc, [key]: true }),
          {}
        ),
      }));

      if (Object.keys(errors).length === 0) {
        onSubmit(state.values);
      }
    },
    [state.values, validate, onSubmit]
  );

  return {
    values: state.values,
    errors: state.errors,
    touched: state.touched,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
