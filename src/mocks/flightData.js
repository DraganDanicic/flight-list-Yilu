// @flow
import {type Flight} from '../models/Flight';

const hour = 1000 * 60 * 60;
const genTimes = (): {departure: number, arrival: number} => { 
  let departure = Math.floor(
    (new Date()).getTime() +
    Math.random() * 12 * hour *
    Math.sign(.5 - Math.random())
  );
  let arrival = Math.floor(departure + Math.random() * 12 * hour);
  return {departure, arrival};
}

const cities = [
  'AMSTERDAM', 'ATHENS', 'BARCELONA', 'BELGRADE', 'BERLIN', 'BERN', 'LIMASSOL',
  'MOSCOW', 'NIS', 'PARIS', 'RIJEKA', 'ZAGREB', 'ZURICH',
]
const genCity = (cities): string => cities[Math.floor(Math.random() * cities.length)];
const genCityPair = (): {city1: string, city2: string} => {
  const city1 = genCity(cities);
  const index = cities.findIndex(c => c === city1);
  const city2 = genCity(cities.slice(0, index).concat(cities.slice(index + 1)));
  return {city1, city2}
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const genChar = (): string => chars[Math.floor(Math.random() * chars.length)];
const genFlightNo = (): string => `${genChar()}${genChar()} ${Math.floor(Math.random()* 9999)}`


const genFlight = () => {
  const cities = genCityPair();
  const times = genTimes()
  return {
    arrival: times.arrival,
    departure: times.departure,
    destination: {
      type: "AIRPORT",
      value: cities.city1,
    },
    origin: {
      type: "AIRPORT",
      value: cities.city2,
    },
    flightNo: genFlightNo(),
  }
}
const genFlightList = (size) => ((new Array(size)).fill(1)).map(e => genFlight());

export let flightData: Flight[] = genFlightList(2000);