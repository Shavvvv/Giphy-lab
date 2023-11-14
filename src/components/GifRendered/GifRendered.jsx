export default function GifRendered({ gif }) {
    

   // console.log(`gif--------------${gif.images.original.url}`)


    return (
        <div>

            <h1>This will render gif</h1>
            <img src={gif.images.original.url} alt="" />
           
        </div>
    )
}