import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
      api_key: '936ac242f15cf3fca6a161a87358deb2',
      language: 'pt-BR'
  }
});

export default api;