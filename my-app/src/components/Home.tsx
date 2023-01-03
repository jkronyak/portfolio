import React from 'react';

import { 
    Card,
    Typography
} from '@mui/material';



import "../Home.css"

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Card sx={{ maxWidth: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'row', padding: '16px' }}>
                <Typography sx={{verticalAlign: 'center'}}>Jared Kronyak</Typography>
                <img id='headshot' src={"./img/square_color.jpg"} alt='Headshot'></img>
            </Card>
        </div>
    )
}

export default Home;