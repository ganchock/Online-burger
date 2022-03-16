import React from "react";
import css from "./style.module.css";

const BuildControl = (props) => ( <
    div className = { css.BuildControl } >
    <
    div className = { css.Label } > { props.ingredient } < /div>{" "} <
    button disabled = { props.disabled[props.type] }
    onClick = { props.ortsHasah }
    className = { css.Less } >
    { " " }
    Хасах { " " } <
    /button>{" "} <
    button onClick = {
        () => props.ortsNemeh(props.type) }
    className = { css.More } > { " " }
    Нэмэх { " " } <
    /button>{" "} <
    /div>
);

export default BuildControl;