const app = require('./src/backend/bootstrap/app');

app.listen(process.env.NODE_PORT || 3000);

module.exports = app;
