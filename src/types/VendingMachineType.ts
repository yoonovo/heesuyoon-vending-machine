type cashType = 100 | 500 | 1000 | 5000 | 10000;

type cashReserveType = {
  id: number;
  value: cashType; // 현금 금액
  quantity: number; // 현금 보유 수
};

type productsType = {
  id: number;
  name: string; // 제품명
  price: number; // 제품 가격
  color: string; // 제품 색
  quantity: number; // 재품 보유 수
};

type insertedCashType = {
  total: number; // 투입된 총 금액
  count: Record<cashType, number>; // 투입된 현금들
};

export type { cashType, cashReserveType, productsType, insertedCashType };
