import { PaymentTypeEnum } from '../../types/calc/enums';
import { ActionEnum } from '../../types/mortgageCalc/enums';
import { TAction } from '../../types/mortgageCalc/actions';

export const setPaymentType = (type: PaymentTypeEnum): TAction => ({
  type: ActionEnum.SET_PAYMENT_TYPE,
  payload: type,
});
