import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import ProtectedRoute from '../widgets/ProtectedRoute';
import Login from '../Authentication/Login';
import SignUpWrapper from '../Authentication/SignUp';
// import HomeContainer from '../HomePage/HomeContainer';
import Layout from '../Layout/Layout';
import UserProfile from '../../components/UserProfile/UserProfile';
import Home from '../../components/HomePage/Home';

function Router(props) {
  const history = useHistory();

  useEffect(() => {
    // if (localStorage.getItem('auth_key')) history.push('/home');
    // else history.push('/home');
  }, [history]);
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={() => <SignUpWrapper />} />
      </Switch>

      <Container style={{ height: '100%' }}>
        <Switch>
          <ProtectedRoute
            path="/user-profile"
            component={() => (
              <Layout>
                <UserProfile />
              </Layout>
            )}
          />
          <ProtectedRoute
            path="/home"
            component={() => <Layout>{<Home />}</Layout>}
          />
        </Switch>
      </Container>
    </React.Fragment>
  );
}

export default Router;
