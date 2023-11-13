import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import GifRendered from "./components/GifRendered/GifRendered";

function App() {
  const [gif, setGif] = useState({});
  const [searchGifCategory, setSearchGifCategory] = useState("apple");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("use effect is running");
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=S6IfkyITSFd8G6d4sWt0gfjHEFGk68w2&q=${searchGifCategory}`;
   //const endpoint = `http://www.omdbapi.com/?apikey=8919e0eb&t=${searchGifCategory}`;

    // Make api call

    async function getGif() {
      try {
        setLoading(true);

        const response = await fetch(endpoint);
        const body = await response.json();

        console.log(`body ${body}`);
        setGif(body);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }

    getGif();
  }, [searchGifCategory]);

  return (
    <>
      <SearchBar setSearchGifCategory={setSearchGifCategory} />

      {loading ? <h1>Loading....</h1> : <GifRendered gif={gif} />}
    </>
  );
}

export default App;
