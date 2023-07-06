import { createSwaggerSpec } from "next-swagger-doc";
import { responses, schemas, securitySchemas } from "../utils";

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: "src/app/api", // define api folder under app folder
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Next Swagger API Example",
        version: "1.0",
      },
      components: {
        responses: responses,
        schemas: schemas,
        securitySchemes: securitySchemas,
      },
      security: [],
    },
  });
  return spec;
};
