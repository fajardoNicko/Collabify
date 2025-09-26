import Sidebar from '../sidebar'

function activity() {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-content">
                <h1>This is your dashboard</h1>
            </div>
        </div>
    )
}

export default activity;