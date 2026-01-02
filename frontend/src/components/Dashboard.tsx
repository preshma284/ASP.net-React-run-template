import { authService } from '../services/authService';
import './Dashboard.css';

interface DashboardProps {
  onLogout: () => void;
}

function Dashboard({ onLogout }: DashboardProps) {
  const email = authService.getEmail();

  const handleLogout = () => {
    authService.logout();
    onLogout();
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Welcome!</h1>
        <div className="user-info">
          <p className="greeting">You are successfully logged in</p>
          <p className="email">
            <strong>Email:</strong> {email}
          </p>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
