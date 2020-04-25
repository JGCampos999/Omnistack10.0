const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')
const UpdateController = require('./controllers/UpdateController')
const routes = Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.delete('/devs', DevController.destroy)

routes.get('/update', UpdateController.index)
routes.put('/update', UpdateController.update)

routes.get('/search', SearchController.index)

module.exports = routes