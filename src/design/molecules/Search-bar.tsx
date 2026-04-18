import "tailwindcss"
import Input from "../atoms/Input"
import { useState } from "react"


function SearchBar() {

    const [search, setSearch] = useState<string>("");
    return(
        <div className="rounded-full justify-center items-center">
            <Input
                type="text"
                placeholder="Que quieres ver?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchBar