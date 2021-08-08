// import useFetch from "../hooks/useFetch";
// // import Loading from "../components/Loading"
// import {URL_API, API_KEY} from '../utils/constants';
// import SliderMovies from '../components/SliderMovies';
// import { Row, Col } from "antd";
// import MovieList from "../components/MovieList";



// const Home = () =>{
//     // const url = `${URL_API}/movie/now-playing?api_key=${API_KEY}&language=en-ES&page=1`;
//     const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
//     const urlPopular = `${URL_API}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
//     const urlRanked = `${URL_API}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;


//     const newMovies = useFetch(url);
    
//     const popularMovies = useFetch(urlPopular);

//     const topRankedMovies = useFetch(urlRanked);


//     return (
//         <div>
//             <SliderMovies newMovies={newMovies} />
//             <Row>
//                 <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} className= "height" style= {{marginBottom: 10}}>
//                     <MovieList title= "Peliculas Populares" popularMovies= {popularMovies} />
//                 </Col>
//                 <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} className= "height" style= {{marginBottom: 10}}>
//                     <MovieList title= "Top 20" popularMovies= {topRankedMovies} />
//                 </Col>
//             </Row>
//         </div>
//     )
// }

// export default Home;

// Inside app imports
import useFetch from "../hooks/useFetch";
import SliderMovies from "../components/SliderMovies";
import MovieList from "../components/MovieList";
import { URL_API, API_KEY } from "../utils/constants";
// Style imports
import { Row, Col } from "antd";

const Home = () => {
  const urlNewMovies = `${URL_API}/movie/now_playing${API_KEY}&language=es-ES&page=1`;
  const popularNewMovies = `${URL_API}/movie/popular${API_KEY}&language=es-ES&page=1`;
  const recommendedNewMovies = `${URL_API}/movie/top_rated${API_KEY}&language=es-ES&page=1`;
  const newMoviesData = useFetch(urlNewMovies);
  const popularMoviesData = useFetch(popularNewMovies);
  const recommendedMoviesData = useFetch(recommendedNewMovies);

  return (
    <div>
      <SliderMovies moviesData={newMoviesData} />
      <Row>
        <Col xs={24} sm={24} md={12}>
          <MovieList
            title="Peliculas Populares"
            moviesData={popularMoviesData}
          />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <MovieList
            title="Peliculas Mejor Puntadas"
            moviesData={recommendedMoviesData}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;