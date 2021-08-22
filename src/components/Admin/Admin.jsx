// Core operation imports
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

// Styling and Structure imports
import DeleteIcon from '@material-ui/icons/Delete';
import { 
    Box,
    TableContainer, 
    Table, 
    TableHead, 
    TableBody, 
    TableRow, 
    TableCell, 
    Paper, 
    Button 
} from '@material-ui/core';



const Admin = () => {

    // Store all data retrieved from fetchSurveys()
    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
       fetchSurveys();
    }, [])

    const fetchSurveys = () => {
        axios.get('/api/survey')
            .then( response => {
                setSurveys(response.data);
                console.log(response.data);
            })
            .catch( error => {
                alert('There was an error fetching information from the server.')
                console.log('Error on GET', error);
            });
    }; // End fetchSurveys()

    const deleteSurvey = (id) => {
        axios.delete(`/api/survey/${id}`)
            .then( response => {
                fetchSurveys();
            })
            .catch( error => {
                alert('There was an error deleteing information from the server.')
                console.log('Error on Delete', error);
            });
    }; // End deleteSurvey()

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Feeling</TableCell>
                            <TableCell align="left">Comprehension</TableCell>
                            <TableCell align="left">Support</TableCell>
                            <TableCell align="left">Comments</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {surveys.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="left">{row.feeling}</TableCell>
                                <TableCell align="left">{row.understanding}</TableCell>
                                <TableCell align="left">{row.support}</TableCell>
                                <TableCell align="left">{row.comments}</TableCell>
                                <TableCell align="left">
                                    <Button
                                        onClick={() => deleteSurvey(row.id)}
                                        variant={'contained'}
                                        color={'secondary'}
                                        startIcon={<DeleteIcon />}
                                    >
                                        Remove
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    ) // End Componant Return
} // End Admin()

export default Admin;
