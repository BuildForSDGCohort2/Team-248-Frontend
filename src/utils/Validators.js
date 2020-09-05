//  common input field validators

function validateEmail(email) {
  const regexExpression = /\S+@\S+\.\S+/;
  return regexExpression.test(String(email).toLowerCase());
}

export default validateEmail;
