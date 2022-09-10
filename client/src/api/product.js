import axios from "axios";
import { setInterceptors } from "./interceptors";

function createInstanceProduct() {
  // Token값과 특정 url을 붙여서 셋팅
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_LOCAL_URL}`,
  });
  return setInterceptors(instance);
}

const productData = createInstanceProduct();

export const getProductList = async (search) => {
  const result = await productData
    .get("/product/find", { params: search })
    .then((res) => {
      return res.data;
    });
  return result;
};
