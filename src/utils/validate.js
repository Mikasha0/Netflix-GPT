export const checkValidData = (name = "", email, password) => {
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();

  const errors = {};
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
    errors.password = "Password is not valid.";
  }

  return Object.keys(errors).length > 0 ? errors : null;
};
