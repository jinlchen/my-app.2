import React from'react'
function Product(props) {
    return (
        <div>
            Product ID: {props.p.id}
            Product Name: {props.p.name}
            Product Description: {props.p.description}
        </div>
    )
}
export default Product