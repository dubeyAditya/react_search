import { parseDate } from './valiadtion.utilty';


export const searchFlightByDestination = function (flights,origin, destination, deptDate) {

    return flights.filter((flight) => {
        if (destination) {
            return (flight.origin === origin) && (destination === flight.dest) && (parseDate(flight.doj) === deptDate);
        }
        else return flight.origin === origin;
    });
}
