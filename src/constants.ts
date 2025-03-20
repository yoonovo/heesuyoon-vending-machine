import { cashInfoType, productsInfoType } from "./types/VendingMachineType";

export const cashInfo: cashInfoType[] = [
  { id: 1, value: 100, quantity: 20 },
  { id: 2, value: 500, quantity: 20 },
  { id: 3, value: 1000, quantity: 20 },
  { id: 4, value: 5000, quantity: 10 },
  { id: 5, value: 10000, quantity: 10 },
];

export const productsInfo: productsInfoType[] = [
  { id: 1, name: "Coke", price: 1100, color: "red", quantity: 10 },
  { id: 2, name: "Water", price: 600, color: "blue", quantity: 10 },
  { id: 3, name: "Coffee", price: 700, color: "brown", quantity: 10 },
];

export const msgByStep = [
  "결제수단을 선택해주세요.",
  "제픔을 선택해주세요.",
  "결제 중입니다.",
  "완료되었습니다. 제품을 챙겨주세요.",
];

export const initInputCash = {
  100: 0,
  500: 0,
  1000: 0,
  5000: 0,
  10000: 0,
};
