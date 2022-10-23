import axios from "axios";
import { setInterceptors } from "./interceptors";

function createInstanceProduct() {
  // Token값과 특정 url을 붙여서 셋팅
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_LOCAL_URL}`,
  });
  return setInterceptors(instance);
}

const noticeData = createInstanceProduct();

export const getNoticeList = async (search) => {
  const result = await noticeData
    .get("/notice/find", { params: search })
    .then((res) => {
      return res.data;
    });
  return result;
};

export const getNoticeDetail = async (id) => {
  const result = await noticeData
    .get("/notice/detail", { params: { id } })
    .then((res) => {
      return res.data;
    });
  console.log(result);
  return result;
};

export const addNoticeList = async (data) => {
  const result = await noticeData.post("/notice/add", data).then((res) => {
    return res.data;
  });
  console.log(result);
  return result;
};

export const changeUseYn = async (data) => {
  const result = await noticeData.post("/notice/useYn", data).then((res) => {
    return res.data;
  });
  return result;
};
