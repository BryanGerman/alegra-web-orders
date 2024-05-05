
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'

const StyledPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    alignContent: 'center',
}));

export const ListOrders = ({orders}) => {
    return (
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
            {orders.filter((order) => order.status === "RECEIVED").map((order) => {
                return (<StyledPaper variant="elevation">
                    <h1>Orden: {order.order_number}</h1>
                    <p><b>Plato: </b> {order.name}</p>
                </StyledPaper>)
            })}
        </Stack>
    )
}

ListOrders.propTypes = {
    orders: PropTypes.array.isRequired
}