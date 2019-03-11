import React,{Component} from 'react';
class EmailBody extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="EmailBody">
            <div className="EmailBodyTo">To:{this.props.email.to}</div>
            <div className="EmailBodySubject">Subject:{this.props.email.subject}</div>
            <div className="EmailBodyText">Text:{this.props.email.text}</div>
            <div className="Buttons">
                <button className="EmailBodyButtons" onClick={()=>this.props.back()}>Prev</button>
                <button className="EmailBodyButtons" onClick={()=>this.props.back()}>Next</button>
            </div>
            </div>
        )
    }
}
export default EmailBody;