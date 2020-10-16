 const accumRewards = (spent) => {
    let rewards = 0;
    if(spent > 50){
        rewards = spent - 50;
        if(spent > 100){
            rewards = 50 + ((spent- 100)*2);
        }
    }
    return rewards;
}

export const rewards = (purchases)=>{

    let map = new Map();
    for(let purchase of purchases){
    // defualty make the get 0 if it is undefined
        if(!map.get(purchase.name)){
            map.set(purchase.name, 
                {reward:  accumRewards(purchase.spent),
                total: purchase.spent });
        }else{
            map.set(purchase.name, 
                {reward:map.get(purchase.name).reward + accumRewards(purchase.spent),
                total: map.get(purchase.name).total  + purchase.spent});
        }
    }  
    return Array.from(map);
}

// class Consumer{
//     constructor(name, reward, total)
// }

