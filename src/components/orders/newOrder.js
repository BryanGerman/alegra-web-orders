import { useState, useCallback } from "react"
import axios from 'axios';

export const NewOrder = () => {

    const [isSending, setIsSending] = useState(false);
    const [order, setOrder] = useState({});

    const handleClick = useCallback(async () => {
        if (isSending) return

        setIsSending(true)
        const order_received = await axios.get('https://liberal-kora-bryancompany.koyeb.app/api/v1/orders/new')
        setOrder(order_received)
        setIsSending(false)

    }, [isSending]);
    return (
        <>
            <button className="button1" onClick={handleClick}> <b>Generar Orden</b> </button>
        </>
    )
}

