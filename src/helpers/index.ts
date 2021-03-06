import { SensorValue } from "../types";

export const mostRecentRead = (readings: Array<SensorValue>) =>
  readings.reduce((mostRecent, read) => {
    if (new Date(read.created_at) > new Date(mostRecent.created_at)) {
      return read;
    }
    return mostRecent;
  });

export const randomNumber = (max= 100) => {
  return Math.floor(Math.random() * max);
};
