import React from "react";
export default  (props) =>{

    return (<li className="list__item">
        Name: <span className="item__name">{props.name}</span> -
        Reward: <span className="item__reward">{props.reward}</span> -
        Total: <span className="item__reward">{props.total}</span>
    </li>)
}