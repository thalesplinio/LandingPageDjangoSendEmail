import styles from "./ALinks.module.css";


export default function ALinks({ref, onClink, name, icon}){
    return (
        <a href={ref} className={styles.link_btn} onClick={onClink}>{name}
            <span className={styles.icon}>{icon}</span>
        </a>
    );
}