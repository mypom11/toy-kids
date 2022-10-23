import axios from "axios";
import { setInterceptors } from "./interceptors";

function createInstanceProduct() {
  // Token값과 특정 url을 붙여서 셋팅
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_LOCAL_URL}`,
  });
  return setInterceptors(instance);
}

const categoryData = createInstanceProduct();

export const getCategoryList = async (search) => {
  const result = await categoryData
    .get("/category/find", { params: { type: search } })
    .then((res) => {
      return res.data;
    });
  return result;
};

export const addCategoryList = async (data) => {
  console.log(data);
  const result = await categoryData.post("/category/add", data).then((res) => {
    return res.data;
  });
  return result;
};

export const delCategoryList = async (id) => {
  const result = await categoryData.post("/category/del", id).then((res) => {
    return res.data;
  });
  return result;
};
