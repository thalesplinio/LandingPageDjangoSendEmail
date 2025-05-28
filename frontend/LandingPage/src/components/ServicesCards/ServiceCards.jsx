import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { API_ENDPOINTS } from "../../services/api";
import ALinks from "../ALinks/ALinks";
import styles from "./ServiceCards.module.css";

export default function ServiceCards(){
    const [ project, setProject ] = useState([]);

    useEffect(() => {
        axios.get(API_ENDPOINTS.PROJECTS)
        .then(response => setProject(response.data))
        .catch(error =>{ console.log("Tivemos um erro ao carregar ----- ", error)})
    }, [])

    if (!project) return (
        <section className={styles.services}>
            <h2>Explore meu portifólio de projetos</h2>
            <div className={styles.line}></div>
            <div className={styles.containerService}>
                {
                    project.map((item) => (
                        <div key={item.id} className={styles.serviceCards}>
                            <img src={<Skeleton/>} alt="" />
                            <h3>{<Skeleton/>}</h3>
                            <span>{<Skeleton/>}</span>
                            <p>{<Skeleton/>}</p>
                            <ALinks name={<Skeleton/>}/>
                        </div>
                    ))
                }
            </div>
        </section>
    )

    return(
        <section className={styles.services}>
            <h2>Explore meu portifólio de projetos</h2>
            <div className={styles.line}></div>
            <div className={styles.containerService}>
                {
                    project.map((item) => (
                        <div key={item.id} className={styles.serviceCards}>
                            <img src={item.icon} alt="" />
                            <h3>{item.title}</h3>
                            <span>{item.subtitle}</span>
                            <p>{item.description}</p>
                            <ALinks
                                href={item.link_project}
                                name={"Ver mais"}
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}