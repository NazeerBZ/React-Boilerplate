const example_controller = require('./controllers/example_controller');

module.exports = (app) => {
    app.get('/', example_controller.get)
}