import { CalcActionsEnum, CalcTypeEnum, PaymentTypeEnum } from './enums';

export interface CalcState {
  creditAmount: number;
  creditTerm: number | null;
  initialFee: number;
  paymentType: PaymentTypeEnum;
  price: number;
  rate: number | null;
  type: CalcTypeEnum;
}

export interface SetCreditAmountAction {
  type: CalcActionsEnum.SET_CREDIT_AMOUNT;
  payload: number;
}

export interface SetCreditTermAction {
  type: CalcActionsEnum.SET_CREDIT_TERM;
  payload: number | null;
}

export interface SetInitialFeeAction {
  type: CalcActionsEnum.SET_INITIAL_FEE;
  payload: number;
}

export interface SetPaymentType {
  type: CalcActionsEnum.SET_PAYMENT_TYPE;
  payload: PaymentTypeEnum;
}

export interface SetPriceAction {
  type: CalcActionsEnum.SET_PRICE;
  payload: number;
}

export interface SetRateAction {
  type: CalcActionsEnum.SET_RATE;
  payload: number | null;
}

export interface SetTypeAction {
  type: CalcActionsEnum.SET_TYPE;
  payload: CalcTypeEnum;
}
