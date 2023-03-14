import './App.css';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { appSelector, appLoad } from './redux';
import Spinner from './components/spinner';
import colors from './shared/colors';

import Router from './routing';
import Header from './components/header';
import Loading from './components/loading';
import Message from './components/message';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const app = useSelector(appSelector);

  const renderLoading = () => {
    return (
      <div style={styles.initContainer}>
        <div style={styles.logoContainer}>
          <div style={{ fontSize: 62 }}>💬</div>
          <div style={styles.logo}>App</div>
        </div>
        {/* <Spinner/> */}
        {/* <CircularProgress color="secondary" className={classes.spinner} thickness={5.0}/> */}
      </div>
    );
  };

  const renderApp = () => {
    return (
      <div className="App">
        <Header/>
        <div className='App-main'>
          <Router />
        </div>
        <Loading />
        <Message />
      </div>
    )
  };

  useEffect(() => {
    dispatch(appLoad({
      navigate,
      path: location.pathname
    }))
  }, [])

  return app.initialized
    ? renderApp()
    : renderLoading();
}

export default App;

export const styles = {
  initContainer: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 0,
  },
  logo: {
    fontWeight: 900,
    fontSize: 60,
    marginBottom: 25,
    marginLeft: 12,
    letterSpacing: 1,
    color: '#fff',
  },
  spinner: {
    marginTop: 95,
  }
};
