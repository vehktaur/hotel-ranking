export const reduce = (item: any[]) => {
  const setArray = new Set(item);
  return Array.from(setArray);
};
