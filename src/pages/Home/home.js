import Header from "../../components/Header/header";
import styles from "./home.module.css";

function Home() {
    return(
        <div className={styles.app}>
            <header>
                <Header/>
            </header>
        </div>
    )
}

export default Home;