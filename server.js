const app = require('./app')

require('dotenv').config()

const port = process.env.PORT || 5050



//Start server
app.listen(port, () => {
    console.log(`server is running on port ${port}...`);
    console.log(`Node environment is ${process.env.NODE_ENV}`);
})