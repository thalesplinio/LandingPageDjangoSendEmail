import styles from "./ALinks.module.css";


export default function ALinks({ href, onClink, name, icon, className }){
    return (
        <a
            href={href}
            className={`${styles.link_btn} ${className} || ""`}
            onClick={onClink}
            target="_blank"
            rel="noopener noreferrer"
        >
            {name}
            <span className={styles.icon}>{icon}</span>
        </a>
    );
}