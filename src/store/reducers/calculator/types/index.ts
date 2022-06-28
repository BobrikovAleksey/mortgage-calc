import {
  SetCreditAmountAction,
  SetCreditTermAction,
  SetInitialFeeAction,
  SetPaymentType,
  SetPriceAction,
  SetRateAction,
  SetTypeAction,
} from './interfaces';

export type CalcAction =
  SetCreditAmountAction |
  SetCreditTermAction |
  SetInitialFeeAction |
  SetPaymentType |
  SetPriceAction |
  SetRateAction |
  SetTypeAction;
