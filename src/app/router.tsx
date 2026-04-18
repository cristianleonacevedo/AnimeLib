import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anime_List from "../modules/anime/pages/anime-list"

function Router() {

    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Anime_List />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;