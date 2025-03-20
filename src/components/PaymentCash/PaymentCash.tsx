import { useMemo } from "react";
import { insertComma } from "../../utils/number";
import { cashInfoType } from "../../types/VendingMachineType";
import "./PaymentCash.scss";
import { initInputCash } from "../../constants";

type PaymentCashProp = {
  stepNumber: number;
  inputCash: Record<number, number>;
  cashInfo: cashInfoType[];
  setInputCash: (v: Record<number, number>) => void;
  success: () => void;
  cancel: () => void;
};

const MAX_VALUE = 50000; // 최대 투입가능 금액

const PaymentCash = ({
  stepNumber,
  inputCash,
  cashInfo,
  setInputCash,
  success,
  cancel,
}: PaymentCashProp) => {
  const handleInputCash = (value: number) => {
    if (totalInputCash + value > MAX_VALUE) {
      alert("5만원 이상은 투입이 불가능 합니다.");
      return;
    }

    setInputCash(
      Object.assign({}, inputCash, { [value]: inputCash[value] + 1 })
    );
  };

  const handleComplete = () => {
    if (totalInputCash === 0) {
      alert("투입된 금액이 없습니다.");
      return;
    }
    success();
  };

  const reset = () => {
    setInputCash(initInputCash);
  };

  const totalInputCash = useMemo(
    () =>
      Object.keys(inputCash).reduce(
        (t, v) => (t += Number(v) * inputCash[Number(v)]),
        0
      ),
    [inputCash]
  );

  return (
    <div className="payment-cash">
      <h2>총 금액 : {insertComma(totalInputCash)}원</h2>
      {stepNumber === 0 && (
        <>
          <p>현금을 투입해주세요.</p>
          <ul className="payment-cash-type">
            {cashInfo.map(({ value }) => (
              <li key={`cash_${value}`} onClick={() => handleInputCash(value)}>
                {insertComma(value)}원 ({inputCash[value]})
              </li>
            ))}
          </ul>
        </>
      )}
      <div className="payment-cash-button">
        {stepNumber === 0 ? (
          <>
            <button onClick={handleComplete}>완료</button>
            <button onClick={reset}>반환</button>
            <button onClick={cancel}>취소</button>
          </>
        ) : (
          <button onClick={cancel}>거스름돈 반환</button>
        )}
      </div>
    </div>
  );
};

export default PaymentCash;
