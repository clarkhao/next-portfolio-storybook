/** 
* 
*/
export const securitySchemas = {
  HttpOnlyCookie: {
    type: 'apiKey',
    in: 'cookie',
    name: 'token'
  },
  bearerAuth: {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT'
  }
}