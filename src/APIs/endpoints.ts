const baseURL = import.meta.env.API_BASE_URL || "http://localhost:3000";

console.log(import.meta.env.API_BASE_URL);

export default {
  products: baseURL + "/products",
  user: baseURL + "/user",
};
