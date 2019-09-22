// @flow
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { type Flight } from '../../models/Flight';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const flightData: Flight[] = [
  {
    arrival: 1569155188729,
    departure: 1569140788729,
    destination: {
      type: "AIRPORT",
      value: "BELGRADE",
    },
    origin: {
      type: "AIRPORT",
      value: "MUNICH",
    },
    flightNo: 'JU 389',
  }
];

export default function FlightList() {
  const classes = makeStyles(useStyles);
  
  return (
   <Paper className={classes.table}>
     <Table className={classes.root}>
      <TableHead>
        <TableRow>
          <TableCell>Origin</TableCell>
          <TableCell>Departure</TableCell>
          <TableCell>Destination</TableCell>
          <TableCell>Arrival</TableCell>
          <TableCell>Flight no.</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {flightData.map(flight => (
          <TableRow key={flight.flightNo}>
            <TableCell>{flight.origin.value}</TableCell>
            <TableCell>{flight.departure}</TableCell>
            <TableCell>{flight.destination.value}</TableCell>
            <TableCell>{flight.arrival}</TableCell>
            <TableCell>{flight.flightNo}</TableCell>
          </TableRow>          
        ))}
      </TableBody>
     </Table>
   </Paper> 
  );
}