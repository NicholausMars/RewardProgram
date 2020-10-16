import React from "react";
import ListItem from "./listItem";
import {purchases} from "../data";
import {rewards} from "../helpers/rewards"
export default  () =>{
    let customers = rewards(purchases);
    return (<ul className="list">
                {customers.map(([name, {reward, total}])=>
                <ListItem key={name} name={name} reward={reward} total={total} /> )}
    </ul>)
}