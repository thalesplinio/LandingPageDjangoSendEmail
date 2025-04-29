import imgHand from "../../assets/img/handshake.png";
import Button from "../Buttons/Button";
import style from "./Contact.module.css";


export default function Contact(){

    const handleSubmit = async (e) =>{
        e.preventDefault();
    }

    return (
        <div className={style.containerContact}>
            <div className={style.contactCircleHand}>
                <img src={imgHand} alt="" />
            </div>
            <h3>Contato</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome completo</label>
                <input type="text" name="name" id="name" placeholder="informe seu nome completo" required/>

                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="informe seu melhor e-mail" required/>

                <label htmlFor="message">Mensagem</label>
                <textarea name="mensagem" id="mensagem" placeholder="informe sua mensagem..." required></textarea>
                
                <Button content="Enviar" type="submit"/>
            </form>
        </div>
    )
}