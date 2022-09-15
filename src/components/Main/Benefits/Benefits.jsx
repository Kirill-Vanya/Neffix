import React from "react";
import s from "./Benefits.module.css";
import InfoItem from "./BenefitsItems/BenefitsItem";

const Benefits = () => {
    return (
        <div className={s.container}>
            <InfoItem />
        </div>
    );
};

export default Benefits;
