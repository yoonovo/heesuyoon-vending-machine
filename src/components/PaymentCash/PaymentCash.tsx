import { insertComma } from "../../utils/number";
import { cashInfoType } from "../../types/VendingMachineType";
import "./PaymentCash.scss";

type PaymentCashProp = {
  inputCash: number;
  cashInfo: cashInfoType[];
  setInputCash: (v: number) => void;
};

const MAX_VALUE = 50000; // 최대 투입가능 금액

const PaymentCash = ({
  inputCash,
  cashInfo,
  setInputCash,
}: PaymentCashProp) => {
  const handleInputCash = (value: number) => {
    if (value > MAX_VALUE) {
      alert("5만원 이상은 투입이 불가능 합니다.");
      return;
    }
    setInputCash(value);
  };

  const reset = () => {
    setInputCash(0);
  };

  return (
    <div className="payment-cash">
      <p>현금을 투입해주세요.</p>
      <h2>총 금액 : {insertComma(inputCash)}원</h2>
      <ul className="payment-cash-type">
        {cashInfo.map(({ value }) => (
          <li
            key={`cash_${value}`}
            onClick={() => handleInputCash(inputCash + value)}
          >
            {insertComma(value)}원
          </li>
        ))}
      </ul>
      <div className="payment-cash-button">
        <button>완료</button>
        <button onClick={reset}>초기화</button>
        <button>취소</button>
      </div>
    </div>
  );
};

export default PaymentCash;
