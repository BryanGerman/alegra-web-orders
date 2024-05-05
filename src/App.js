
import { NewOrder } from './components/orders/newOrder';
import { ListOrders } from './components/orders/listOrders';
import './App.css';
import axios from 'axios'

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


import { styled } from '@mui/material/styles';
import { Table } from './components/orders/table';
import { useEffect, useState } from 'react';
import CardComponent from './components/orders/cardComponent';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const columns_inventory = [
  { field: 'id', headerName: "ID", flex: 1  },
  { field: 'name', headerName: 'Ingrediente', flex: 1  },
  { field: 'quantity', headerName: 'Cantidad', flex: 1  },
];

const columns_shops = [
  { field: 'id', headerName: "ID", flex: 1  },
  { field: 'name', headerName: 'Ingrediente', flex: 1  },
  { field: 'quantity', headerName: 'Cantidad comprada', flex: 1  },
  { field: 'date', headerName: 'Fecha', flex: 1  },
];

const columns_historial = [
  { field: 'id', headerName: "ID", flex: 1  },
  { field: 'order_number', headerName: 'Número de orden', flex: 1  },
  { field: 'name', headerName: 'Nombre', flex: 1  },
  { field: 'status_order', headerName: 'Estado', flex: 1  }
];

function App() {

  const [orders, setOrder] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [shops, setShops] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [generatedOrder, setGeneratedOrder] = useState(false);
  

  useEffect(() => {
    const headers = {
      'Authorization': `Bearer ${process.env.REACT_APP_AUTHENTICATION_TOKEN}`
    };
    axios.get(`${process.env.REACT_APP_ORDERS}/api/v1/orders`, { headers }).then((orders) => {
      setOrder(orders.data)
    })

    axios.get(`${process.env.REACT_APP_ORDERS}/api/v1/orders/recipes`, { headers }).then((recipes) => {
      setRecipes(recipes.data)
    })

    axios.get(`${process.env.REACT_APP_OPERATIONS}/api/v1/operations/inventory`, { headers }).then((inventory) => {
      setInventory(inventory.data.data)
    })

    axios.get(`${process.env.REACT_APP_OPERATIONS}/api/v1/operations/shops`, { headers }).then((shops) => {
      setShops(shops.data.data)
    })
  }, [generatedOrder])

  const handleHistoricalOrders = () => {
    return orders.length === 0 ? [{
      id: 0,
      name: 'NA',
      order_number: 0,
      status_order: 'NA'
    }] : orders.filter((order) => order.status === "DELIVERED").map((order) => ({
      id: order.id,
      name: order.name,
      order_number: order.order_number,
      status_order: order.status
    }))
  }

  const handleInventory = () => {
    return inventory.map((ingredient) => ({
      id: ingredient.id,
      name: ingredient.name,
      quantity: ingredient.quantity
    }))
  }

  const handleShops = () => {
    return shops.map((shop) => ({
      id: shop.id,
      name: shop.name,
      quantity: shop.quantity,
      date: shop.createdAt
    }))
  }

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} padding={4}>
          <Grid item xs={12}>
            <Item>
              <NewOrder setGeneratedOrder={setGeneratedOrder} />
            </Item>
          </Grid>
          {
            recipes.map((recipe) => (
              <Grid item xs={2}>
                  <CardComponent id={recipe.id} name={recipe.name} details={recipe.details} />
              </Grid>
            )
            )
          }
          <Grid item xs={6}>
            <Grid item xs={12}>
              <h1>En preparación</h1>
              <Item>
                <ListOrders orders={orders} />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <h1>Historial de platos preparados</h1>
              <Item>
                <Table columns={columns_historial} rows={handleHistoricalOrders()} />
              </Item>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <h1>Inventario</h1>
              <Item>
                <Table columns={columns_inventory} rows={handleInventory()} />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <h1>Compras realizadas</h1>
              <Item>
                <Table columns={columns_shops} rows={handleShops()} />
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>


    </div>
  );
}

export default App;
