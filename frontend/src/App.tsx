import { useState, useEffect } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { authService } from './services/authService';

type View = 'login' | 'signup' | 'dashboard';

function App() {
  const [currentView, setCurrentView] = useState<View>('login');

  useEffect(() => {
    if (authService.isAuthenticated()) {
      setCurrentView('dashboard');
    }
  }, []);

  const handleLoginSuccess = () => {
    setCurrentView('dashboard');
  };

  const handleSignupSuccess = () => {
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentView('login');
  };

  const switchToSignup = () => {
    setCurrentView('signup');
  };

  const switchToLogin = () => {
    setCurrentView('login');
  };

  return (
    <>
      {currentView === 'login' && (
        <Login onSuccess={handleLoginSuccess} onSwitchToSignup={switchToSignup} />
      )}
      {currentView === 'signup' && (
        <Signup onSuccess={handleSignupSuccess} onSwitchToLogin={switchToLogin} />
      )}
      {currentView === 'dashboard' && <Dashboard onLogout={handleLogout} />}
    </>
  );
}

export default App;

