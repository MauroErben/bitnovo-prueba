const API_VERSION = '/api/v1'
const API_BASE_URL = 'https://payments.pre-bnvo.com'

const SERVICES = {
  ORDERS: `${API_BASE_URL}${API_VERSION}/orders/`,
}

const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export { API_BASE_URL, SERVICES, HTTP_METHODS };