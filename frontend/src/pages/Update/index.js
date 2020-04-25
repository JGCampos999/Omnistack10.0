import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'
import './styles.css'

function UpdateDev() {
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [bio, setBio] = useState('')
    const [techs, setTechs] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    const history = useHistory()
    const id = localStorage.getItem('DevID')

    useEffect(() => {
        async function loadData() {
            const response = await api.get('/update', {
                headers: {
                    DevID: id
                }
            })
            setName(response.data.name)
            setAvatar(response.data.avatar_url)
            setBio(response.data.bio)
            setTechs(response.data.techs.join(', '))
            setLongitude(response.data.location.coordinates[0])
            setLatitude(response.data.location.coordinates[1])
        }
        loadData()
    }, [id])

    async function handleUpdateDev(e) {
        e.preventDefault()
        console.log(techs)
        await api.put('/update', {
            name,
            avatar_url: avatar,
            bio,
            techs,
            latitude,
            longitude
        }, {
            headers: {
                DevID: id
            }
        })

        history.push('/')
    }

    return (
        <form onSubmit={handleUpdateDev} className="updateForm">
            <div className="inputBlock">
                <label htmlFor="name">Nome</label>
                <input
                    name="name"
                    id="name"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </div>

            <div className="inputBlock">
                <label htmlFor="avatar">Link do avatar</label>
                <input
                    name="avatar"
                    id="avatar"
                    required
                    value={avatar}
                    onChange={e => setAvatar(e.target.value)} />
            </div>

            <div className="inputBlock">
                <label htmlFor="bio">Biografia</label>
                <input
                    name="bio"
                    id="bio"
                    required
                    value={bio}
                    onChange={e => setBio(e.target.value)} />
            </div>

            <div className="inputBlock">
                <label htmlFor="techs">Tecnologias</label>
                <input
                    name="techs"
                    id="techs"
                    required
                    value={techs}
                    onChange={e => setTechs(e.target.value)} />
            </div>

            <div className="inputGroup">
                <div className="inputBlock">
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        name="latitude"
                        id="latitude"
                        required
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)} />
                </div>

                <div className="inputBlock">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        name="longitude"
                        id="longitude"
                        required
                        value={longitude}
                        onChange={e => setLongitude(e.target.value)} />
                </div>
            </div>
            <button type="submit">Atualizar</button>
        </form>
    )
}

export default UpdateDev