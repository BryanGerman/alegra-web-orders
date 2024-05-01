
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    alignContent: 'center',
  }));


export const ListOrders = () => {
    return (
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
            <StyledPaper variant="elevation">
                <h1>Orden: {1}</h1>
                <p><b>Plato: </b> {'Plato de comida'}</p>
            </StyledPaper>
            <StyledPaper variant="elevation">
                <h1>Orden: {2}</h1>
                <p><b>Plato: </b> {'Plato de comida 2'}</p>
            </StyledPaper>
            <StyledPaper variant="elevation">
                <h1>Orden: {1}</h1>
                <p><b>Plato: </b> {'Plato de comida'}</p>
            </StyledPaper>
            <StyledPaper variant="elevation">
                <h1>Orden: {2}</h1>
                <p><b>Plato: </b> {'Plato de comida 2'}</p>
            </StyledPaper>
        </Stack>    
        
    )
}