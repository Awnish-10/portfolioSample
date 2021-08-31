import'./contacts.scss'
import {useState} from "react";

export default function Contacts() {
    const [state, setstate] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setstate(true);

    }
    return (
        <div className ="contacts" id="contacts">
        <div className="container">
            <div className="left">
            <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""></img>

            </div>
            <div className="right">
            <h1>Contact.</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Email"></input>
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
                {state && <span>Thanks I will reply ASAP :)</span>}
            </form>

            </div>
        </div>
            
        </div>
    )
}
