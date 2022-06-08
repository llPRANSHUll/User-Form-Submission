import React, { useState } from "react";
import FormSignUp from "./FormSignUp";

import FormSuccess from "./FormSuccess";

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
      {/* <FormSignUp /> */}
      {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
      {/* <FormSuccess /> */}
    </div>
  );
};

export default SignUp;
