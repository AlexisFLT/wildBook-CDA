import avatar from "../../assets/avatar.png"
import {BsTrash3Fill} from "react-icons/bs"
import PropTypes from 'prop-types';
import axios from "axios";
import styles from "./wilderCard.module.css";

function WilderCard({id, name, city, skills, key, refresh }) {

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/wilder/${id}`)
            .then(()=> { 
                refresh()            
            })
            .catch((error) => {
            console.error(error)
        });
      };
console.log(id);
    return(
        <div className={styles.app} key={id}>
            <button type="button" onClick={() => handleDelete(id)} className={styles.trash}><BsTrash3Fill/></button>
            <img className={styles.avatarImg} src={avatar} alt="avatar"/>
            <section className={styles.about}>
                <h3 className={styles.h3}>{name}<span className={styles.city}> {city}</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
            </section>
            <section className={styles.skillsList}>
                <h4>Wild Skills</h4>
                <ul className={styles.skills} >               
                    {skills.map((skill)=> (
                        <button type="button" key={skill.id}  className={styles.button}>
                            <li className={styles.skillGrade}>
                              <h5 className={styles.gradeTitle}>{skill.title}</h5>
                              <span className={styles.grades}>{skill.votes}</span>
                            </li>
                        </button>
                    ))}
                </ul>
            </section>
        </div>
    )
}

WilderCard.propTypes = {
    key : PropTypes.number,
    id : PropTypes.number,
    name : PropTypes.string.isRequired,
    city : PropTypes.string.isRequired,
    skills : PropTypes.arrayOf(PropTypes.object).isRequired,
    refresh: PropTypes.func.isRequired,

}

export default WilderCard;