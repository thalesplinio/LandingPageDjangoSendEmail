import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "../../services/api";
import styles from "./Header.module.css";


export default function Header(){

    const [ showNav, setShowNav ] = useState(false);
    const [ links, setLinks ] = useState([]);
    const [ email, setEmail ] = useState(null);
    const emailRef = useRef(null);
    
    const handleCopyEmail = () =>{
        if (emailRef.current){
            navigator.clipboard.writeText(emailRef.current.textContent)
            .then(()=>{
                toast.success("O E-mail foi copiado...", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            })
        }
    }
    
    /* Referente aos links */
    useEffect(() => {
        axios.get(API_ENDPOINTS.SOCIAL_MIDIA)
        .then(response => setLinks(response.data))
        .catch(error =>{ console.log("Tivemos um erro ao carregar ----- ", error)})
    }, [])

    /* Referente ao email no header */
    useEffect(() => {
        axios.get(API_ENDPOINTS.SITE_SETUP)
        .then(response => {setEmail(response.data[0])})
        .catch(error =>{console.log("Tivemos um erro ao carregar ----- ", error)});
    }, [])

    if (!links || !email) return (
        <header className={styles.topHeader}>
            <div className={styles.emailSection}>
                <span ref={emailRef} className={styles.emailExemple}>{<Skeleton/>}</span>
                <button className={styles.btnCopy} onClick={handleCopyEmail}>{<Skeleton/>}</button>
            </div>

            <div className={styles.menuToggle} onClick={() => setShowNav(!showNav)}>
                {showNav ? <IoMdClose /> : <IoMenu /> }
            </div>            

            <nav className={`${styles.socialMidiaLinks} ${showNav ? styles.show : ''}`}>
                {
                    links.map((item) =>(
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
            </nav>
        </header>
    )

    return (
        <header className={styles.topHeader}>
            <div className={styles.emailSection}>
                <span ref={emailRef} className={styles.emailExemple}>{email.email || <Skeleton/>}</span>
                <button className={styles.btnCopy} onClick={handleCopyEmail}>Copiar</button>
            </div>

            <div className={styles.menuToggle} onClick={() => setShowNav(!showNav)}>
                {showNav ? <IoMdClose /> : <IoMenu /> }
            </div>            

            <nav className={`${styles.socialMidiaLinks} ${showNav ? styles.show : ''}`}>
                {
                    links.map((item) =>(
                        <a 
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            {item.name || <Skeleton/>}
                        </a>
                    ))
                }
            </nav>
        </header>
    );
}