import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { toast } from "react-toastify";
import styles from "./Header.module.css";

export default function Header(){

    const [showNav, setShowNav] = useState(false);
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

    const [ links, setLinks ] = useState([]);
    const endpointLinks = "http://127.0.0.1:8000/api/social_midia/";
    const [ email, setEmail ] = useState(null);
    const endpointEmail = "http://127.0.0.1:8000/api/site_setup/";
    
    /* Referente aos links */
    useEffect(() => {
        axios.get(endpointLinks)
        .then(response => setLinks(response.data))
        .catch(error =>{ console.log("Tivemos um erro ao carregar ----- ", error)})
    }, [])

    /* Referente ao email no header */
    useEffect(() => {
        axios.get(endpointEmail)
        .then(response => {setEmail(response.data[0])})
        .catch(error =>{console.log("Tivemos um erro ao carregar ----- ", error)});
    }, [])

    if (!links) return <p>Carregando...</p>
    if (!email) return <p>Carregando...</p>

    return (
        <header className={styles.topHeader}>
            <div className={styles.emailSection}>
                <span ref={emailRef} className={styles.emailExemple}>{email.email}</span>
                <button className={styles.btnCopy} onClick={handleCopyEmail}>Copiar</button>
            </div>

            <div className={styles.menuToggle} onClick={() => setShowNav(!showNav)}>
                {showNav ? <IoMdClose /> : <IoMenu /> }
            </div>            

            <nav className={`${styles.socialMidiaLinks} ${showNav ? styles.show : ''}`}>
                {
                    links.map((item) =>(
                        // console.log(item.name)
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


                {/* <a href="#">Linkedin</a>
                <a href="#">Github</a>
                <a href="#">Instagran</a> */}
            </nav>
        </header>
    );
}