import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 6WBEXy0U42ue880f_30tsYADSvSI0y5hQlxqPQr-LIc',
  },
});
