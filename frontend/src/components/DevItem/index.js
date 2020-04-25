import React from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import './styles.css'
import api from '../../services/api'

function DevItem({ dev }) {
    const history = useHistory()
    async function handleDeleteDev(_id) {
        const response = await api.delete('devs', { data: { _id } })

        return response.data
    }
    
    function goToUpdate() {
        localStorage.setItem('DevID', dev._id)
        history.push('/update')
    }
    
    return (
        <li className="dev-item">
            <button className="editButton" type="button" onClick={() => goToUpdate()}>
                <FiEdit size={20} color="#a8a8b3" />
            </button>
            <button className="deleteButton" type="button" onClick={() => handleDeleteDev(dev._id)}>
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