import React from 'react';

function removeElm(parent,obj){
    let tab=parent.state.taches;
    let n=[];
    for(let i=0;i<tab.length;i++){
        if(tab[i].id!==obj.id)
            n.push(tab[i]);
    }
    parent.setState({
        taches:n,
        taille:n.length
    })
    //console.log(n)
}
const RemoveButton=({parent,refe})=>{
    console.log(parent);
    console.log(refe);
    return(
        <button onClick={()=>{removeElm(parent,refe)}}>Remove</button>
    )
}
export default RemoveButton;