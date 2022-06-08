export default function validation(values) {
  let errors = {};
  var letters = /^[a-zA-Z\s]*$/;
  var pin = /^[1-9][0-9]{5}$/;

  if (!values.name) {
    errors.name = "Name required";
  } else if (!values.name.match(letters)) {
    errors.name = "Enter a proper input";
  }

  if (!values.phonenumber) {
    errors.phonenumber = "Phone number required";
  } else if (values.phonenumber.length < 10 || values.phonenumber.length > 10) {
    errors.phonenumber = "Phone number must be of 10 numbers";
  }
  if (!values.dob) {
    errors.dob = "Date of Birth is required";
  }

  if (!values.gender) {
    errors.gender = "Please tell your gender";
  }
  if (!values.state) {
    errors.state = "Please enter the state where you live";
  } else if (!values.state.match(letters)) {
    errors.state = "Enter a proper input";
  }

  if (!values.city) {
    errors.city = "Please enter the state where you live";
  } else if (!values.city.match(letters)) {
    errors.city = "Enter a proper input";
  }
  if (!values.pincode) {
    errors.pincode = "Please enter the pincode";
  } else if (!values.pincode.match(pin)) {
    errors.pincode = "Not a valid pincode";
  }
  return errors;
}
