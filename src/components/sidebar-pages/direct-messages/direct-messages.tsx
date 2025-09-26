import Sidebar from '../../sidebar'
import { useState } from 'react';
import '/Users/myazo/Collabify/Collabify/src/styles/sidebar-pages/direct-message.css';
import Popup from './pop-up-for-button';

function DirectMessages() {
    const [message, setMessage] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }
    return (
        <>
        <div className="dashboard-layout">
            <Sidebar />
            <div className="text-area-container">
                <Popup>
                    <h1> My popup</h1>
                </Popup>
                <textarea 
                placeholder="      Write your message to..." 
                value={message} 
                onChange={handleChange} 
                className="text-area"
                />
            </div>
        </div>
        <h1> DM HERE </h1>
        </>
    )
}

export default DirectMessages;