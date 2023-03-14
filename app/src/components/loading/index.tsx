import { useSelector } from 'react-redux';
import { appSelector } from '../../redux';
import { styled } from '@mui/system';
import BaseBackdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Spinner from '../spinner';

const styles = {
  backdrop: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    zIndex: 1000000,
    color: '#fff',
    height: '100%',
  },
  spinner: {
    marginBottom: 10,
  },
  message: {

  }
};

const Backdrop = styled(BaseBackdrop)(styles.backdrop)
const Message = styled(Typography)(styles.message)

const LoadingBackdrop = () => {
  const app = useSelector(appSelector);

  return (
    <Backdrop open={app.loading.status}>
      <Spinner/>
      {/* <CircularProgress color="inherit" className={classes.spinner} /> */}
      {app.loading.message && (
        <Message>
          {app.loading.message}
        </Message>
      )}
    </Backdrop>
  );
};

export default LoadingBackdrop;
