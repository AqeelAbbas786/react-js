import React from 'react'

export default function Alert(props) {
    const Capitilize = (word) => {
        let newword = word.toLowerCase();
        return newword.charAt(0).toUpperCase() + newword.slice(1);
    }
    return (

        <div style={{height:'50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-${props.alert.type} fade show`} role="alert">
            <strong>{Capitilize(props.alert.type)}</strong> : {props.alert.msg}
        </div>}
        </div>
    )
}