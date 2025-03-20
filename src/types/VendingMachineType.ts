type cashReserveType = Record<number | string, number>;

type productsType = {
  id: number;
  name: string; // 제품명
  price: number; // 제품 가격
  color: string; // 제품 색
  quantity: number; // 재품 보유 수
};

type insertedCashType = {
  total: number; // 투입된 총 금액
  count: cashReserveType; // 투입된 현금들
};

export type { cashReserveType, productsType, insertedCashType };
