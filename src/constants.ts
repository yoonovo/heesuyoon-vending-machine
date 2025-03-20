import {
  cashType,
  cashInfoType,
  productsInfoType,
  inputCashType,
} from "./types/VendingMachineType";

// 현금 종류
export const cash: cashType[] = [100, 500, 1000, 5000, 10000];

// 결제 단계별 메시지
export const msgByStep = [
  "결제수단을 선택해주세요.",
  "제픔을 선택해주세요.",
  "결제 중입니다.",
  "완료되었습니다. 제품을 챙겨주세요.",
];

// 자판기 초기 현금 정보
export const initCashInfo: cashInfoType[] = [
  { id: 1, value: 100, quantity: 20 },
  { id: 2, value: 500, quantity: 20 },
  { id: 3, value: 1000, quantity: 20 },
  { id: 4, value: 5000, quantity: 10 },
  { id: 5, value: 10000, quantity: 10 },
];

// 자판기 초기 제품 정보
export const initProductsInfo: productsInfoType[] = [
  { id: 1, name: "Coke", price: 1100, color: "red", quantity: 2 },
  { id: 2, name: "Water", price: 600, color: "blue", quantity: 10 },
  { id: 3, name: "Coffee", price: 700, color: "brown", quantity: 10 },
];

// 결제수단이 현금 일 경우, 투입된 금액 정보
export const initInputCash: inputCashType = {
  total: 0,
  count: cash.reduce((t: Record<number, number>, v: cashType) => {
    t[v] = 0;
    return t;
  }, {}),
};

// 결제 완료된 제품 정보
export const initPurchasedProducts: Record<string, number> =
  initProductsInfo.reduce((t: Record<string, number>, v) => {
    t[v.name] = 0;
    return t;
  }, {});
