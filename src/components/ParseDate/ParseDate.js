// @flow
import React from 'react';

const ParseDate = ({timestamp}: {timestamp: number}) => {
  const date: Date = new Date(timestamp);
  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  return <span>
            {`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`+
            ` ${hours}:${minutes}`}
          </span>;
};

export { ParseDate };
