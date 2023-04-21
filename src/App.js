import {BrowserRouter as Router, Switch } from 'react-router-dom';
import CustomAuthRoute from './CustomAuthRoute';
import CustomAdminRoute from './CustomAdminRoute';
import { Login, ForgotPassword, Register, ResetPassword } from './components/auth';
import { Dashboard, UsersList, AddUser, ViewUser, EditUser} from './components/admin';
import { Routes } from './constants';
import './App.css';

function App() {
  return (
    <Router>
        <Switch> 
          <CustomAuthRoute exact  path={Routes.DEFAULT} component={Login} />
          <CustomAuthRoute exact  path={Routes.LOGIN} component={Login} />
          <CustomAuthRoute exact  path={Routes.FORGOT_PASSWORD} component={ForgotPassword} />
          <CustomAuthRoute exact  path={Routes.RESET_PASSWORD+"/:token"} component={ResetPassword} />
          <CustomAuthRoute exact  path={Routes.REGISTER} component={Register} />
          <CustomAdminRoute exact path={Routes.DASHBOARD} component={Dashboard} />
          <CustomAdminRoute exact path={Routes.ADMIN_USERS} component={UsersList} />
          <CustomAdminRoute exact path={Routes.ADMIN_USERS_ADD} component={AddUser} />
          <CustomAdminRoute exact path={Routes.ADMIN_USERS_VIEW+"/:user_id"} component={ViewUser} />
          <CustomAdminRoute exact path={Routes.ADMIN_USERS_EDIT+"/:user_id"} component={EditUser} />
        </Switch>  
    </Router>
  );
}

export default App;
