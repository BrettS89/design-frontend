import { feathers } from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

const app = feathers();
const restClient = rest(url);

app.configure(restClient.axios(axios));

const setAuthHeader = (context: any) => {
  context.params.headers = Object.assign({}, context.params.headers, {
    'authorization': localStorage.getItem('token'),
  });

  return context;
}

app.hooks({
  before: {
    all: [
      setAuthHeader,
    ]
  }
});

export default app;
export { app as api };
