// @flow
import React from 'react';

export function FlightTime (props: {departure: number, arrival: number}) {
  const hrs = Math.floor((props.arrival - props.departure) / (1000 * 60 * 60));
  const mins = Math.floor((props.arrival - props.departure) % (1000 * 60 * 60) / (6000));

  return (<span>{`${hrs}h${mins > 0 ? ` ${mins}min` : ''}`}</span>);
}