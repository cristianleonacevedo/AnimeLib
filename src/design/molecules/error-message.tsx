import "tailwindcss"
import Button from "../atoms/Button"

function Error_Message() {

    return(
        <div className="bg-gray-100 justify-center items-center text-center border-2 ">
            <h3 className="text-center text-red-300 m-4">Error masklefn si si aja no se</h3>
            <Button text="Reintentar"/>
        </div>
    )
}

export default Error_Message