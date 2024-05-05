import { useCallback } from "react"
import axios from 'axios';
import PropTypes from 'prop-types'

const headers = {
    'Authorization': `Bearer ${process.env.REACT_APP_AUTHENTICATION_TOKEN}`
};

export const NewOrder = ({ setGeneratedOrder }) => {

    const handleClick = useCallback(async () => {
        setGeneratedOrder(true);
        try {
            const response = await axios.get(`${process.env.REACT_APP_ORDERS}/api/v1/orders/new`, {headers})
            let { status, data } = response;
            while (status !== 200) {
                setGeneratedOrder(true);
                await axios.put(`${process.env.REACT_APP_ORDERS}/api/v1/orders/status`,  { status: "PENDING", id: data.id }, {headers})
                const retry_response = await axios.get(`${process.env.REACT_APP_ORDERS}/api/v1/orders/new`, { headers })
                status = retry_response.status;
                data = retry_response.data;
                setGeneratedOrder(false);
            }
            setTimeout(async () => {
                setGeneratedOrder(true);
                await axios.put(`${process.env.REACT_APP_ORDERS}/api/v1/orders/status`, { status: "DELIVERED", id: data.id }, {headers})
                setGeneratedOrder(false);
            }, 5000)
            setGeneratedOrder(false);
        }
        catch (error) {
            const data = error;
            console.log(data)
            setGeneratedOrder(false);
        }
    }, [setGeneratedOrder]);
    return (
        <>
            <button className="button1" onClick={handleClick}> <b>Generar Orden</b> </button>
        </>
    )
}

NewOrder.propTypes = {
    setGeneratedOrder: PropTypes.func.isRequired
}



