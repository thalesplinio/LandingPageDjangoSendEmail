import axios from "axios";
import { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { toast } from "react-toastify";
import ALinks from "../ALinks/ALinks";
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
    const endpoint = "http://127.0.0.1:8000/api/site_setup/";
    useEffect(() =>{
        axios.get(endpoint)
            .then(response => {setHero(response.data[0])})
            .catch(error =>{console.log("Tivemos um erro ao carregar ----- ", error)});
    }, []);

    if (!hero) return (
        <section className={styles.hero}>
            <div className={styles.imageContainer}>
                <img src={<Skeleton/>} alt="" className={styles.profilePic} />
                <span className={styles.sticker}>{<Skeleton/>}</span>
            </div>
            <h1>{<Skeleton/>}</h1>
            <Skeleton/>
        </section>
    )

    return (
        <section className={styles.hero}>
            <div className={styles.imageContainer}>
                <img src={hero.image} alt="" className={styles.profilePic} />
                <span className={styles.sticker}>{hero.name}</span>
            </div>
            <h1>{hero.description}</h1>
            {/* <Button onclick={handleDownloadCv} content="Ver Cv" icon={<BsDownload />}></Button> */}
            <ALinks name={"Ver CV"} icon={<BsDownload/>} onClink={handleDownloadCv} ref={hero.pdf}/>
        </section>
    )
}