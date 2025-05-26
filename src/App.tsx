import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Page as DashBoard } from "@/pages/DashBoard";
import { Page as ApplyList } from "@/pages/ApplyList";
import { Page as Setting } from "@/pages/Setting";
import { Page as Evaluation } from "@/pages/Evaluation";
import Header from "@/components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen bg-[#121826]">
        <Header />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/applies" element={<ApplyList />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/evaluation" element={<Evaluation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
