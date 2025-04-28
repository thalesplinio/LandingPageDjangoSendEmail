import styles from "./Button.module.css";


export default function Button({onclick, content, icon, type="button"}){
    return (
        <button className={styles.button} onClick={onclick} type={type}>
            {content} <span className={styles.icon}>{icon}</span>
        </button>
    )
}