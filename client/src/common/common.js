export const _setDate = function (index) {
  const day = new Date(index);
  const month = day.getMonth() + 1;
  const year = day.getFullYear();
  const date = day.getDate();
  return `${year}-${month >= 10 ? month : "0" + month}-${
    date >= 10 ? date : "0" + date
  }`;
};
