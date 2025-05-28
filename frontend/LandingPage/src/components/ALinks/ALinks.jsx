import styles from "./ALinks.module.css";


export default function ALinks({ href, onClink, name, icon }){
    return (
        <a
            href={href}
            className={styles.link_btn}
            onClick={onClink}
            target="_blank"
            rel="noopener noreferrer"
        >
            {name}
            <span className={styles.icon}>{icon}</span>
        </a>
    );
}