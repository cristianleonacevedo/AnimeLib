import "tailwindcss"
import Anime_Card from "../../../design/organism/anime-card"
import Navbar from "../../../design/molecules/Navbar"

const animes = [

    {   id: 1, 
        title: "kono suba", 
        episodes: 10,
        status: "no se",
        score: 8.7,
        geners: ["comedia", "isekai"],
        synopsis: "el tipico isekai pedorro en donde el protagoniista muere y revive en otro mundo o lo manda una diosa con atributos cuestionables", 
        image: "https://www.desconsolados.com/wp-content/uploads/2023/06/KONOSUBA-Gods-Blessing-On-This-Wonderful-World-Love-For-These-Clothes-of-Desire-KeyArt-High-Res.jpg"
    },

    {   id: 1, 
        title: "kono suba", 
        episodes: 10,
        status: "no se",
        score: 8.7,
        geners: ["comedia", "isekai"],
        synopsis: "el tipico isekai pedorro en donde el protagoniista muere y revive en otro mundo o lo manda una diosa con atributos cuestionables", 
        image: "https://www.desconsolados.com/wp-content/uploads/2023/06/KONOSUBA-Gods-Blessing-On-This-Wonderful-World-Love-For-These-Clothes-of-Desire-KeyArt-High-Res.jpg"
    },

        {   id: 1, 
        title: "kono suba", 
        episodes: 10,
        status: "no se",
        score: 8.7,
        geners: ["comedia", "isekai"],
        synopsis: "el tipico isekai pedorro en donde el protagoniista muere y revive en otro mundo o lo manda una diosa con atributos cuestionables", 
        image: "https://www.desconsolados.com/wp-content/uploads/2023/06/KONOSUBA-Gods-Blessing-On-This-Wonderful-World-Love-For-These-Clothes-of-Desire-KeyArt-High-Res.jpg"
    },
]

function Anime_List() {

    return(
        <>
            <Navbar />
            <div className="bg-slate-950 h-full">
                <h1 className="text-5xl text-gray-300 pt-6 pl-6 pb-2 font-bold">Animes del día!!!</h1>
                <div>
                    {animes.map((a) =>(
                        <Anime_Card key={a.id} anime={a} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Anime_List