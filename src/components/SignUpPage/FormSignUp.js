import React from "react";
import useForm from "./useForm";
import validation from "./validation";
import "./FormSignUp.css";

const FormSignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validation
  );
  return (
    <div className="main-div-form">
      <form
        action=""
        onSubmit={handleSubmit}
        className="signup-form-container"
        method="post"
        name="register-form"
        data-netlify="submit"
      >
        <input type="hidden" name="form-name" value="register-form" />

        <h1>Register</h1>
        <div className="form-inputs">
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Name"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="form-inputs">
          <input
            id="phonenumber"
            type="number"
            name="phonenumber"
            className="form-input"
            placeholder="Phone Number"
            autoComplete="off"
            value={values.phonenumber}
            onChange={handleChange}
          />
          {errors.phonenumber && <p>{errors.phonenumber}</p>}
        </div>
        <div className="form-inputs">
          <input
            id="dob"
            type="date"
            name="dob"
            className="form-input"
            placeholder="Date of Birth"
            autoComplete="off"
            value={values.dob}
            onChange={handleChange}
          />
          {errors.dob && <p>{errors.dob}</p>}
        </div>
        <div className="form-inputs">
          <select
            id="gender"
            name="gender"
            className="form-input-select"
            autoComplete="off"
            value={values.gender}
            onChange={handleChange}
          >
            <option disabled selected value>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {errors.gender && <p>{errors.gender}</p>}
        </div>
        <div className="form-inputs">
          <input
            id="state"
            type="text"
            name="state"
            className="form-input"
            placeholder="State"
            autoComplete="off"
            value={values.state}
            onChange={handleChange}
          />
          {errors.state && <p>{errors.state}</p>}
        </div>
        <div className="form-inputs">
          <input
            id="city"
            type="text"
            name="city"
            className="form-input"
            placeholder="City"
            autoComplete="off"
            value={values.city}
            onChange={handleChange}
          />
          {errors.city && <p>{errors.city}</p>}
        </div>
        <div className="form-inputs">
          <input
            id="pincode"
            type="text"
            name="pincode"
            className="form-input"
            placeholder="Pincode"
            autoComplete="off"
            value={values.pincode}
            onChange={handleChange}
          />
          {errors.pincode && <p>{errors.pincode}</p>}
        </div>
        <button className="pushable" type="submit">
          <span className="front">Sign Up</span>
        </button>
      </form>
    </div>
  );
};

export default FormSignUp;
