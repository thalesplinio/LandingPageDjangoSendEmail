import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Footer.module.css";


export default function Footer(){

    const [ footer, setFooter ] = useState(null);
    const endpointFooter = "http://127.0.0.1:8000/api/site_setup/";

    const [ links, setLinks ] = useState([]);
    const endpointLinks = "http://127.0.0.1:8000/api/social_midia/";

    /* Referente ao footer */
    useEffect(() => {
        axios.get(endpointFooter)
        .then(response => setFooter(response.data[0]))
        .catch(error =>{ console.log("Tivemos um erro ao carregar ----- ", error)})
    }, [])
    
    /* Referente aos links */
    useEffect(() => {
        axios.get(endpointLinks)
        .then(response => setLinks(response.data))
        .catch(error =>{ console.log("Tivemos um erro ao carregar ----- ", error)})
    }, [])

    if (!footer) return <p>Carregando...</p>
    if (!links) return <p>Carregando...</p>

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