import './App.css';
import LoginForm from './pages/LoginPage/LoginForm';
import Register from './pages/RegisterPage/Register';
import Login from './pages/LoginPage/Login';
import Sidebar from './components/ui/Sidebar/Sidebar';
import Accounts from './pages/Accounts/Accounts';
import Auth from './Authentication/Auth';

function App() {
  return (
    <main className="App">
      <Auth />
    </main>
  );
}

export default App;
