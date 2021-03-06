import { useState, useEffect } from "react";

const useForm = (callback, validation) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    {
      setErrors(validation(values));
      setIsSubmit(true);
    }
  };

  useEffect =
    (() => {
      if (Object.keys(errors).length === 0 && isSubmit) {
        callback();
      }
    },
    []);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
