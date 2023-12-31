import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
   AppFacadeService,
   AppStateInterface,
} from '@atl-transit/global-state';
import { ButtonInputType } from '@atl-transit/shared';
import { SearchResults } from '../shared';
import { JsonStationInterface } from '../../stations/shared';

interface Station {
   id?: number;
   name: string;
}

@Injectable({
   providedIn: 'root'
})
export class SearchService {
   constructor(private store: Store<AppStateInterface>, private facade: AppFacadeService) {}

   initializeData(): void {
      this.facade.dispatchSearchModal();
   }

   // * This method is used to search for stations on the modal
   processQuery(userQuery: string) {
      return this.facade.allGeneralStations$.pipe(
         switchMap((stations) => this.filterAndMapStations(stations, userQuery))
      );
   }

   private filterAndMapStations(stations: JsonStationInterface[], userQuery: string) {
      const results = stations
         .filter((station) => this.isStationMatch(station, userQuery))
         .map((station) => this.mapStationToSearchResult(station));
      return of(results);
   }

   private isStationMatch(station: Station, userQuery: string): boolean {
      const stationNameLowerCase = station.name.toLowerCase();
      return stationNameLowerCase.includes(userQuery);
   }

   private mapStationToSearchResult(station: JsonStationInterface): SearchResults {
      return {
         label: this.formatStationName(station.name.toLowerCase()),
         action: '/' + station._station_key
      } as SearchResults;
   }

   private formatStationName(name: string): string {
      return name
         .replace('STATION', '')
         .trim()
         .split(' ')
         .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
         .join(' ');
   }
}
