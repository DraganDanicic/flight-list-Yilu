// @flow
import React from 'react';

const FlightTime = ({departure, arrival}: {departure: number, arrival: number}) => {
  const hrs = Math.floor((arrival - departure) / (1000 * 60 * 60));
  const mins = Math.floor((arrival - departure) % (1000 * 60 * 60) / (6000));

  return (<span>{`${hrs}h${mins > 0 ? ` ${mins}min` : ''}`}</span>);
}

export { FlightTime };