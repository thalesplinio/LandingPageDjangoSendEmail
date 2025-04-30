import { BsDownload } from "react-icons/bs";
import { toast } from "react-toastify";
import image from "../../assets/thales.jpg";
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

    return (
        <section className={styles.hero}>
            <div className={styles.imageContainer}>
                <img src={image} alt="" className={styles.profilePic} />
                <span className={styles.sticker}>Thales Plinio 👋</span>
            </div>
            <h1>Transformando ideias em realidade digital com o poder da tecnologia em suas mãos.</h1>
            <Button onclick={handleDownloadCv} content="Ver Cv" icon={<BsDownload />}></Button>
        </section>
    )
}