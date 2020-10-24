import React from "react"
import Header from "./Header"
class Meme extends React.Component{
    constructor(){
        super()
        this.state={TopText:"",
                    BottomText:'',
                    RandomImg:'/2.jpg',
                    AllImg:[]       
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(){
     fetch("https://api.imgflip.com/get_memes").then(Response=> Response.json()).then(Response=>{
         
        const {memes}=Response.data
       this.setState({AllImg: memes})
        console.log(memes[1])
        })
      //  fetch("https://swapi.co/api/people/1").then(response=>response.json).then(data=>console.log(data))
      console.log(this.state.RandomImg)

    }
    handleClick(){
        //let data;
        // fetch("http://api.imgflig.com").then(Response=>{Response.json}).then(data=>{console.log(data)})
        //console.log(data)
    //     let ind = Math.floor(Math.random() * 10)
    //     const url = this.state.AllImg[ind].url;
    //    // let text = this.state.AllImg[ind].name;
    //     this.setState({RandomImg: url})
    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({[name]:value})
    }
    handleSubmit(event){
        event.preventDefault()
        let ind = Math.floor(Math.random() * 10)
        const url = this.state.AllImg[ind].url;
       // let text = this.state.AllImg[ind].name;
        this.setState({RandomImg: url})
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                
                    <input type="text" name="TopText" value = {this.state.TopText} onChange={this.handleChange}></input>
                    <button >Next Picture</button>
                    <br></br>
                    <div>
                        <img src={this.state.RandomImg} alt="abc"/>
                        <h1> {this.state.TopText}</h1>
                    </div>
                </form>
            </div>
        )
    }
}
export default Meme