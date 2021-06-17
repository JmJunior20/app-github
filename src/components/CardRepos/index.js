import React from 'react';
import './style.css';

const CardRepo = (props) => {
    return (
        <div className="CardRepo">
            <div>
                <strong>{props.repoInfo.name}</strong>
                <p>{props.repoInfo.description}</p>
                <p>Linguagem: <strong>{props.repoInfo.language}</strong></p>
            </div>
        </div>
    )
}

export default CardRepo;