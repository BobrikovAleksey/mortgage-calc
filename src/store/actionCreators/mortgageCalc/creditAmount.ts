import { ActionEnum } from '../../types/mortgageCalc/enums';
import { TAction } from '../../types/mortgageCalc/actions';

export const setCreditAmount = (creditAmount: number): TAction => ({
  type: ActionEnum.SET_CREDIT_AMOUNT,
  payload: creditAmount,
});
