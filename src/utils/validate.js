export const checkValidData = (name = "", email, password, boolean) => {
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();

  const errors = {};
  if (boolean === false) {
    if (trimmedName.length === 0) errors.name = "Name should not be empty.";
    if (trimmedEmail.length === 0) {
      errors.email = "Email should not be empty.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errors.email = "Email is not valid.";
    }

    if (trimmedPassword.length === 0) {
      errors.password = "Password should not be empty.";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(trimmedPassword)
    ) {
      errors.password =
        "Password must contain atleast 1 number 1 capital letter and 1 special key.";
    }
  } else if (boolean === true) {
    if (trimmedEmail.length === 0) {
      errors.email = "Email should not be empty.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errors.email = "Email is not valid.";
    }

    if (trimmedPassword.length === 0) {
      errors.password = "Password should not be empty.";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(trimmedPassword)
    ) {
      errors.password =
        "Password must contain atleast 1 number 1 capital letter and 1 special key.";
    }
  }

  return Object.keys(errors).length > 0 ? errors : null;
};

export const validateEmail = (email) => {
  const trimmedEmail = email.trim();
  const error = {};
  if (trimmedEmail.length === 0) {
    error.email = "Email should not be empty.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    error.email = "Email is not valid.";
  }
  return Object.keys(error).length > 0 ? error : null;
};
