import React from 'react'
function ContactCard(props) {
//console.log(props)
    return(
        <div>
        <img src={props.contact.imgUrl}></img>
        <h1>{props.contact.name}</h1>
        <p>{props.contact.phone}</p>
        <p>{props.contact.email} </p>
        </div>
    )
}
export default ContactCard