import React from 'react';
import './style.css'

const Card = () => {
    return (
        <div className="Card">
            <div className="Imagem">
                <img src="https://imagens.canaltech.com.br/empresas/644.400.jpg" alt="Avatar"/>
            </div>
            <div className="Info">
                <strong>Facebook</strong>
                <strong>120</strong><p>Repositórios</p>
            </div>
        </div>
    )
}

export default Card;