export const getIndex = (originalArr: any, dataToFindIndex: any) => {
  const index = originalArr.findIndex(
    (item: any) => item.id === dataToFindIndex.id
  );
  return index;
};

export const updateObjectArrayAtIndex = (
  originalArr: any,
  index: number,
  updateData: any
) => {
  const newArr = [
    ...originalArr.slice(0, index),
    updateData,
    ...originalArr.slice(index + 1),
  ];
  return newArr;
};

export const deleteObjectArrayAtIndex = (
  originalArr: any,
  deleteAt: number
) => {
  const newArray = [
    ...originalArr.slice(0, deleteAt),
    ...originalArr.slice(deleteAt + 1),
  ];

  return newArray;
};
