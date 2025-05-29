import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Page as DashBoard } from "@/pages/DashBoard";
import { Page as ApplyList } from "@/pages/ApplyList";
import { Page as Setting } from "@/pages/Setting";
import { Page as Evaluation } from "@/pages/Evaluation";
import Header from "@/components/Header/Header";

function App() {
  const queryClient = new QueryClient();
  const redirectionList = ["DASHBOARD", "APPLY LIST", "SETTING", "EVALUTION"];

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="h-screen bg-[#121826]">
          <Header redirectionList={redirectionList} />
          <main className="h-[calc(100vh-112px)]">
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/applies" element={<ApplyList />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/evalution" element={<Evaluation />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
