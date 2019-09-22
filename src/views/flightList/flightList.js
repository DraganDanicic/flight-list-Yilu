// @flow
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { type Flight } from '../../models/Flight';
import { ParseDate } from '../../components/ParseDate/ParseDate';
import { FlightTime } from '../../components/FligthTime/FligthTime';

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
    arrival: 1569155200729,
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
          <TableCell>Flight time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {flightData.map(flight => (
          <TableRow key={flight.flightNo}>
            <TableCell>{flight.origin.value}</TableCell>
            <TableCell>
              <ParseDate date={flight.departure}></ParseDate>
            </TableCell>
            <TableCell>{flight.destination.value}</TableCell>
            <TableCell>
              <ParseDate date={flight.arrival}></ParseDate>
            </TableCell>
            <TableCell>{flight.flightNo}</TableCell>
            <TableCell>
              <FlightTime departure={flight.departure} arrival={flight.arrival}></FlightTime>
            </TableCell>  
          </TableRow>        
        ))}
      </TableBody>
     </Table>
   </Paper> 
  );
}