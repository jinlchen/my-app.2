import React from 'react'
import FormComponent from "./FormComponent"
class Form extends React.Component {
    constructor(){
        super()
        this.state={
          FirstName:'',
          LastName:'',
          Age: '',
          Gender: '',
          Location:'',
          IsVeg:false, 
          IsKosher:false
        }
        this.handleChange = this.handleChange.bind(this)
      }
      handleChange(event){
        const {type,name, checked, value} = event.target
        if (type==="checkbox")
          this.setState({[name]:checked}
          )
        else
          this.setState({[name]:value})
    console.log(type,name,checked,value)
      }
    render(){
        return (
            <FormComponent data={this.state} handleChange={this.handleChange}></FormComponent>
         )
    }
}
export default Form