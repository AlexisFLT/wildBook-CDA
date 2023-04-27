import axios from "axios";
import { useState } from "react";

const RemoveWilder = () => {
    const [name, setName] = useState("");

    return(
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                axios.delete(`http://localhost:5000/api/wilder`, { name } );
         }}
        >
            <label>Name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <br />
            <button>Remove Wilder</button>
        </form>
    );
};

export default RemoveWilder