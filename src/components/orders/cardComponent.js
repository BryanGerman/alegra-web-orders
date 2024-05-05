import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import PropTypes from 'prop-types'

export default function CardComponent({ id, name, details }) {

    const ingredients = details.split(",")
    
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={"static/images/" + id + ".png"}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                {ingredients.map( ingredient => (
                    <Chip label={ingredient + ": 1"} />
                ))}
                <Typography variant="body2" color="text.secondary">

                </Typography>
            </CardContent>
        </Card>
    );
}

CardComponent.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
