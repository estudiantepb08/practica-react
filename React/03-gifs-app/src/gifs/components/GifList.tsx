import { mockGifs } from "../../mock-data/gifs.mock";

interface Prop {
    gifs: typeof mockGifs;
}

export const GifList = ({ gifs }: Prop) => {
    return (
        <div className="gifs-container">
            {
                gifs.map((gif) => (
                    <div className="gif-card" key={gif.id}>
                        <img src={gif.url} alt={gif.title} />
                        <p>
                            {gif.width} x {gif.height} (1.5MB)
                        </p>
                    </div>
                ))
            }
        </div>
    )
}