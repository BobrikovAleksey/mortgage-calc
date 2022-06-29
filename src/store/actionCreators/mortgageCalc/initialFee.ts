import { ActionEnum } from '../../types/mortgageCalc/enums';
import { TAction } from '../../types/mortgageCalc/actions';

export const setInitialFee = (initialFee: number): TAction => ({
  type: ActionEnum.SET_INITIAL_FEE,
  payload: initialFee,
});
