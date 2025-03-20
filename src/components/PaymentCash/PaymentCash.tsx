import { insertComma } from "../../utils/number";
import {
  cashType,
  cashReserveType,
  insertedCashType,
} from "../../types/VendingMachineType";
import "./PaymentCash.scss";
import { initInsertedCash } from "../../constants";

type PaymentCashProp = {
  currentStep: number;
  insertedCash: insertedCashType;
  cashReserve: cashReserveType[];
  setInsertedCash: (v: insertedCashType) => void;
  setProcessStep: (v: number) => void;
  onCancel: () => void;
};

const PaymentCash = ({
  currentStep,
  insertedCash,
  cashReserve,
  setInsertedCash,
  setProcessStep,
  onCancel,
}: PaymentCashProp) => {
  // 현금 투입시 동작
  const handleInsertedCash = (value: cashType) => {
    const { total: tot, count: cnt } = insertedCash;

    if (tot + value > 50000) {
      alert("5만원 이상은 투입이 불가능 합니다.");
      return;
    }

    const count = Object.assign({}, cnt, { [value]: cnt[value] + 1 });
    const total = Object.keys(count).reduce((t, v) => {
      const key = Number(v) as cashType;
      t += key * count[key];
      return t;
    }, 0);

    setInsertedCash({ total, count });
  };

  const handleNextStep = () => {
    if (insertedCash.total === 0) {
      alert("투입된 금액이 없습니다.");
      return;
    }

    setProcessStep(1); // 제품선택 단계로 변경
  };

  // 투입한 현금 반환
  const handleReturnCash = () => {
    setInsertedCash(initInsertedCash);
  };

  return (
    <div className="payment-cash">
      <h2>총 금액 : {insertComma(insertedCash.total)}원</h2>
      {currentStep === 0 ? (
        <>
          <p>현금을 투입해주세요.</p>
          <ul className="payment-cash-type">
            {cashReserve.map(({ id, value }) => (
              <li key={`cash_${id}`} onClick={() => handleInsertedCash(value)}>
                {insertComma(value)}원 ({insertedCash.count[value]})
              </li>
            ))}
          </ul>
          <div className="payment-cash-button">
            <button onClick={handleNextStep}>완료</button>
            <button onClick={handleReturnCash}>반환</button>
            <button onClick={onCancel}>취소</button>
          </div>
        </>
      ) : (
        <div className="payment-cash-button">
          <button onClick={onCancel}>거스름돈 반환</button>
        </div>
      )}
    </div>
  );
};

export default PaymentCash;
