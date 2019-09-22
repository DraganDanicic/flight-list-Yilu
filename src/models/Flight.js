// @flow
export type Flight = { 
    arrival: number,
    departure: number,
    destination: {
      type: string,
      value: string,
    },
    origin: {
      type: string,
      value: string,
    },
    flightNo: string,
  };