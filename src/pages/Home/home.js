import AddWilder from "../../components/AddWilder/addWilder";
import Header from "../../components/Header/header";
import RemoveWilder from "../../components/RemoveWilder/removeWilder";
import Wilders from "../../components/Wilders/wildersBlock";
import styles from "./home.module.css";

function Home() {

    return(
        <div className={styles.app}>
            <header>
                <Header/>
            </header>
            <section className={styles.addRemove} >
                <AddWilder />
                <RemoveWilder />
            </section>
            <section>
                <Wilders/>
            </section>
        </div>
    )
}

export default Home;