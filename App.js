import React, { Component } from 'react'
import "./App.css"
export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count:0
    }
  }
  calculate(){
      this.setState({
        count:this.state.count+1
      })
  }
  
  render() {
    return (
      <div className="container">
         
         <form>
          <input type="text" onClick={()=>{this.calculate()}}/>
         </form>
     <div className='keypad'>
      <button>C</button>
      <button>%</button>
      <button>+</button>
      <button>*</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>0</button>
      <button>.</button>
      <button>=</button>
      </div>    
    </div>
    )
  }
}

export default App
