
import { NewOrder } from './components/orders/newOrder';
import './App.css';
import { ListOrders } from './components/orders/listOrders';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


import { styled } from '@mui/material/styles';
import { Table } from './components/orders/table';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} padding={5}>
        <Grid item xs={12}>
          <Item>
            <NewOrder/>
          </Item>
        </Grid>
        <Grid item xs={6} spacing={2}>
          <Grid item xs={12}>
            <h1>En preparación</h1>
            <Item>
              <ListOrders/>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <h1>Historial de platos preparados</h1>
            <Item>
              <Table/>
            </Item>
          </Grid>
        </Grid>
        <Grid item xs={6} spacing={0}>
        <Grid item xs={12}>
            <h1>Inventario</h1>
            <Item>
              <Table/>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <h1>Compras realizadas</h1>
            <Item>
              <Table/>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
      
      
    </div>
  );
}

export default App;
