// @flow
import React from 'react';
import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { type Flight } from '../../models/Flight';
import { ParseDate } from '../../components/ParseDate/ParseDate';
import { FlightTime } from '../../components/FlightTime/FlightTime';
import { getFlights } from "../../actions/flightListActions";

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

export const FlightList = (
  {flightData, getFlights }: 
  {
    flightData: Flight[],
    getFlights: () => void
  }
) => {
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
          <TableRow key={flight.flightNo + flight.departure}>
            <TableCell>{flight.origin.value}</TableCell>
            <TableCell>
              <ParseDate timestamp={flight.departure}></ParseDate>
            </TableCell>
            <TableCell>{flight.destination.value}</TableCell>
            <TableCell>
              <ParseDate timestamp={flight.arrival}></ParseDate>
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

const mapStateToProps = state => ({
  flightData: state.flights.collection,
})

const mapDispatchToProps = dispatch => {
  dispatch(getFlights);
  return({
    getFlights: () => dispatch(getFlights),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightList);