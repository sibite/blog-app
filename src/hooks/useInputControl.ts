import { useState } from 'react';

const defaultValidator = () => true;

function useInputControl<T>(
  defaultValue: T,
  validator: (value: T) => boolean = defaultValidator,
) {
  const [value, setValue] = useState<T>(defaultValue);
  const [isTouched, setIsTouched] = useState(false);

  const touch = () => setIsTouched(true);
  const updateValue = (newValue: T) => setValue(newValue);

  const isValid = validator(value);
  const showError = !isValid && isTouched;

  return { value, isTouched, isValid, showError, touch, updateValue };
}

export default useInputControl;
