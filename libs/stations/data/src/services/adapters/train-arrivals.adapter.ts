/* eslint-disable @nx/enforce-module-boundaries */
import { RailArrival } from 'libs/stations/ui/src/lib/models';
import { JsonStationInterface, RailDirection } from 'libs/stations/ui/src/lib/types';
import { StationInterface } from 'libs/stations/ui/src/lib/types';
import { BusRoutes } from 'libs/stations/ui/src/lib/types';
import { MartaArrivalResponse } from '../../models';

export class AdapterService {
   static MapToRailArrival(item: MartaArrivalResponse): RailArrival {
      let direction: RailDirection = 'North';

      switch (item.DIRECTION) {
         case 'N':
            direction = 'North';
            break;
         case 'S':
            direction = 'South';
            break;
         case 'W':
            direction = 'West';
            break;
         case 'E':
            direction = 'East';
            break;
      }
      return {
         station: item.STATION,
         direction: direction,
         destination: item.DESTINATION,
         description: direction + 'bound',
         color: item.LINE.toLowerCase(),
         arrivalTime: item.WAITING_TIME
      };
   }

   static MapJsonToStationInterface(
      allStations: JsonStationInterface[]
   ): StationInterface[] {

    let stations: StationInterface[] = []
    allStations.forEach((station) => {
        let routes: BusRoutes[] = [];
        // station.connectingbusroutes.forEach((x) => {
        //    const busRoute: BusRoutes = {
        //       routeID: x[0],
        //       name: x[1]
        //    };

        //    routes.push(busRoute);
        //});

        // map the stationponse to the interface
        const mappedResponse: StationInterface = {
           name: station.name,
           description: 'fill here',
           latitude: parseFloat(station.latitude),
           longitude: parseFloat(station.longitude),
           contactnumber: station.contactnumber,
           connectingbusroutes: routes,
           ammenities1: station.amenities1,
           ammenities2: station.amenities2,
           ammenities3: station.amenities3,
           ammenities4: station.amenities4,
           arrivals: []
        };

        stations.push(mappedResponse);
    })
      return stations;
   }

   static MapRailArrivalGroups(
      arrival: RailArrival[],
      currentStations: StationInterface[]
   ): StationInterface[] {
      //
      arrival.forEach((trainArrival) => {
         // step one: define the looking we are looking for
         const locationToFind = trainArrival.station;
         console.log(locationToFind)
         //step two: loop through the stations and find the station we want
         currentStations.forEach((station, index) => {
            if (station.name.toUpperCase() === locationToFind.toUpperCase()) {
                console.log(station.name)
               //step three: set the arrivals to that station
               currentStations[index].arrivals.push(trainArrival);
            }
         });
      });

      return currentStations;
   }
}
