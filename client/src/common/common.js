export const _setDate = function (index) {
  const day = new Date(index);
  const month = day.getMonth() + 1;
  const year = day.getFullYear();
  const date = day.getDate();
  return `${year}-${month >= 10 ? month : "0" + month}-${
    date >= 10 ? date : "0" + date
  }`;
};

export const _getCategory = function (obj, id) {
  let result = null;
  for (let i = 0; i < obj.length; i++) {
    if (obj[i]._id == id) {
      result = obj[i].subCode;
      break;
    }
  }
  //break사용을 위해 for문 사용
  // obj.forEach((item) => {
  //   if (item._id == id) {
  //     result = item.subCode;
  //   }
  // });
  return result;
};
