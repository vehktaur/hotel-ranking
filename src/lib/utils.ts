export const removeDuplicates = (item: any[]) => {
  const setArray = new Set(item);
  return Array.from(setArray);
};
