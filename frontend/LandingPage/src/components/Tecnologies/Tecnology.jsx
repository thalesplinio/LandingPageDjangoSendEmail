import styles from "./Tecnology.module.css";


export default function Tecnology(){

    const tecnologies = [
        "JavaScript",
        "Python",
        "Django",
        "C# .NET",
        "Java",
        "Spring",
        "MySQL",
        "PostgreSQL"
    ]

    return(
        <section className={styles.tecContainer}>
            <div className={styles.slider}>

                {tecnologies.concat(tecnologies).map((tech, index) => (
                    <span key={index}>{tech}</span>
                ))}

            </div>
        </section>
    )
}