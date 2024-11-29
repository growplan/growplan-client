import httpRequest from "../axios";

const api = httpRequest.api();
async function get() {
  const response = await api.get("/");
  return response.data;
}
const testApi = {
  get,
};

export default testApi;
