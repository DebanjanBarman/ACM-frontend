let api;

const baseURL = "https://acm-3uso.onrender.com";
export default api = {
  login: `${baseURL}/api/users/login`,
  signup: `${baseURL}/api/users/signup`,
  forgotPassword: `${baseURL}/api/users/forgotPassword`,
  passwordReset: `${baseURL}/api/users/resetPassword`,
  getProducts: `${baseURL}/api/products`
}
