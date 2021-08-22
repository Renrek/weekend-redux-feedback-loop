// Core operation imports
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Styling and Structure
import { 
    Button, 
    Box,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Paper 
} from '@material-ui/core';

const Review = () => {

    // Hooks
    let history = useHistory();

    // Local state for form processing. Default of 3 (average)
    const survey = useSelector(store => store.surveyReducer);

    const submitSurvey = () => {
        axios.post( '/api/survey', survey )
        .then( response => {
            history.push('/success');
        })
        .catch(error => {
            alert(error);
        });
    } // End submitServey()

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableBody>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>{survey.feeling}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Comprehension</TableCell>
                            <TableCell>{survey.understanding}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Support</TableCell>
                            <TableCell>{survey.support}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Comments</TableCell>
                            <TableCell>{survey.comments}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box mt={2}>
                <Button 
                    onClick={() => submitSurvey()}
                    variant={'contained'}
                    color={'primary'}
                >
                    Submit Survey
                </Button>
            </Box>
        </Box>
    ) // End component return
} // End Review()

export default Review;
