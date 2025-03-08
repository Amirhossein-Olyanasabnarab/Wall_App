const express = require('express');
const dotEnv = require("dotenv");
const swaggerConfig = require('./src/config/swagger.config');
dotEnv.config();

async function main() {
    const app = express();
    const PORT = process.env.PORT;
    require("./src/config/mongoose.config");
    swaggerConfig(app);
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
};
main();