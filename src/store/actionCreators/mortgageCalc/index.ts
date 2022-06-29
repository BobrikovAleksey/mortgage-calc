import { ActionEnum, TypeEnum } from '../../types/mortgageCalc/enums';
import { TAction } from '../../types/mortgageCalc/actions';
import { setCreditAmount } from './creditAmount';
import { setInitialFee } from './initialFee';
import { setPaymentType } from './paymentType';
import { setPrice } from './price';

const setType = (type: TypeEnum): TAction => ({
  type: ActionEnum.SET_TYPE,
  payload: type,
});

export {
  setCreditAmount,
  setInitialFee,
  setPaymentType,
  setPrice,
  setType,
}
