import { axiosInstance } from "@/api/axiosInstance";
import type { SettingDefaultResponse } from "./types";

const fetchSettingDefault = async () => {
  try {
    const res = await axiosInstance.get("/v1/admin/apply/setting");
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const postSettingDefault = async (data: SettingDefaultResponse) => {
  try {
    const res = await axiosInstance.post("/v1/admin/apply/setting", data);
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { fetchSettingDefault, postSettingDefault };
