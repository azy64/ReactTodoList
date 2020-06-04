import React from 'react';

function putComplete(parent,obj){
    let tab=parent.state.taches;
    for(let i=0;i<tab.length;i++){
        if(tab[i].id===obj.id)
            tab[i].etat="completed";
    }
    parent.setState({
        taches:tab
    })
    //console.log(n)
}
const CompleteButton=({parent,refe})=>{
    console.log(parent);
    console.log(refe);
    return(
        <button onClick={()=>{putComplete(parent,refe)}}>complete</button>
    )
}
export default CompleteButton;