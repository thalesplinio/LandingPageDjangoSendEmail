import styles from "./Footer.module.css";


export default function Footer(){
    return(
        <footer>
            <div className={styles.line}></div>
            <div className={styles.containerFooter}>
                <span>© Thales Plinio - Todos os direitos reservados</span>
                <div className={styles.socialMidia}>
                    <a href="#">Linkedin</a>
                    <a href="#">Github</a>
                    <a href="#">Instagran</a>
                </div>
            </div>
        </footer>
    )
}