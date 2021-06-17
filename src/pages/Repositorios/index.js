import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import InputPesquisa from '../../components/inputPesquisa';
import CardRepo from '../../components/CardRepos';

import infoRepos from '../../Mock/infoRespos.json';


import './style.css'

const Repositorios = () => {
    const [data, setData] = useState([])
    const[text, setData] = useState('')
    
    useEffect(() => {
        setData(infoRepos)
    }, [])

    return (
        <div>
            <Header>
                Repositórios
            </Header>
            <InputPesquisa texto={texto} setTexto={setTexto}/>
            <div className="CardArea">   
                {data.map(d => {
                    <CardRepo data={d} />
                })}                
            </div>
        </div>
        
    )
}

export default Repositorios;