import axios from "axios";
import { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import { toast } from "react-toastify";
import Button from "../Buttons/Button";
import styles from "./Hero.module.css";


export default function Hero(){

    const handleDownloadCv = () =>{
        toast.success("O Currículo está sendo baixado...", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    const [hero, setHero] = useState(null);

    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/api/site_setup/')
            .then(response => {
                setHero(response.data[0])
            })
            .catch(error =>{
                console.log("Tivemos um erro ao carregar ----- ", error)
            });
    }, []);

    if (!hero) return <p>Carregando...</p>
    console.log(hero.name)

    return (
        <section className={styles.hero}>
            <div className={styles.imageContainer}>
                <img src={hero.image} alt="" className={styles.profilePic} />
                <span className={styles.sticker}>{hero.name}</span>
            </div>
            <h1>{hero.description}</h1>
            <Button onclick={handleDownloadCv} content="Ver Cv" icon={<BsDownload />}></Button>
        </section>
    )
}