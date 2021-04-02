export default function validateInfo(values) {
  let errors = {};

  //Firstname
  if (!values.fname.trim()) {
    errors.fname = "Firstname required";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  //Lastname
  if (!values.lname.trim()) {
    errors.lname = "Lastname required";
  }

  //Email
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  //Phone
  if (!values.phone) {
    errors.phone = "Number is required";
  }

  //Password
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  //Confirm Password
  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}
