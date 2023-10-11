/* eslint-disable @nx/enforce-module-boundaries */
import { Button, ComponentState, Header } from 'shared';

export interface TrainStaion {
   header: Header;
   /* Rail Arrivals */
   railArrivals: RailArrival[];
   /* Button Content and Data */
   button: Button;
   /* Component State */
   state?: ComponentState;
}

export interface RailArrival {
   /* Direction of Rail Cart */
   direction: string;
   /* Very Final Station of Rail Line */
   destination: string;
   /* text of rail line  (e.g: Northbound, Southbound, etc)  */
   description: string;
   /* text of rail color line (e.g: Red, Gold, etc)  */
   color: string;
   /* time of arrival to current station */
   arrivalTime: string;
   /* current station */
   station: string;
}
