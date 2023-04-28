import axios from "axios";
import PropTypes from 'prop-types';
import { useState } from "react";

const AddWilder = ({ refresh }) => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/wilder", { name, city }).then(() => {
            setName("");
            setCity("");
            refresh();
        });
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <br />
            <label>City</label>
            <input
                type="text"
                value={city}
                onChange={(e) => {
                    setCity(e.target.value);
                }}
            />
            <br />
            <button>Add Wilder</button>
        </form>
    );
};

AddWilder.propTypes = {
    refresh: PropTypes.func.isRequired,

}

export default AddWilder;
