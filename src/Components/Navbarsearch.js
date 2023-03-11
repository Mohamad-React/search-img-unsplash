import React, { useEffect, useState } from 'react';
import axios from "axios";
import styles from "./Navbar.module.css";


const Navbarsearch = () => {
    //udGILLqMm4LZmGFfVTlAPZNaQ1-3WKT_8lK0pOJgqIM
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    console.log(result);
    const inputHandler = (event) => {
        setValue(event.target.value);
    }



    const clickhandler = () => {
        axios.get(`https://api.unsplash.com/search/photos/?client_id=udGILLqMm4LZmGFfVTlAPZNaQ1-3WKT_8lK0pOJgqIM&query=${value}`)
            .then(response => {
                setResult(response.data.results);
            })
            .catch(error => {
                console.error(error);
            });
    };



    return (
        <>
            <header>

                <div className={styles.container}>
                    <button onClick={clickhandler}>
                        search
                    </button>
                    <input type="text" placeholder='type somthing' value={value} onChange={inputHandler} />
                </div>
            </header>
            <div className={styles.gallery}>
                {result && result.map((item, index) => <img src={item.urls.regular} key={index} alt="bos" />)}

            </div>

        </>
    );
};

export default Navbarsearch;