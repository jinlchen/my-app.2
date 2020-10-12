
import React from "react"
function FormComponent(props)  {
   
      return (
        <main>
          <form>
            <input type="text" name="FirstName" value={props.data.FirstName}  onChange={props.handleChange} placeholder="First Name"></input>
            <br></br>
            <input type="text" name="LastName" value={props.data.LastName} onChange={props.handleChange} placeholder="Last Name"></input>
            <br></br>
            <input type="text" name="Age" value={props.data.Age} onChange={props.handleChange} placeholder="Age"></input>
            <br></br>
            <input type="radio" name = "Gender" value="male" checked={props.data.Gender === "male"} onChange={props.handleChange}></input>
            <br></br>
            <input type="radio" name = "Gender" value="female" checked={props.data.Gender === "female"} onChange={props.handleChange}></input>
            <br></br>
            <select name="Location" value={props.data.Location} onChange={props.handleChange}>
            <option value=""> ----</option>
              <option value="Toronto"> Toronto</option>
              <option value="Yuncheng"> Yun Cheng </option>
            </select>
            <br></br>
            <label>
              <input 
                  type="checkbox" 
                  name="IsVeg" 
                  checked={props.data.IsVeg} 
                  onChange={props.handleChange}> 
              </input> IsVeg?
              <br></br>
              <input 
                type="checkbox" 
                name="IsKosher" 
                checked={props.data.IsKosher} 
                onChange={props.handleChange}> 
              </input> IsKosher?
            </label>
            <br></br>
            <br></br>
            <br></br>
            <button onSubmit={props.handleSubmit}>Submit</button>
          </form>
          
          <label>Your input:</label>
          <br></br>
          <label>Name: {props.data.FirstName}, {props.data.LastName}</label>
          <br></br>
          <label>Age: {props.data.Age}</label>
          <br></br>
          <label>Gender: {props.data.Gender}</label>
          <br></br>
          <label>Location: {props.data.Location}</label>
          <br></br>
          <label>
          Veg: {props.data.IsVeg ? "Yes":"No" }
          </label>
          <br></br>
          <label>
          Kosher: {props.data.IsKosher ? "Yes":"No" }
          </label>
        </main>
      )
    }
  
  export default FormComponent