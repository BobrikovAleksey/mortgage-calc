import {
  ISetCreditAmountAction,
  ISetCreditTermAction,
  ISetInitialFeeAction,
  ISetPaymentType,
  ISetPriceAction,
  ISetRateAction,
  ISetTypeAction,
} from './inputForm';

export type TAction =
  ISetCreditAmountAction |
  ISetCreditTermAction |
  ISetInitialFeeAction |
  ISetPaymentType |
  ISetPriceAction |
  ISetRateAction |
  ISetTypeAction;
