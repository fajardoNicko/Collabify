import { Link, useLocation } from 'react-router-dom';
import { 
    MdHome, 
    MdMessage, 
    MdTimeline
} from 'react-icons/md';
import '../styles/sidebar.css';

function Sidebar() {
    const location = useLocation();

    const menuItems = [
        { path: '/', icon: MdHome, label: 'Home' },
        { path: './sidebar-pages/direct-messages', icon: MdMessage, label: 'DMs' },
        { path: './sidebar-pages/activity', icon: MdTimeline, label: 'Activity' }
    ];

    return (
        <div className="sidebar">
            <nav className="sidebar-nav">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`nav-item ${isActive ? 'active' : ''}`}
                        >
                            <Icon className="nav-icon" />
                            <span className="nav-label">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
            
        </div>
    );
}

export default Sidebar;