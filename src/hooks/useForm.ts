const { useState } = require('react');

const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState((prev: { name: string; value: string }) => ({
      ...prev,
      [name]: value
    }));
  };
  const resetForm = () => {
    setFormState(initialState);
  };

  return { formState, onChangeHandler, resetForm };
};

export default useForm;
