import axios from "axios";

/** 추후에 baseURL은 백엔드 주소로 대체예정 */
export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// axiosInstance.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem("accessToken");
//   if (accessToken && config.headers) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return config;
// });

// axiosInstance.interceptors.request.use(
//   (response) => response,
//   async (error) => {
//     const axiosError: AxiosError = error;
//     const originalRequest = error.config;

//     if (
//       axiosError.response?.status === 401 &&
//       !originalRequest.retry &&
//       axiosError.message === "토큰 재발급이 필요합니다."
//     ) {
//       try {
//         const res = await axios.post(`/v1/auth/refresh`);
//         const newAccessToken = res.data.accessToken;
//         localStorage.setItem("accessToken", newAccessToken);

//         originalRequest.headers = {
//           ...originalRequest.headers,
//           Authorization: `Bearer ${newAccessToken}`,
//         };

//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         console.error("토큰 갱신 실패:", refreshError);
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );
