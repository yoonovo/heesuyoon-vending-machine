export const insertComma = (n: number | string) => {
  const reg = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
  const num = typeof n === "number" ? n.toString() : n;
  return num.replace(reg, ",");
};
