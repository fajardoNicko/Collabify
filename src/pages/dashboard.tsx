import Sidebar from "../components/sidebar";

function Dashboard() {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-content">
                <h1>This is your dashboard</h1>
            </div>
        </div>
    )
}

export default Dashboard