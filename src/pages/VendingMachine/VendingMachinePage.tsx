import { useState } from "react";
import "./VendingMachinePage.scss";
import PaymentCash from "../../components/PaymentCash/PaymentCash";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
import {
  initCashInfo,
  initProductsInfo,
  msgByStep,
  initInputCash,
  initPurchasedProducts,
} from "../../constants";
import { productsInfoType } from "../../types/VendingMachineType";

const VendingMachinePage = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>("");
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [noticeMsg, setNoticeMsg] = useState<string>(msgByStep[stepNumber]);

  const [inputCash, setInputCash] = useState(initInputCash);
  const [cashInfo, setCashInfo] = useState(initCashInfo);
  const [productsInfo, setProductsInfo] = useState(initProductsInfo);
  const [purchasedProducts, setPurchasedProducts] = useState(
    initPurchasedProducts
  );

  const onCancel = () => {
    setSelectedPayment("");
    setInputCash(initInputCash);
    setProcessStep(0);
  };

  const onSuccess = () => {
    setProcessStep(1);
  };

  const setProcessStep = (number: number) => {
    setStepNumber(number);
    setNoticeMsg(msgByStep[number]);
  };

  const handleCompletePayment = (
    product: productsInfoType,
    callback?: () => void
  ) => {
    setTimeout(() => {
      callback?.();
      setProcessStep(3);
      setProductsInfo(
        productsInfo.map((v) =>
          v.id === product.id
            ? Object.assign({}, v, { quantity: v.quantity - 1 })
            : v
        )
      );
      setPurchasedProducts(
        Object.assign({}, purchasedProducts, {
          [product.name]: purchasedProducts[product.name] + 1,
        })
      );
    }, 1000);
  };

  const onPayment = (product: productsInfoType) => {
    // 금액 확인
    switch (selectedPayment) {
      case "card":
        const isSuccess = Math.random() < 0.9; // 10% 확률로 오류발생
        if (!isSuccess) {
          alert("카드 결제 오류 입니다. 다시 시도해주세요.");
          break;
        } else {
          setProcessStep(2);
        }

        handleCompletePayment(product);
        break;
      case "cash":
        const { total, count } = inputCash;

        // 가장 싼 제품의 가격보다 잔액이 부족한 경우
        const minPrice = productsInfo
          .map(({ price }) => price)
          .sort((a, b) => a - b)[0];
        if (total < minPrice) {
          alert("잔액이 부족합니다.");
          setNoticeMsg("잔액이 부족합니다.");
          break;
        }

        // 선택한 제품의 가격보다 잔액이 부족한 경우
        if (total < product.price) {
          alert("잔액이 부족합니다.");
          setProcessStep(1);
          break;
        } else {
          setProcessStep(2);
        }

        // 총 금액 차감
        const callback = () =>
          setInputCash({ total: total - product.price, count });

        handleCompletePayment(product, callback);
        break;
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
          {/* 음료 선택 버튼 */}
          <ul className="machine-products-button">
            {productsInfo.map((v) =>
              v.quantity > 0 && (stepNumber === 1 || stepNumber === 3) ? (
                <li
                  key={`machine_btn_${v.name}_${v.id}`}
                  className={`item active`}
                  onClick={() => {
                    onPayment(v);
                  }}
                >
                  Click
                </li>
              ) : (
                <li key={`machine_btn_${v.name}_${v.id}`} className={`item`}>
                  {v.quantity > 0 ? "" : "X"}
                </li>
              )
            )}
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
        {/* 결제한 제품 출력 부분 */}
        <div className="dispenser">
          <ul className="purchased-products">
            {productsInfo.map(({ name, color }) =>
              purchasedProducts[name] > 0 ? (
                <li
                  key={`purchased_products_${name}`}
                  style={{ background: color }}
                >
                  {name} {purchasedProducts[name]}개
                </li>
              ) : (
                ""
              )
            )}
          </ul>
          <button
            className="dispenser-button"
            onClick={() => setPurchasedProducts(initPurchasedProducts)}
          >
            꺼내기
          </button>
        </div>
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
