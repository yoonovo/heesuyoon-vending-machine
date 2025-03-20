import {
  cashType,
  cashReserveType,
  productsType,
  insertedCashType,
} from "./types/VendingMachineType";

// 결제수단 종류
export const payment: { id: string; name: string }[] = [
  { id: "card", name: "카드" },
  { id: "cash", name: "현금" },
];

// 결제 단계별 메시지
// [결제수단 선택 -> 제품선택 -> 결제 -> 결제완료
export const msgByStep: string[] = [
  "결제수단을 선택해주세요.",
  "제픔을 선택해주세요.",
  "결제 중입니다.",
  "완료되었습니다. 제품을 챙겨주세요.",
];

// 자판기 현금 정보
export const initCashReserve: cashReserveType[] = [
  { id: 1, value: 100, quantity: 20 },
  { id: 2, value: 500, quantity: 20 },
  { id: 3, value: 1000, quantity: 20 },
  { id: 4, value: 5000, quantity: 10 },
  { id: 5, value: 10000, quantity: 10 },
];

// 자판기 제품 정보
export const initProducts: productsType[] = [
  { id: 1, name: "Coke", price: 1100, color: "red", quantity: 5 },
  { id: 2, name: "Water", price: 600, color: "blue", quantity: 10 },
  { id: 3, name: "Coffee", price: 700, color: "brown", quantity: 10 },
];

// 결제 수단이 현금 일 경우, 투입된 금액 정보
export const initInsertedCash: insertedCashType = {
  total: 0,
  count: initCashReserve
    .map(({ value }) => value)
    .reduce((t: Record<number, number>, v: cashType) => {
      t[v] = 0;
      return t;
    }, {}),
};

// 결제 완료된 제품 목록
export const initPurchasedProducts: Record<string, number> =
  initProducts.reduce((t: Record<string, number>, v) => {
    t[v.name] = 0;
    return t;
  }, {});
