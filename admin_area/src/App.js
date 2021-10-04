import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Alert from './components/alerts/Alert';
import Header from './components/header/Header';
import Loading from './components/Loading';
import MenuBar from './components/MenuBar';
import AuthRouter from './customRouter/AuthRouter';
import PageRender from './customRouter/PageRender';
import PrivateRouter from './customRouter/PrivateRouter';
import Login from './pages/login';
import { me } from './redux/actions/authAction';


function App() {

  const { loading, auth, alert } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        { loading ? <Loading /> : null }
        { alert.message && <Alert /> }
        <div className="main">
          { auth.token && <MenuBar /> }
          <div className="content">
            <AuthRouter exact path='/admin/login' component={Login} />
            <PrivateRouter exact path='/admin/:page' component={PageRender} />
            <PrivateRouter exact path='/admin/:page/:id' component={PageRender} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
