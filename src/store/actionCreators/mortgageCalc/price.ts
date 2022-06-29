import { ActionEnum } from '../../types/mortgageCalc/enums';
import { TAction } from '../../types/mortgageCalc/actions';

export const setPrice = (price: number): TAction => ({
  type: ActionEnum.SET_PRICE,
  payload: price,
});
