import { useCallback, useEffect, useState } from 'react';
import './App.css';
import MoovieCard from './components/MoovieCard';
import api from './services/api';
import Icon from 'feather-icons-react';


function App() {
  const [moovieData, setMoovieData] = useState([])
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    api.get('/movie/top_rated', { 
      params: { 
        page
      },
    }).then(res => { 
      const { results, total_results, total_pages } = res.data;

      setMoovieData(results);
      setTotalItems(total_results);
      setTotalPages(total_pages)
    });
  }, [page]);

  const goBack = useCallback(async () => { 
    const currentPage = page;

    setPage(currentPage - 1);
  }, [page]);

  const goNext = useCallback(async () => { 
    const currentPage = page;

    setPage(currentPage + 1);
  }, [page]);

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <div className='main-content'>
        <div className='cards-content'>
          {moovieData.map((item) => (
            <MoovieCard
              title={item.title}
              rating={item.vote_average}
              overview={item.overview}
              image={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`} 
              key={item.id}/>
          ))}
        </div>


        <div className='bottom-content'>
          <div className='show-items'>
            <span>Mostrando <strong>{ moovieData.length * page }</strong> de <strong>{totalItems}</strong> filmes</span>
          </div>
          <div className='pages'>
            <button 
              disabled={page === 1}
               onClick={goBack}
                className='icon-content'>
                  <Icon size={32} icon="chevron-left"/>
            </button>
            <button
               disable={page === totalPages}
                onClick={goNext}
                 className='icon-content'>
                  <Icon size={32} icon="chevron-right"/>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
