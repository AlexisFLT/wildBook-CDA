import { useEffect, useState } from "react";
import WilderCard from "../WilderCard/wilderCard";
import styles from "./wildersBlock.module.css";
import axios from "axios";

function Wilders() {

    const [wilders, setWilders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const wilders = await axios.get("http://localhost:5000/api/wilder");
            console.log(wilders.data);
            setWilders(wilders.data)
        };
        fetchData();
    }, []);

    return(
        <div className={styles.app}>
            <h2 className={styles.h2}>Wilders</h2>
            <section className={styles.cardsBlock}>
                {wilders.map((wilder) => (
                    <WilderCard
                        key={wilder.id}
                        name= {wilder.name}
                        city= {wilder.city}
                        skills={wilder.skills}
                        
                    />
                ))}
            </section>
        </div>
    )
}

export default Wilders;