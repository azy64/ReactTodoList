import React from 'react';

const myClick=(el)=>{
    //console.log(document.getElementById("text").value);
    let v=document.getElementById("text").value;
    //console.log(el);
    let tab=el.state.taches;
    let last=tab.length>0?tab[tab.length-1].id+1:1;
    
    let t={libele:v,id:last,etat:"pending"};
    tab.push(t);
    el.setState({valeur:"j'ai changé de valeur",taille:tab.length,taches:tab});
    //console.log(this.props.parent.state);
}
const Button=({parent})=>{
    return(
        <button onClick={()=>myClick(parent)}>Add</button>
    )
}
export default Button;