import "tailwindcss"

type size = {
    className: string;
}

function Skeleton({className}: size) {

    return(
        <div className={`"bg-gray-200 rounded-md border-2 animate-pulse animate-bounce " ${className}`}/>
    )
}

export default Skeleton;