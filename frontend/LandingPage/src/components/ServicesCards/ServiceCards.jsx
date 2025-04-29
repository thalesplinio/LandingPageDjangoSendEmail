import img from "../../assets/img/computer.png";
import Button from "../Buttons/Button";
import styles from "./ServiceCards.module.css";


export default function ServiceCards(){
    return(
        <section className={styles.services}>
            <h2>Explore meu portifólio de projetos</h2>
            <div className={styles.line}></div>
            <div className={styles.containerService}>
                <div className={styles.serviceCards}>
                    <img src={img} alt="" />
                    <h3>Project Title 1</h3>
                    <span>Django, ReactJS, MySQL</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, adipisci.</p>
                    <Button content="Ver mais"></Button>
                </div>
                <div className={styles.serviceCards}>
                    <img src={img} alt="" />
                    <h3>Project Title 1</h3>
                    <span>Django, ReactJS, MySQL</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, adipisci.</p>
                    <Button content="Ver mais"></Button>
                </div>
                <div className={styles.serviceCards}>
                    <img src={img} alt="" />
                    <h3>Project Title 1</h3>
                    <span>Django, ReactJS, MySQL</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, adipisci.</p>
                    <Button content="Ver mais"></Button>
                </div>
            </div>
        </section>
    )
}