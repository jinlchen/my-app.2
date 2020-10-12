import React from 'react'
import '../Style.css'
import ToDoItem from "./ToDoItem"
import ContactCard from "./ContactCard"
import products from "./VSchoolProducts"
import Product from "./product"
import todosData from "./todosData"
function MyInfo () {
    console.log(products)
//const myProducts = products.map( product=>{return (<Product key={product.id} p={product} > </Product>)}
        
    const todos =   todosData.map(todo=> <ToDoItem  item={todo} key={todo.id}></ToDoItem>
    )
       
    

    return (
        <div>
        {todos}
        {/*
            <ContactCard contact={{name: "Mr. Wiskerson", imgUrl:"http://placekitten.com/300/200", phone:"4165290000", email:"jinlchen"}}></ContactCard>
        <ContactCard contact={{name: "Mr. Wiskerson", imgUrl:"http://placekitten.com/300/200", phone:"4165290000", email:"jinlchen"}}></ContactCard>
        */}
        {/* <ContactCard name="Mr. Wiskerson" imgUrl="http://placekitten.com/300/200" phone="4165290000" email="jinlchen"></ContactCard> */}
        </div>

    )
}
export default MyInfo