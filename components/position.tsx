import React from "react";

export const Position: React.FC<{
  company: string;
  logo: JSX.Element;
  position: string;
  description: string;
  url: string;
  from: string;
  to?: string;
}> = ({ company, url, from, to, position, logo, description }) => {
  return (
    <tr className="bg-white hover:bg-gray-100 transform duration-150 border-b last:border-0">
      <td className="px-6 py-4 whitespace-no-wrap  border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10">{logo}</div>
          <div className="ml-4">
            <div className="text-sm leading-5 font-medium text-gray-900">
              {position}
            </div>
            <div className="text-sm leading-5 text-gray-500">{company}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap  border-gray-200 hidden lg:table-cell">
        <div className="text-sm leading-5 text-gray-800">{description}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap  border-gray-200 text-gray-600 text-sm">
        <span className="">{from}</span> -{" "}
        <span className={!to ? "font-bold" : ""}>{to || "Now"}</span>
      </td>
    </tr>
  );
};
