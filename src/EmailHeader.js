import React,{Component} from 'react';
class EmailHeader extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {this.props.emails.map((email)=>{return <div className="EmailHeader" key={email.id}>
                                                        <input type="checkbox" onClick={()=>this.props.check(email)}></input>
                                                        <button style={{width: 70+'%'}} onClick={()=>this.props.open(email)} >
                                                            <p>{email.from}</p>
                                                            <p>{email.text}</p>
                                                        </button>
                                                        </div>
                                                        })
                }
            </div>
        )
    }
}
export default EmailHeader;