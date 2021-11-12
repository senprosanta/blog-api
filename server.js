const app = require('./app')

const port = process.env.PORT || 5050


//Start server
app.listen(port, () => {
    console.log(`server is running on port ${port}...`);
})