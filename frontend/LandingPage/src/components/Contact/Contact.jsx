import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import imgHand from "../../assets/img/handshake.png";
import Button from "../Buttons/Button";
import style from "./Contact.module.css";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Contact(){

    const [ formData, setFormData ] = useState({ name: "", email: "", message: "" });
    const endPointContact = "http://127.0.0.1:8000/api/contact/";

    const handleChange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            await axios.post(endPointContact, formData)
            setFormData({ name: "", email: "", message: "" });
            toast.success("Obrigado por entrar em contato, assim que possível retornaremos", {
                position: "top-center",
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }catch(error){
            console.log("Tivemos um erro ao carregar ----- ", error)
            toast.error(
                "Não foi possível entrar em contato, tente novamente mais tarde!", {
                position: "top-center",
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <div className={style.containerContact}>
            <div className={style.contactCircleHand}>
                <img src={imgHand} alt="" />
            </div>
            <h3>Contato</h3>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome completo</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="informe seu nome completo" 
                    required
                />

                <label htmlFor="email">E-mail</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="informe seu melhor e-mail" 
                    required
                />

                <label htmlFor="message">Mensagem</label>
                <textarea 
                    name="message" 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="informe sua mensagem..."></textarea>
                
                <Button content="Enviar" type="submit"/>
            </form>
        </div>
    )
}