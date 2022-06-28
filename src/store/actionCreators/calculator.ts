import { CalcActionsEnum, CalcTypeEnum, PaymentTypeEnum } from '../reducers/calculator/types/enums';
import { CalcAction } from '../reducers/calculator/types';

export const setPaymentType = (type: PaymentTypeEnum): CalcAction => ({
  type: CalcActionsEnum.SET_PAYMENT_TYPE,
  payload: type,
});

export const setPrice = (price: number): CalcAction => ({
  type: CalcActionsEnum.SET_PRICE,
  payload: price,
});

export const setType = (type: CalcTypeEnum): CalcAction => ({
  type: CalcActionsEnum.SET_TYPE,
  payload: type,
});
