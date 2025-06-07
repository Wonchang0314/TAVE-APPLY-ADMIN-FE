import type { Preview } from "@storybook/react";
import { initialize, mswDecorator } from "msw-storybook-addon";
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

initialize();

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

export const decorators = [mswDecorator];
export default preview;
