const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, response) {
        const id = request.headers.devid
        const devs = await Dev.findOne({ _id: id })

        return response.json(devs)
    },

    async update(request, response) {
        const id = request.headers.devid
        const { name, avatar_url, bio, techs, latitude, longitude } = request.body

        const techsArray = parseStringAsArray(techs)

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }

        const dev = await Dev.updateOne({ _id: id }, {
            $set: {
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            }
        })

        return response.json(dev)
    }
}
