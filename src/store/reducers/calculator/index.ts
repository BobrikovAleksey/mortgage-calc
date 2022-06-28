import { CalcAction } from './types';
import { CalcActionsEnum, CalcTypeEnum, PaymentTypeEnum } from './types/enums';
import { CalcState } from './types/interfaces';

const initialState: CalcState = {
  creditAmount: 0,
  creditTerm: null,
  initialFee: 0,
  paymentType: PaymentTypeEnum.DIFFERENTIATED,
  price: 0,
  rate: null,
  type: CalcTypeEnum.BY_PROPERTY_VALUE,
};

export const calcReducer = (state = initialState, action: CalcAction): CalcState => {
  switch (action.type) {
    default:
      return state;
    case CalcActionsEnum.SET_CREDIT_AMOUNT:
      return { ...state, creditAmount: action.payload };
    case CalcActionsEnum.SET_CREDIT_TERM:
      return { ...state, creditTerm: action.payload };
    case CalcActionsEnum.SET_INITIAL_FEE:
      return { ...state, initialFee: action.payload };
    case CalcActionsEnum.SET_PAYMENT_TYPE:
      return { ...state, paymentType: action.payload };
    case CalcActionsEnum.SET_PRICE:
      return { ...state, price: action.payload };
    case CalcActionsEnum.SET_RATE:
      return { ...state, rate: action.payload };
    case CalcActionsEnum.SET_TYPE:
      return { ...state, type: action.payload };
  }
}
