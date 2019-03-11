import React,{Component} from 'react';
class CreateEmail extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="CreateEmail">
            <div style={{height:4+'rem','padding-top': 2+'%'}}>To:<input type="text" className="CreateEmailTo"/></div>
            <div style={{height:4+'rem','padding-top': 2+'%'}}>Subject:<input type="text" className="CreateEmailSubject"/></div>
            <div style={{height:4+'rem','padding-top': 2+'%'}}>Text:<input type="textarea" className="CreateEmailText" hint="Type your message here"/></div>
            <button style={{'margin-top': 2+'%','height': 3+'rem','width': 15+'rem'}} className="CreateEmailButtons">Send</button>
            </div>
        )
    }
}
export default CreateEmail;