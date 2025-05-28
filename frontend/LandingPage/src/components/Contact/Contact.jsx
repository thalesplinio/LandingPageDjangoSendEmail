import axios from "axios";
import { useEffect, useState } from "react";
import 'react-loading-skeleton/dist/skeleton.css';
import { toast } from "react-toastify";
import imgHand from "../../assets/img/handshake.png";
import { API_ENDPOINTS } from "../../services/api";
import Button from "../Buttons/Button";
import style from "./Contact.module.css";


export default function Contact(){

    const [ formData, setFormData ] = useState({ name: "", email: "", message: "" });
    const [ apiOnline, setApiOnline ] = useState(true);

    // testa se a api está online
    useEffect(() => {
        axios.get(API_ENDPOINTS.PING_API)
            .then(() => setApiOnline(true))
            .catch(() => setApiOnline(false));
    }, []);

    const handleChange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            await axios.post(API_ENDPOINTS.CONTACTS, formData)
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

            {!apiOnline ? (
                <p style={{color: "red", textAlign: "center"}}>⚠️ O sistema de contato está temporariamente indisponível.</p>
            ) : (
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
            )}
        </div>
    )
}