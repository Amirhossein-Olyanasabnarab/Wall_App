const express = require('express');
const dotEnv = require("dotenv");
dotEnv.config();

async function main() {
    const app = express();
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
};
main();