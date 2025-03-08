const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

function swaggerConfig(app){
    const swaggerDocument = swaggerJsDoc({
        swaggerDefinition: {
            openapi: "3.0.1",
            info: {
                title: "Wall-App-Backend",
                description: "NodeJS, ExpressJS",
                version: "1.0.0"
            },
        },
        apis: []
    });
    const swagger = swaggerUI.setup(swaggerDocument, {});
    app.use("/swagger", swaggerUI.serve, swagger);
}

module.exports = swaggerConfig;