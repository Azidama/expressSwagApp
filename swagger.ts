import swaggerJsdoc from "swagger-jsdoc"

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Practice Express Api',
        version: '1.0.0',
        description: 'Swagger docs test',
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Development server',
        },
      ],
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    apis: ['./routes/*.js'], 
  };
  
const swaggerSpec = swaggerJsdoc(options)
export { swaggerSpec }