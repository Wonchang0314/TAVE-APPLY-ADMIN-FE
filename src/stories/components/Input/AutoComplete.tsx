// import { useState } from "react";
// import { organizations } from "../../organizations";

// interface AutoCompleteProps {
//   value: string | null;
//   placeholder?: string;
//   setValue: (newValue: string) => void;
// }

// const AutoComplete = ({ value, placeholder, setValue }: AutoCompleteProps) => {
//   const [selectedIdx, setSelectedIdx] = useState(-1); // 키보드로 선택된 값을 트래킹하기 위한 인덱스
//   const [filtered, setFiltered] = useState<string[]>([]);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setValue(value);
//     setSelectedIdx(-1);

//     if (value.length >= 2) {
//       const results = organizations
//         .filter(
//           (organization) =>
//             organization.toLowerCase().includes(value.toLowerCase()) ||
//             organization.toUpperCase().includes(value.toUpperCase())
//         )
//         .slice(0, 7);
//       setFiltered(results);
//       setShowDropdown(results.length > 0);
//     } else {
//       setFiltered([]);
//       setShowDropdown(false);
//     }
//   };

//   const handleSelect = (selected: string) => {
//     setValue(selected);
//     setFiltered([]);
//     setShowDropdown(false);
//     setSelectedIdx(-1);
//   };

//   /** 키보드로 조직을 선택하도록 하는 함수
//    1. 위/아래 방향키: 위,아래 방향키로 항목 이동
//    2. 엔터키: 선택된 항목 확정
//    3. ESC키: 드롭다운 닫기
//    */
//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (!showDropdown || filtered.length === 0) return;

//     if (e.key === "ArrowDown") {
//       setSelectedIdx((prevIndex) =>
//         prevIndex < filtered.length - 1 ? prevIndex + 1 : 0
//       );
//     } else if (e.key === "ArrowUp") {
//       setSelectedIdx((prevIndex) =>
//         prevIndex > 0 ? prevIndex - 1 : filtered.length - 1
//       );
//     } else if (e.key === "Enter") {
//       if (selectedIdx >= 0) {
//         handleSelect(filtered[selectedIdx]);
//       }
//     } else if (e.key === "Escape") {
//       setShowDropdown(false);
//     }
//   };

//   return (
//     <div className="relative w-[468px]">
//       <img
//         src="/searchIcon.png"
//         alt="search-icon"
//         width={32}
//         height={32}
//         className="absolute top-1 left-1"
//       />
//       <input
//         type="text"
//         value={value ?? ""}
//         onChange={handleChange}
//         onKeyDown={handleKeyDown}
//         placeholder={placeholder}
//         className="w-full py-2 pl-10 pr-4 border rounded-lg shadow-xs"
//       />
//       {showDropdown && (
//         <ul className="absolute z-10 w-full border bg-white shadow-lg rounded">
//           {filtered.map((inst, idx) => (
//             <li
//               key={inst}
//               className={`p-2 cursor-pointer hover:bg-gray-200 ${
//                 selectedIdx === idx && "bg-gray-200"
//               }`}
//               onClick={() => handleSelect(inst)}
//               onMouseEnter={() => setSelectedIdx(idx)}
//             >
//               {inst}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default AutoComplete;
