import swaggerJSDoc, { Options } from "swagger-jsdoc";
const options: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
          title: 'ImageryAPI',
          version: '1.0.0',
        },
      },
      apis: ['./src/routes/*.js', './build/routes/*.js', "./build/*.js"], // files containing annotations as above
}

export default swaggerJSDoc(options);