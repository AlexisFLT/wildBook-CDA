import avatar from "../../assets/avatar.png"
import styles from "./wilderCard.module.css";

function WilderCard({id, name, city, skills}) {

console.log(skills);
    return(
        <div className={styles.app} key={id}>
            <img className={styles.avatarImg} src={avatar} alt="avatar"/>
            <section className={styles.about}>
                <h3 className={styles.h3}>{name} <span className={styles.city}>- {city}</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
            </section>
            <section className={styles.skillsList}>
                <h4>Wild Skills</h4>
                <ul className={styles.skills}>               
                    {skills.map((skill)=> (
                        <button className={styles.button}>
                            <li>
                              {skill.title}
                              <span className={styles.grades}> {skill.votes}</span>
                            </li>
                        </button>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default WilderCard;