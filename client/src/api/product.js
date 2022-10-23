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

export const getProductDetail = async (id) => {
  const result = await productData
    .get("/product/detail", { params: { id } })
    .then((res) => {
      return res.data;
    });
  console.log(result);
  return result;
};

export const addProductList = async (data) => {
  const formData = new FormData();
  console.log(data);
  Object.entries(data).forEach((item) => formData.append(item[0], item[1]));

  //   formdata 확인
  let entries = formData.entries();
  for (const pair of entries) {
    console.log(pair[0] + ", " + pair[1]);
  }

  const result = await productData
    .post("/product/add", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      return res.data;
    });
  console.log(result);
  return result;
};
