import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <div className={s.container}>
            <p>Neffix</p>
            <button>Sign in</button>
        </div>
    );
};

export default Header;
