import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import GifRendered from "./components/GifRendered/GifRendered";

function App() {
  const [gif, setGif] = useState({});
  const [searchGifCategory, setSearchGifCategory] = useState("react.js");
  const [loading, setLoading] = useState(false);
  const result=Math.floor(Math.random() * 20)

  useEffect(() => {
    console.log("use effect is running");
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=S6IfkyITSFd8G6d4sWt0gfjHEFGk68w2&q=${searchGifCategory}`;
    console.log (endpoint)

    async function getGif() {
      try {
        console.log('try block in motion')
        setLoading(true);

        const response = await fetch(endpoint);
        const body = await response.json();

        console.log(body.data[0].images.downsized_medium.url);
        setGif(body.data[result].images.downsized_medium.url);


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
