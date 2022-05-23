import React, {useState, useEffect} from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import './App.css';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

export default function App() {

	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('panda');
	const [favourites, setFavourites] = useState([]);

	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=66f23b7e`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
		console.log(movies);
	};

	const addFavouritesFunc = (movie) => {
		const newFavourites = [...favourites, movie];
		setFavourites(newFavourites)
		console.log(favourites);
	}

	const removeFavouritesFunc = (movie) => {
		const newFavourites = 
		favourites.filter((item) => (item.imdbID !== movie.imdbID))
		setFavourites(newFavourites)
	};

	useEffect(() => {
		getMovieRequest()
	}, [searchValue])


  return (
	<div className='app'>
		<div className='header'>
			<MovieListHeading heading = "Movies"/>
			<SearchBox searchValue = {searchValue} setSearchValue = {setSearchValue} />
		</div>
		<MovieList
			movies = {movies} 
			favouriteComponent = {AddFavourites} 
			addFavouriteMovie = {addFavouritesFunc}
		/>
		<div className='header'>
			<MovieListHeading heading = "Favourites"/>
		</div>
		<MovieList 
			movies = {favourites}
			favouriteComponent = {RemoveFavourites} 
			addFavouriteMovie = {removeFavouritesFunc}
		/>
	</div>
  )
}



