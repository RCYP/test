import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmailHeader from'./EmailHeader.js';
import './EmailHeader.css';
import EmailBody from'./EmailBody.js';
import './EmailBody.css';
import CreateEmail from'./CreateEmail.js';
import './CreateEmail.css';

class App extends Component {
    constructor(props){
      super(props)
      this.state={body:[],checkedEmailIDs:[]}
      fetch("http://5c5a21f9af3ff700140de477.mockapi.io/api/email")
      .then(function(response){return response.json()})
      .then(data=> {
        let emails=[]
        data.forEach(element => {
        emails.push(
          {
            id: element.id,
            received: element.received,
            from: element.from,
            subject: element.subject,
            text: element.text,
            read: element.read,
            to: element.to
          }
        )})
        this.setState({emails:emails})
      });
    }
  
  componentDidMount(){

  }

  listClick(){
    this.setState({body:<EmailHeader emails={this.state.emails} open={this.open.bind(this)} check={this.check.bind(this)}/>})
  }
  
  createClick(){
    this.setState({body:<CreateEmail emails={this.state.emails}/>})
  }
  back(){
    this.setState({body:<EmailHeader emails={this.state.emails} open={this.open.bind(this)} check={this.check.bind(this)}/>})
  }
  delete(){
    let p=this.state.emails
    this.state.emails.forEach((email)=>{
      if(this.state.checkedEmailIDs.includes(email.id)) p.splice(p.indexOf(email),1)
    })
    this.setState({emails:p})
    this.setState({checkedEmailIDs:[]})
    this.setState({body:<EmailHeader emails={this.state.emails} open={this.open.bind(this)} check={this.check.bind(this)}/>})
  }

  open(email,event){
    this.setState({body:<EmailBody email={email} back={this.back.bind(this)}/>})
  }

  check(email,event){
    if(!this.state.checkedEmailIDs.includes(email.id)) {
        let p=this.state.checkedEmailIDs;
        p.push(email.id)
        this.setState({checkedEmailIDs:p});
    }
    else 
    {
      let p=this.state.checkedEmailIDs;
      this.setState({checkedEmailIDs:p.splice(p.indexOf(email.id),1)});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <button className="Button" onClick={()=>this.listClick()}>List</button>
        <button className="Button" onClick={()=>this.createClick()}>Create</button>
        </div>
        <div style={{align: 'center'}}>{this.state.body}</div>
        <div className="App-footer">
        <button className="Delete" onClick={()=>this.delete()}>Delete</button>
        </div>
      </div>
    );
  }
}

export default App;