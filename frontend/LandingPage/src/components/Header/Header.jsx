import { useRef, useState } from "react";
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

    return (
        <header className={styles.topHeader}>
            <div className={styles.emailSection}>
                <span ref={emailRef} className={styles.emailExemple}>email_exemple@email.com</span>
                <button className={styles.btnCopy} onClick={handleCopyEmail}>Copiar</button>
            </div>

            <div className={styles.menuToggle} onClick={() => setShowNav(!showNav)}>
                {showNav ? <IoMdClose /> : <IoMenu /> }
            </div>            

            <nav className={`${styles.socialMidiaLinks} ${showNav ? styles.show : ''}`}>
                <a href="#">Linkedin</a>
                <a href="#">Github</a>
                <a href="#">Instagran</a>
            </nav>
        </header>
    );
}