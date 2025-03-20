import { useState } from "react";
import "./PaymentCard.scss";

type PaymentCardProp = {
  stepNumber: number;
  success: () => void;
  cancel: () => void;
};

const PaymentCard = ({ stepNumber, success, cancel }: PaymentCardProp) => {
  const [statusMsg, setStatusMsg] = useState<string>("대기중...");

  const handleInputCard = () => {
    const isSuccess = Math.random() < 0.9; // 10% 확률로 오류발생
    if (!isSuccess) {
      alert("카드 오류 입니다. 다시 시도해주세요.");
      setStatusMsg("카드 오류");
      return;
    }

    success();
    setStatusMsg("카드 확인 완료");
  };

  return (
    <div className="payment-card">
      <h2>{statusMsg}</h2>
      {stepNumber === 0 && <p>카드를 넣어주세요.</p>}
      <div className="payment-card-button">
        {stepNumber === 0 ? (
          <>
            <button onClick={handleInputCard}>카드 넣기</button>
            <button onClick={cancel}>취소</button>
          </>
        ) : (
          <button onClick={cancel}>카드 빼기</button>
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
