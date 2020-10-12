import React from 'react';
import logo from './logo.svg';
import './App.css';
//import './MyInfo'
import MyInfo from './Components/MyInfo';
import todosData from './Components/todosData'
import ToDoItem from './Components/ToDoItem';
import Conditional from './Components/Conditional'
import Form from './Components/FormContainer'
import Header from './Components/Header'
import Meme from './Components/Meme'
/*
class  App extends React.Component {
  constructor(){
    super()
this.state= {todosData : todosData}
  }
  render() {
    console.log(this.state.todosData)
    const todosList = this.state.todosData.map(item=><ToDoItem item={item} key={item.id}></ToDoItem>)
    console.log(todosList)
    return (
     <div className="App">
        {todosList}
      </div>
        
    )
  }
} 
*/
/*
class  App extends React.Component {
  constructor(){
    super()
    this.state= {todosData : todosData}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(c){ */
    //console.log(c)
    /*
    const newToDoList = this.state.todosData.map(
      todoItem=>{
        
        if (todoItem.id === c){
          todoItem.completed = !todoItem.completed
          console.log(todoItem)
        }
        return todoItem
       }
       
    )*/
    //console.log(newToDoList)
    //this.setState({todosData: newToDoList})
    /*
    this.setState(prevState=>{
      //console.log(prevState.todosData)
      const newToDoList = prevState.todosData.map(
          item=>{
            if ( item.id===c)
              item.completed = !item.completed
            
            return item
          }

        )
        console.log(React.version)
        return {todosData: newToDoList}
      }
    )
  }
  render() {
    //console.log(this.state.todosData)
    const todosList = this.state.todosData.map(item=><ToDoItem item={item} key={item.id} handleChange={this.handleChange}></ToDoItem>)
   // console.log(todosList)
    return (
     <div className="App">
        {todosList}
      </div>
        
    )
  }
} 
*/
/*
class App extends React.Component{
  constructor()
  {
    super()
    this.state = {count: 0}
    this.handleClick = this.handleClick.bind(this)
  }
   handleClick(){
     //this.state.count =     c + 1
     this.setState((prevState)=>{return {count: prevState.count + 1 }})
console.log(this.state.count)
  }
    render() {
      return (
        <div>
        <img src="https://www.fillmurray.com/200/100"></img>
        <h1> Count={this.state.count}</h1>
        <button onClick={this.handleClick}> mybutton</button>
        </div>
    )
  }
}*/
/*
class App extends React.Component {
  constructor(){
    super()
    this.state = {isLoading:true, t: "abc"}
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false, t:"123"})
    }, 1500);
//this.setState({isLoading: false})
   // console.log(this.state.isLoading)
  }
  render(){
    return (
      this.state.isLoading ? <h1> loading</h1> :
      <Conditional ></Conditional>
    )
  }
}*/
/*
class App extends React.Component {
  constructor(){
    super()
    this.state = {isLoggedOn: false}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
   // let msg = logged ? "logged":"not logged"
    this.setState(prevState=>{return {isLoggedOn: !prevState.isLoggedOn }})
   // console.log(msg)
  }
  render () {
    return (
      <div>
      {this.state.isLoggedOn ? <h1> logged on.</h1>: <h1>logged out.</h1>}
      <button onClick={this.handleClick}></button>
      </div>
    )

  }
} */
/*
class App extends React.Component{
  constructor(){
    super()
    this.state={todosData: todosData}
    this.handleChange = this.handleChange.bind(this)

  }
  handleChange(todo){
   // console.log(c)
    
      this.setState(prevState=>{ 
        let newList = prevState.todosData.map(item=> {  if (item.id == todo.id  )
                                                item.completed = !item.completed
                                            return item
                                          }
                                  )
//console.log(newList)
        return {todosData:newList}
      }
    )
  }
  render(){
    const newToDoList = this.state.todosData.map(item=>{ return(<ToDoItem item={item} key={item.id} handleChange={this.handleChange}></ToDoItem>)})
    return(
      <div> {newToDoList}
      </div>
    )
  }

}*/
/*
class App extends React.Component {
  constructor(){
    super()
  }
  componentDidMount(){
    fetch("https://swapi.co/api/people/1").then(response=>response.json).then(data=>console.log(data))
  }
  render() {
    return (
      <div> 
      <h1>hello, world.</h1>
      </div>
    )
  }
}*/
/*
class App extends React.Component {
  constructor(){
    super()
    this.state={FirstName: '',
                LastName:'',
                IsFriendly: true,
                Checked:true,
                Gender: "male",
                FavColor:""
                }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(evt){
    //console.log(evt.target.name)
    const {type,name,value,checked } = evt.target
    console.log(type,name,value,checked)
    
    
    if (type==="text" || name ==="Gender" || name==="FavColor") 
      this.setState({[name]:value}) 
    // if (name==="Gender" ){
    //  this.setState(prevState=>{return prevState.value === "male" ?{[name]:"female"}:{[name]:"female"}})
    //  console.log(value)
    // }
    else
      this.setState( {[name]:checked})
    console.log(this.state.Gender)
  }
  render(){
    let friendly = this.state.IsFriendly ? "Yes": "No"
    return(
      <div>
      <form>
      <input name="LastName" type="text" value={this.state.LastName} onChange={this.handleChange}></input>
      <input name="FirstName" type="text" value={this.state.FirstName} onChange={this.handleChange}></input>
      <textarea></textarea>
      <input name="IsFriendly" type="checkbox" checked={this.state.IsFriendly} onChange={this.handleChange} ></input>
      <input name="Gender" type="radio" value = "male" checked={this.state.Gender === "male" } onChange={this.handleChange}></input>
      <input name="Gender" type="radio" value = "female" checked={this.state.Gender === "female" } onChange={this.handleChange}></input>
      <select name="FavColor" value={this.state.FavColor} onChange={this.handleChange}>
        <option value="red">Red</option>
        <option value="white">White</option>
      </select>
      <h1> You entered: {this.state.FirstName}
      {this.state.LastName} Friendly?: 
      {friendly} 
      Gender: {this.state.Gender}
      FavColor:{this.state.FavColor}
      </h1>
      </form>
      </div>
    )
  }
}*/
/*
class App extends React.Component {
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
//console.log(this.state.DietaryRestrictions)
  }
  render(){
    return (
      <main>
        <form>
          <input type="text" name="FirstName" value={this.state.FirstName}  onChange={this.handleChange} placeholder="First Name"></input>
          <br></br>
          <input type="text" name="LastName" value={this.state.LastName} onChange={this.handleChange} placeholder="Last Name"></input>
          <br></br>
          <input type="text" name="Age" value={this.state.Age} onChange={this.handleChange} placeholder="Age"></input>
          <br></br>
          <input type="radio" name = "Gender" value="male" checked={this.state.Gender === "male"} onChange={this.handleChange}></input>
          <br></br>
          <input type="radio" name = "Gender" value="female" checked={this.state.Gender === "female"} onChange={this.handleChange}></input>
          <br></br>
          <select name="Location" value={this.state.Location} onChange={this.handleChange}>
          <option value=""> ----</option>
            <option value="Toronto"> Toronto</option>
            <option value="Yuncheng"> Yun Cheng </option>
          </select>
          <br></br>
          <label>
            <input 
                type="checkbox" 
                name="IsVeg" 
                checked={this.state.IsVeg} 
                onChange={this.handleChange}> 
            </input> IsVeg?
            <br></br>
            <input 
              type="checkbox" 
              name="IsKosher" 
              checked={this.state.IsKosher} 
              onChange={this.handleChange}> 
            </input> IsKosher?
          </label>
          <br></br>
          <br></br>
          <br></br>
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
        
        <label>Your input:</label>
        <br></br>
        <label>Name: {this.state.FirstName}, {this.state.LastName}</label>
        <br></br>
        <label>Age: {this.state.Age}</label>
        <br></br>
        <label>Gender: {this.state.Gender}</label>
        <br></br>
        <label>Location: {this.state.Location}</label>
        <br></br>
        <label>
        Veg: {this.state.IsVeg ? "Yes":"No" }
        </label>
        <br></br>
        <label>
        Kosher: {this.state.IsKosher ? "Yes":"No" }
        </label>
      </main>
    )
  }
}*/
/*
class App extends React.Component{
  render(){
    return (
    <Form>
    </Form>
    )
  }
}*/
class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div>
      <Header></Header>
      <Meme></Meme>
      </div>
    )
    
  }
}
export default App
