import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      submit : false,
      nilai1 : null,
      nilai2 : null,
      operator : null,
      hasil: 0
    }
  }
 
  

  handleSubmit(e){
    e.preventDefault();
    const nilai1 = parseInt(this.refs.nilai1.value);
    const nilai2 = parseInt(this.refs.nilai2.value);
    const operator = this.refs.operator.value;

    var hasil;
    switch (operator){
      case '+':
      hasil = nilai1 + nilai2;
      break;
      case '-':
      hasil = nilai1 - nilai2;
      break;
      case 'x':
      hasil = nilai1 * nilai2;
      break;
      case '/':
      hasil = nilai1 / nilai2;
      break;
    }
    this.setState({nilai1,nilai2,operator,hasil,submit:true});
    this.refs.nilai1.value =null;
    this.refs.nilai2.value =null;

    console.log(hasil);

    
  }

  handleSubmit2(e){
    e.preventDefault();
   

    var hasil;
    this.state={
      
      hasil: 0
    }
    this.setState({hasil, submit:false});
   
    
    
  
  }
 


  renderHasil(){
    
    const{nilai1,nilai2,operator,hasil} = this.state;

    if(this.state.hasil){
      return(
        <form onSubmit={this.handleSubmit2.bind(this)}>
          <div>
            <p>{'hasil '+nilai1+" "+operator+" "+nilai2+" "+'adalah'+" "+hasil}</p>
            <br/>
            <button>Back To Home</button>
          </div>
        </form>

      )
    } 
  }

  renderAwal(){
  
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="number" ref="nilai1" className="form-control"/> <br/>
          <label>Pilih Operator</label>
          <select ref="operator" className="form-control">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="x">X</option>
            <option value="/">/</option>
          </select><br/>
          <input type="number" ref="nilai2" className="form-control"/><br/>
          <button>hasil</button>
        </form>
    )
    
  }

  render() {
    const submit = this.state.submit;
    return (
      <div className="container">
        {!submit ? (
        <div className="left">
        {this.renderAwal()}
        </div>
         ) : ( 
        <div className="right">
          {this.renderHasil()}
        </div>
         )} 
      </div>
    );
  }
}

export default App;
