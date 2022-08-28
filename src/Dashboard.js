import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Dashboard.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Dashboard = () => {
    let ages = 50;
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001').then(
            response => response.json()
        ).then(json => setData(json))
    }, [])
    return (
        <div>
            <center>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Item><h3>Name</h3></Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item><h3>Email</h3></Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item><h3>Age</h3></Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item><h3>Image</h3></Item>
                        </Grid>
                    </Grid>
                </Box>
                {data.map(item =>
                    <Box  sx={{ flexGrow: 1}}>
                        <Grid container spacing={2} >
                            <Grid item xs={3} >
                                <Item>{item.firstName}</Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>{item.email}</Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>
                                    {item.age < ages ? (
                                        <div className='bgcolour'>{item.age}</div>
                                    ) : (
                                        <div className='bgcolour1'> {item.age} </div>
                                    )}
                                </Item>
                            </Grid>
                            <Grid item xs={3} >
                                <Item>
                                    <img src={item.imageUrl} alt = 'Img'/>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                )}
            </center>
        </div>
    )
}
export default Dashboard