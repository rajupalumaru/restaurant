import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import DashboardProfile from './components/DashboardProfile/DashboardProfile';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Login from './components/Login/Login';
import ResetPassword from './components/ResetPassword/ResetPassword';
import SignUp from './components/Signup/SignUp';

function App() {
  return (
    <div>
      {/* <Login/> */}
      {/* <SignUp /> */}
      {/* <ForgotPassword /> */}
      {/* <ResetPassword /> */}
      <DashboardProfile/>
    </div>
  );
}

export default App;
