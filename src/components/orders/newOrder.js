const handleClick = () => {
    console.log(" click! ")
}

export const NewOrder = () => {
    return (
        <>
            <button className="button1" onClick={handleClick}> Generar Orden </button>
        </>
    )
}

