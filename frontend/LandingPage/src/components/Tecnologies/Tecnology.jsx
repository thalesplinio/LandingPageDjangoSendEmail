import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Tecnology.module.css";


export default function Tecnology(){

    const [ tech, setTech ] = useState([]);
    const endpointTech = "http://127.0.0.1:8000/api/technology/";
    useEffect(() => {
        axios.get(endpointTech)
        .then(response => setTech(response.data))
        .catch(error => { console.log("Tivemos um erro ao carregar ----- ", error)})
    }, [])
    if (!tech) return <p>Carregando...</p>

    return(
        <section className={styles.tecContainer}>
            <div className={styles.slider}>
                {
                    tech.map((item) => (
                        <span key={item.id}>{item.name}</span>
                    ))
                }
                {
                    tech.map((item) => (
                        <span key={item.id}>{item.name}</span>
                    ))
                }

            </div>
        </section>
    )
}