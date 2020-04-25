const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')
module.exports = {
    async index(request, response) {
        const devs = await Dev.find()

        return response.json(devs)
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body

        let dev = await Dev.findOne({ github_username })

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
            const { name, avatar_url, bio } = apiResponse.data
            const techsArray = parseStringAsArray(techs)
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
            var vrfyBio = bio ? 'O usuário não inseriu uma bio' : bio

            if (!name) {
                dev = await Dev.create({
                    github_username,
                    name: github_username,
                    avatar_url,
                    bio: vrfyBio,
                    techs: techsArray,
                    location
                })
            } else {
                dev = await Dev.create({
                    github_username,
                    name,
                    avatar_url,
                    bio: vrfyBio,
                    techs: techsArray,
                    location
                })
            }
        }

        return response.json(dev)
    },

    async update(request, response) {
        const { _id, name, avatar_url, bio, techs, latitude, longitude } = request.body

        const techsArray = parseStringAsArray(techs)

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }

        const dev = await Dev.updateOne({ _id }, {
            $set: {
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            }
        })

        return response.json(dev)
    },

    async destroy(request, response) {
        const { _id } = request.body

        const dev = await Dev.deleteOne({ _id })

        return response.json(dev)
    }
}