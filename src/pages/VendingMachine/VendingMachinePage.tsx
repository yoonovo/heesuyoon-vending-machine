import { useState } from "react";
import "./VendingMachinePage.scss";
import PaymentCash from "../../components/PaymentCash/PaymentCash";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
import {
  cashInfo,
  productsInfo,
  msgByStep,
  initInputCash,
} from "../../constants";

const VendingMachinePage = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>("");
  const [inputCash, setInputCash] =
    useState<Record<number, number>>(initInputCash);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [noticeMsg, setNoticeMsg] = useState<string>(msgByStep[stepNumber]);

  const onCancel = () => {
    setSelectedPayment("");
    setInputCash(initInputCash);
    setStepNumber(0);
    setNoticeMsg(msgByStep[0]);
  };

  const onSuccess = () => {
    setStepNumber(1);
    setNoticeMsg(msgByStep[1]);

    if (selectedPayment === "card") {
    } else if (selectedPayment === "cash") {
    }
  };

  return (
    <div className="container">
      <div className="machine">
        <div className="machine-products">
          <ul className="machine-products-sample">
            {productsInfo.map((v) => (
              <li
                key={`machine_products_${v.name}_${v.id}`}
                className="item"
                style={{
                  background: v.color,
                }}
              >
                <p>{v.name}</p>
                <p>{v.quantity}개</p>
                <p style={{ background: "#fff", color: v.color }}>
                  {v.price}원
                </p>
              </li>
            ))}
          </ul>
          <ul className="machine-products-button">
            {productsInfo.map((v) => (
              <li
                key={`machine_btn_${v.name}_${v.id}`}
                className={`item ${stepNumber === 1 && "active"}`}
              >
                {stepNumber === 1 && "Click"}
              </li>
            ))}
          </ul>
        </div>
        <div className="notice">{noticeMsg}</div>
        {selectedPayment === "" && (
          <div className="payment-type">
            <div className="item" onClick={() => setSelectedPayment("card")}>
              카드
            </div>
            <div className="item" onClick={() => setSelectedPayment("cash")}>
              현금
            </div>
          </div>
        )}
        {/* 카드 */}
        {selectedPayment === "card" && (
          <PaymentCard
            stepNumber={stepNumber}
            success={onSuccess}
            cancel={onCancel}
          />
        )}
        {/* 현금 */}
        {selectedPayment === "cash" && (
          <PaymentCash
            inputCash={inputCash}
            cashInfo={cashInfo}
            stepNumber={stepNumber}
            setInputCash={setInputCash}
            success={onSuccess}
            cancel={onCancel}
          />
        )}
        {/* 결제 */}
        {stepNumber === 1 && <div className="dispenser"></div>}
      </div>
      {/* 현금 보유 현황 */}
      {/* <div>
        <dl>
          <dt>
            <h3>현금 보유 현황</h3>
          </dt>
          {cashInfo.map((v) => (
            <dd key={`rest_cash_${v.value}`}>
              {v.value}원 : {v.quantity}개
            </dd>
          ))}
        </dl>
      </div> */}
    </div>
  );
};

export default VendingMachinePage;
