import { useNavigate } from "react-router-dom";
import FlexBox from "@/components/Layout/FlexBox";
import Icon from "@/components/Icon/Icon";
import Button from "@/components/Button/Button";
import SearchInput from "@/components/Input/SearchInput";
import ApplicationTable from "@/components/ApplicationTable/ApplicationTable";
import type { RoleType } from "@/types/role";
import CheckBox from "@/components/Input/CheckBox";
import { useFilter } from "@/hooks/Setting/Interview/useFilter";

const tableRows = ["지원 분야", "이름", "성별", "학교", "면접 일자"];

const filters: RoleType[] = [
  "디자인",
  "웹 프론트",
  "앱 프론트",
  "백엔드",
  "데이터 분석",
  "딥러닝",
];

const TimeTable = () => {
  const navigate = useNavigate();
  const {
    filteredList,
    isLoading,
    showFilter,
    checkedRoles,
    searchInput,
    setSearchInput,
    setShowFilter,
    handleFilter,
    searchByName,
  } = useFilter();
  return (
    <>
      <FlexBox className="justify-between">
        <Button
          className="bg-white border-gray-300 text-gray-700! relative"
          onClick={() => setShowFilter(!showFilter)}
        >
          <Icon type="Filter" size={18} />
          지원분야
        </Button>
        {showFilter && (
          <div className="w-[222px] h-[296px] bg-white rounded-xl p-4 absolute bottom-35 border border-gray-100">
            {filters.map((role) => (
              <CheckBox
                key={role}
                text={role}
                isChecked={checkedRoles.has(role)}
                onChange={() => handleFilter(role)}
              />
            ))}
          </div>
        )}
        <SearchInput
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="이름을 입력해주세요"
          onKeyDown={(e) => e.key === "Enter" && searchByName()}
        />
      </FlexBox>
      <ApplicationTable
        applications={filteredList}
        rows={tableRows}
        isLoading={isLoading}
        navigate={navigate}
      />
    </>
  );
};

export default TimeTable;
