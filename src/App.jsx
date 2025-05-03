import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    const baseURL = import.meta.env.VITE_API_URL;
    axios.get(`${baseURL}/usuarios`)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, []);

  return <h1>Hola</h1>;
}

export default App;
