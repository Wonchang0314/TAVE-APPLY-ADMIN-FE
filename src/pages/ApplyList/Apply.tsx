import CountCard from "@/components/Card/CountCard";
import SearchInput from "@/components/Input/SearchInput";
import FlexBox from "@/components/Layout/FlexBox";
import Tab from "@/components/Tab/Tab";
import { useState } from "react";

const Apply = () => {
  const [activeTab, setActiveTab] = useState<"전체" | "대기중" | "완료">(
    "전체"
  );
  const [searchValue, setSearchValue] = useState("");
  const categories = ["전체", "대기중", "완료"];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <FlexBox className="w-full pt-8 justify-center gap-4">
        <CountCard text="현재 지원자수" boxColor="blue" count={200} />
        <CountCard text="전 기수 대비" boxColor="green" count="+10%" />
        <CountCard text="현재 지원자수" boxColor="orange" count={100} />
      </FlexBox>
      <div className="px-16 flex justify-between items-center">
        <Tab
          categories={categories}
          active={activeTab}
          onChange={() => setActiveTab(activeTab)}
          className="text-white"
        />
        <div className="w-1/4">
          <SearchInput
            placeholder="지원자 검색"
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </>
  );
};

export default Apply;
