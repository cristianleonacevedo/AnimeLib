import "tailwindcss"

type Anime = {
    id: number;
    title: string;
    image: string;
    status: string;
    score: number;
    episodes: number;
    synopsis: string;
    geners: string[];
}

type props = {
    anime: Anime;
}

function Anime_Card( { anime }: props)  {
    return(
        <div className="bg-slate-500/10 m-8 mb-0 rounded-4xl hover:">
            <div className="grid grid-cols-2 justify-center items-center">

                <img src={anime.image} alt={anime.title} className="w-auto h-auto p-6 pr-0"/>
                <div className="m-6 p-5 bg-slate-700/50 h-auto w-auto rounded-2xl">
                    <h4 className="text-6xl m-4 text-white font-bold">{anime.title}</h4>
                    <h4 className="text-white text-3xl m-4">{anime.episodes} episodes</h4>
                    <h4 className="text-white text-2xl m-4">{anime.status}</h4>
                    <h4 className="text-3xl text-yellow-600 font-bold m-4"> ⭐ {anime.score}</h4>
                    <h4 className="text-white text-3xl m-4">{anime.geners?.join(", ")}</h4>
                    <p className="text-white text-lg m-4"><b className="text-2xl">Sypnosis: </b>{anime.synopsis}</p>
                </div>
            </div>
        </div>
    )

}

export default Anime_Card;