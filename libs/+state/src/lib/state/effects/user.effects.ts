import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, concatMap, withLatestFrom } from 'rxjs/operators';
import { StationStateInterface, UserStateInterface } from '../../models';
import { UserService } from '../../services';
import { arrivalMappingActions, userLocationAction, userTrainStations } from '../actions';
import { stationRailArrivalSelector, userSelector } from '../selectors';
import { Store } from '@ngrx/store';
import { CombinedDataAdapter } from '../../services/adapters';

@Injectable({
   providedIn: 'root'
})
export class UserEffects {

   loadUser$ = createEffect(() =>
      this.actions$.pipe(
         ofType(userLocationAction.location),
         concatMap(() =>
            this.userService.getUserCoordinations().pipe(
               map((coordinates) =>
                  userLocationAction.locateUserSuccess({ request: coordinates })
               ),
               catchError((error) =>
                  of(userLocationAction.locateUserFailure({ message: error }))
               )
            )
         )
      )
   );

   loadMappedData$ = createEffect(() => 
   this.actions$.pipe(
       ofType(arrivalMappingActions.arrivalMappingSuccess),
       withLatestFrom(
           this.userStore.select(userSelector),
           this.stationStore.select(stationRailArrivalSelector)
         ),
       concatMap(([action, user, railArrivalData]) => CombinedDataAdapter.MapUserDataToFullUi(user, railArrivalData).pipe(
           map((mappedUserTrains) => userTrainStations.userStationMappingSuccess({ stations: mappedUserTrains})),
           catchError((error) => of(userTrainStations.userStationMappingFailure({ message : error })))
       ))
   )
   )

   constructor(private actions$: Actions, 
    private userService: UserService,
    private userStore : Store<UserStateInterface>,
    private stationStore : Store<StationStateInterface>) {}
}
