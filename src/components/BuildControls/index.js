import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
const BuildControls = (props) => ( <
    div className = { css.BuildControls } > { " " } <
    BuildControl ortsHasah = {
        () => props.ortsHasah("salad") }
    ortsNemeh = { props.ortsNemeh }
    disabled = { props.disabledIngredients }
    type = "salad"
    ingredient = "Салад" /
    > { " " } <
    BuildControl ortsHasah = {
        () => props.ortsHasah("bacon") }
    ortsNemeh = { props.ortsNemeh }
    disabled = { props.disabledIngredients }
    type = "bacon"
    ingredient = "Гахайн мах" /
    > { " " } <
    BuildControl ortsHasah = {
        () => props.ortsHasah("cheese") }
    ortsNemeh = { props.ortsNemeh }
    disabled = { props.disabledIngredients }
    type = "cheese"
    ingredient = "Бяслаг" /
    > { " " } <
    BuildControl ortsHasah = {
        () => props.ortsHasah("meat") }
    ortsNemeh = { props.ortsNemeh }
    disabled = { props.disabledIngredients }
    type = "meat"
    ingredient = "Үхрийн мах" /
    > { " " } <
    /div>
);

export default BuildControls;