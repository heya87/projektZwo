import {Shift} from '../../models/shift';

export interface ShiftPage {

  loading: boolean;
  shifts: Shift[];
  formStatus: string;

}
