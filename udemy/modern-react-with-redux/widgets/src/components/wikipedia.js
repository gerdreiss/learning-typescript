import axios from 'axios';

export default axios.create({
  baseURL: 'https://en.wikipedia.org/w/api.php',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
