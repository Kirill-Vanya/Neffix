import React from "react";
import s from "./Info.module.css";

const Info = () => {
    return (
        <div className={s.container}>
            <div className={s.inner}>
                <h1>Watch any movies right now!</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nihil! Officia aliquam voluptates excepturi, quidem, amet, modi commodi
                    consequatur porro aspernatur aut sed magnam cumque consectetur expedita hic? Quis, tempora!
                </p>
            </div>
            <button>Buy a subscription</button>
        </div>
    );
};

export default Info;
