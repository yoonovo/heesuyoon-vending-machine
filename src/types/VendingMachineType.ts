type cashInfoType = {
  id: number;
  value: number; // 현금 금액
  quantity: number; // 현금 보유 수
};

type productsInfoType = {
  id: number;
  name: string; // 제품명
  value: number; // 제품 가격
  color: string; // 제품 색
  quantity: number; // 재품 보유 수
};

export type { cashInfoType, productsInfoType };
