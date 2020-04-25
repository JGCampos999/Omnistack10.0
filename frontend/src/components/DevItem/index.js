import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
import './styles.css'
import api from '../../services/api'

function DevItem({ dev }) {
    async function handleDeleteDev(_id) {
        const response = await api.delete('devs', { data: { _id } })

        return response.data
    }
    return (
        <li className="dev-item">
            <button type="button" onClick={() => handleDeleteDev(dev._id)}>
                <FiTrash2 size={20} color="#a8a8b3" />
            </button>
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`} target="_blank" rel="noopener noreferrer" >Acessar perfil no Github</a>
        </li>
    )
}

export default DevItem