import React from "react";
import s from "./BenefitsItem.module.css";

import tv from "./tv.png";

const BenefitsItem = (props) => {
    return (
        <div className={s.item}>
            <img src={tv} alt="tv" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae mollitia suscipit enim ipsa. Quos illum eius odio maiores illo quae
                cupiditate! Pariatur, earum minima iure labore dignissimos esse vel.
            </p>
        </div>
    );
};

export default BenefitsItem;
