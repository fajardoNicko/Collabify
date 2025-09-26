import type { ReactNode } from 'react';
import '/Users/myazo/Collabify/Collabify/src/styles/sidebar-pages/direct-message.css'
interface Props {
    trigger?: boolean;
    children?: ReactNode;
}
function Popup({ trigger = false, children }: Props) {
    return (trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="insertButton"> + </button>
                { children }
            </div>
        </div>
    ) : "";
}

export default Popup