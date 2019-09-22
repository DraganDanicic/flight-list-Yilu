import React from 'react';

export function ParseDate (props: {date: number}) {
  const date = new Date(props.date);
  return <span>{`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`}</span>;
};
