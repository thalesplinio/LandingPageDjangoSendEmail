import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import { API_ENDPOINTS } from "../../services/api";
import styles from "./Tecnology.module.css";


export default function Tecnology(){

    const [ tech, setTech ] = useState([]);

    useEffect(() => {
        axios.get(API_ENDPOINTS.TECHNOLOGIES)
        .then(response => setTech(response.data))
        .catch(error => { console.log("Tivemos um erro ao carregar ----- ", error)})
    }, [])
    
    if (tech.length === 0) return (
        <section className={styles.tecContainerSkeleton}>
            <div className={styles.sliderSkeleton}>
                <span>{<Skeleton/>}</span>
            </div>
        </section>
    );

    return(
        <section className={styles.tecContainer}>
            <div className={styles.slider}>
                {
                    tech.map((item) =>(
                        <span key={item.id}>{item.name}</span>
                    ))
                }
                {
                    tech.map((item) =>(
                        <span key={item.id}>{item.name}</span>
                    ))
                }
            </div>
        </section>
    )
}
