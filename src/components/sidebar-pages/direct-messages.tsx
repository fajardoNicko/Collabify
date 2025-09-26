import Sidebar from '../sidebar'
import { useState } from 'react';
import '/Users/myazo/Collabify/Collabify/src/styles/sidebar-pages/direct-message.css'


function directMessages() {
    const [message, setMessage] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }
    return (
        <>
        <div className="dashboard-layout">
            <Sidebar />
            <div className="text-area-container">
                <textarea placeholder="Write your message to..." value = {message} onChange = {handleChange} > </textarea>
            </div>
        </div>
        <h1> DM HERE </h1>
        </>
    )
}

export default directMessages;