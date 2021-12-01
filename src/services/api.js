import axios from 'axios';

const getCharacter = (page=1)=> axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);

const getLocation = (page=1)=> axios.get(`https://rickandmortyapi.com/api/location?page=${page}`);

const getEpisodes = (page=1)=> axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);

export {getCharacter,getLocation,getEpisodes};