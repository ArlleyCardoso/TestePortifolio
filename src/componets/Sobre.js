import React from 'react'
import './Sobre.css';
import { useState } from 'react'


const Sobre = ({ id, name }) => {
    const [namet, setNamet] = useState("pagSobre");

    return (
        <div className='item'>
            <ul>
                <button onClick={() => setNamet("pagSobre")}>Sobre</button>
                <button onClick={() => setNamet("pagHab")}>Habilidades</button>
                <button onClick={() => setNamet("pagPort")}>Portifolio</button>
            </ul>
            {namet === "pagSobre" ? (
                <div className='cont'>
                    <p>Sou desenvolvedor front-end com foco em criar experiencias digitais interativos e intuitivos. Ainda sem experiencia na area. Mas possuo conhecimento em HTML, CSS e JAVASCRIPT e framework moderno REACT. Sempre em busca de novos desafios e opotunidades para aprender e crescer profissionalmente</p>
                </div>
            ) : (
                (null)
            )}
            {/*{x && <h3>Sobre</h3>}*/}
            {namet === "pagHab" ? (
                <div className='cont'>
                    <p>Ao longo dos meus estudos para se tornar desenvolvedor front-end, adquiri uma vasta gama de habilidades que me permitem criar experiências digitais excepcionais. Com uma abordagem focada na inovação e na eficiência, estou sempre à procura de novas tecnologias e melhores práticas para entregar projetos de alta qualidade. </p>

                    <div className='card'>
                        <span><a href="" class="fa fa-instagram"></a></span>
                    </div>
                    <div className='card'>
                        <i class="fa-brands fa-css3-alt"></i>
                    </div>
                    <div className='card'>

                    </div>
                    <div className='card'>

                    </div>
                    <div className='card'>

                    </div>
                    <div className='card'>

                    </div>
                    <div className='card'>

                    </div>
                    <div className='card'>

                    </div>
                </div>
            ) : (
                (null)
            )}
            {namet === "pagPort" ? (
                <div className='cont'>
                    <p>sum is simply dummy text of the printing and typesetting industry. </p>
                </div>
            ) : (
                (null)
            )}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        </div>
        
    );
};

export default Sobre