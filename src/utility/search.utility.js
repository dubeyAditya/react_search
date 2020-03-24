
export const searchFlightByDestination = function (flights,origin, destination) {

    return flights.filter((flight) => {
        if (destination) {
            return flight.origin === origin && destination === flight.dest;
        }
        else return flight.origin === origin;
    });
}
