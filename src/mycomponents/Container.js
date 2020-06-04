import React from 'react';
import TextInput from './TextInput';
import Button from './Button';
import RemoveButton from './RemoveButton';
import CompleteButton from './CompleteButton';

class Container extends React.Component{
    state={
        valeur:"rien",
        taches:[],
        taille:0
    }
    render(){
        return(<div className="containter">
            <TextInput/><Button parent={this}/>
            {this.state.taches.map((el,index)=>{
                return(<div key={index}>
                    <h5>{el.id}-{el.libele}-{el.etat}<CompleteButton parent={this} refe={el}/> <RemoveButton parent={this} refe={el}/></h5>
                </div>)
            })}
        </div>)
    }
}

export default Container;