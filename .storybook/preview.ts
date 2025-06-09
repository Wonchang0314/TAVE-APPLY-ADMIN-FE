import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import "../src/index.css";
import {
  getCommonQuestions,
  getDesignQuestions,
  getWebFrontQuestions,
  getAppFrontQuestions,
  getBackendQuestions,
  getDataAnalysisQuestions,
  getDeepLearningQuestions,
} from "./Setting/Document/documentMock";
import {
  getNotificationList,
  postReservation,
  postIndividualReservation,
} from "./ApplyList/Notification";

initialize({
  onUnhandledRequest: "bypass",
  serviceWorker: {
    url:
      process.env.NODE_ENV === "development"
        ? "/mockServiceWorker.js"
        : "./mockServiceWorker.js",
  },
});

const preview: Preview = {
  parameters: {
    actions: {},
    msw: {
      handlers: [
        getCommonQuestions,
        getDesignQuestions,
        getWebFrontQuestions,
        getAppFrontQuestions,
        getBackendQuestions,
        getDataAnalysisQuestions,
        getDeepLearningQuestions,
        // 알림 신청 명단 페이지 관련
        getNotificationList,
        postReservation,
        postIndividualReservation,
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const loaders = [mswLoader];

export default preview;
