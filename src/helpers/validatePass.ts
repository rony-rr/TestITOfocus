const validatePass = (pass: string) => {
  if (pass.length < 5) return false;

  return true;
  // return (
  //   /[A-Z]/.test(pass) &&
  //   /[a-z]/.test(pass) &&
  //   /[0-9]/.test(pass) &&
  //   /[^A-Za-z0-9]/.test(pass)
  // );
};

export default validatePass;
