const InterviewersLoading = () => {
  return (
    <>
      {Array.from({ length: 7 }).map((_, index) => (
        <tr
          key={index}
          className="hover:bg-slate-600/5 border-b border-gray-200 cursor-pointer"
        >
          <td className="flex items-center gap-2 px-6 py-6 whitespace-nowrap border-b border-gray-200 justify-start">
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <div className="h-6 bg-gray-200 rounded w-24 animate-pulse" />
          </td>
          <td className="px-6 py-6 whitespace-nowrap border-b border-gray-200">
            <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
          </td>
          <td className="px-6 py-6 whitespace-nowrap border-b border-gray-200">
            <div className="h-6 bg-gray-200 rounded w-10 animate-pulse" />
          </td>
          <td className="px-6 py-6 whitespace-nowrap border-b border-gray-200">
            <div className="h-6 bg-gray-200 rounded w-24 animate-pulse" />
          </td>
          <td className="px-6 py-6 whitespace-nowrap border-b border-gray-200">
            <div className="h-6 bg-gray-200 rounded w-24 animate-pulse" />
          </td>
          <td className="px-6 py-6 whitespace-nowrap border-b border-gray-200">
            <div className="h-6 bg-gray-200 rounded w-12 animate-pulse" />
          </td>
        </tr>
      ))}
    </>
  );
};

export default InterviewersLoading;
