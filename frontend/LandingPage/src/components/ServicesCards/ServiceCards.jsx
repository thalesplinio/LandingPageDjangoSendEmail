import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import styles from "./ServiceCards.module.css";


export default function ServiceCards(){
    const [ project, setProject ] = useState([]);
    const endpointProject = "http://127.0.0.1:8000/api/projects/";

    useEffect(() => {
        axios.get(endpointProject)
        .then(response => setProject(response.data))
        .catch(error =>{ console.log("Tivemos um erro ao carregar ----- ", error)})
    }, [])

    if (!project) return <p>Carregando...</p>


    return(
        <section className={styles.services}>
            <h2>Explore meu portifólio de projetos</h2>
            <div className={styles.line}></div>
            <div className={styles.containerService}>
                {
                    project.map((item) => (
                        <div className={styles.serviceCards}>
                            <img src={item.icon} alt="" />
                            <h3>{item.title}</h3>
                            <span>{item.subtitle}</span>
                            <p>{item.description}</p>
                            <Button content="Ver mais"></Button>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}