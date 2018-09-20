import React from "react";

import classes from "./pizzaIamge.css";
import PizzaImage from "../../assets/pizza.jpg";

const pizzaIamge = (props) => (
    <div className={classes.pizzaImage}>
        <img src={PizzaImage} className={classes.PizzaImg} />
    </div>
);

export default pizzaIamge;