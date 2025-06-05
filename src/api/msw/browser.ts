import { setupWorker } from "msw/browser";
import { handlers } from "@/api/msw/handlers";

export const worker = setupWorker(...handlers);

// worker 시작
export const startMSW = async () => {
  if (process.env.NODE_ENV === "development") {
    await worker.start({
      onUnhandledRequest: "bypass", // MSW에서 처리되지 않는 요청은 그대로 통과
    });
    console.log("🔶 MSW 모킹 서버가 시작되었습니다.");
  }
};
