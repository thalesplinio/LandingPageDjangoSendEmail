import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from "./Footer.module.css";

export default function Footer(){

    const [ footer, setFooter ] = useState(null);
    const [ links, setLinks ] = useState([]);

    const API_BASE = import.meta.env.VITE_REACT_APP_API_URL;
    const pointFooter = API_BASE + "/api/site_setup/";
    const pointLinks = API_BASE + "/api/social_midia/";

    useEffect(() => {
        axios.get(pointFooter)
        .then(response => setFooter(response.data[0]))
        .catch(error =>{ console.log("Tivemos um erro ao carregar ----- ", error)})
    }, [])
    
    useEffect(() => {
        axios.get(pointLinks)
        .then(response => setLinks(response.data))
        .catch(error =>{ console.log("Tivemos um erro ao carregar ----- ", error)})
    }, [])

    if (!footer || !links) return (
        <footer>
            <div className={styles.line}></div>
            <div className={styles.containerFooter}>
                <span>{<Skeleton/>}</span>
                <div className={styles.socialMidia}>
                    {
                        links.map((item) => (
                            <a 
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                {<Skeleton/>}
                            </a>
                        ))
                    }
                </div>
            </div>
        </footer>
    )

    return(
        <footer>
            <div className={styles.line}></div>
            <div className={styles.containerFooter}>
                <span>{footer.name_footer}</span>
                <div className={styles.socialMidia}>
                    {
                        links.map((item) => (
                            <a 
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                {item.name}
                            </a>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}