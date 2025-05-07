import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faBook, faStore, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Rimas e Poemas</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faBook} size="3x"/>
                    <h3>Livros Poemas e Rimas</h3>
                    <p> Sou o autor do livro "Pensamentos Distantes, John Tavis ‑ Livro ‑ Bertrand" que foi publicado pela Editora CHIADO BOOKS na Fnac, Bertrand,
                    Wook e outras livrarias.</p>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faQuoteLeft} size="3x"/>
                    <h3>Formação e Qualificações</h3>
                    <p>Sou estudante àvido, atualmente estou realizando o curso avançado em assistente administrativo, iniciado em março de 2024. Tenho uma formação em Hotelaria e Restauração - Cozinha (Out/2021-Set/2022).</p>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faStore} size="3x"/>
                    <h3>Experiência profissional</h3>
                    <p>Eis algumas de minhas experiências profissionais</p>
                    <p><strong>Ajudante de cozinha</strong></p>
                    <p>Buraquinho, Porto, Ribeira</p>
                    <p><strong>Copeiro, Pasteleiro e Ajudante cozinha</strong></p>
                    <p>Grupo Cafeína, Porto, Foz</p>
                    <p>Trabalho atual: <strong>Cozinheiro/Pizzaiolo</strong></p>
                    <p>Mino`s Pizza, Porto, Hospital de São João</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;