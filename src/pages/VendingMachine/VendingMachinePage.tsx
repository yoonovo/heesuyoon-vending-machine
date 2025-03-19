import { useState } from "react";
import "./VendingMachinePage.scss";
// import { insertComma } from "../../utils/number";
import { cashInfoType, productsInfoType } from "../../types/VendingMachineType";
import PaymentCash from "../../components/PaymentCash/PaymentCash";

const cashInfo: cashInfoType[] = [
  { id: 1, value: 100, quantity: 10 },
  { id: 2, value: 500, quantity: 10 },
  { id: 3, value: 1000, quantity: 10 },
  { id: 4, value: 5000, quantity: 10 },
  { id: 5, value: 10000, quantity: 10 },
];

const productsInfo: productsInfoType[] = [
  { id: 1, name: "Coke", value: 1100, color: "red", quantity: 10 },
  { id: 2, name: "Water", value: 600, color: "blue", quantity: 10 },
  { id: 3, name: "Coffee", value: 700, color: "brown", quantity: 10 },
];

const VendingMachinePage = () => {
  const [inputCash, setInputCash] = useState<number>(0);

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
                <p style={{ background: "#fff", color: v.color }}>
                  {v.value}원
                </p>
              </li>
            ))}
          </ul>
          <ul className="machine-products-button">
            {productsInfo.map((v) => (
              <li key={`machine_btn_${v.name}_${v.id}`} className="item"></li>
            ))}
          </ul>
        </div>
        <div className="notice">결제수단을 선택해주세요.</div>
        <div className="payment-type">
          <div className="item">카드</div>
          <div className="item">현금</div>
        </div>
        {/* 현금 */}
        <PaymentCash
          inputCash={inputCash}
          cashInfo={cashInfo}
          setInputCash={setInputCash}
        />
      </div>
      <div>
        <dl>
          <dt>
            <h3>제품 재고 현황</h3>
          </dt>
          {productsInfo.map((v) => (
            <dd key={`rest_products_${v.name}`}>
              {v.name} : {v.quantity}개
            </dd>
          ))}
        </dl>
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
      </div>
    </div>
  );
};

export default VendingMachinePage;
