import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { TrainStation } from '@atl-transit/features/stations';
import { UserActionTypes } from '../../types';
import { Coordinates } from '../../models';

export const userLocationAction = createActionGroup({
   source: UserActionTypes.LocateType,
   events: {
      [UserActionTypes.LocateType]: emptyProps(),
      [UserActionTypes.LocateUserSuccess]: props<{ request: Coordinates }>(),
      [UserActionTypes.LocateUserFailure]: props<{ message: string }>()
   }
});

export const userTrainStations = createActionGroup({
   source: UserActionTypes.LocateType,
   events: {
      [UserActionTypes.StationType]: emptyProps(),
      [UserActionTypes.StationUserSuccess]: props<{ stations: TrainStation[] }>(),
      [UserActionTypes.StationUserFailure]: props<{ message: string }>()
   }
});
