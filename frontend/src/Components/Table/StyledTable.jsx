import React from 'react';
import { Link } from 'react-router-dom';

function StyledTable({ data, columns, open, actions }) {
  if (!open) return null;

  return (
    <div className="transition-opacity opacity-100">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-600 uppercase bg-gray-100">
            <tr>
              <th className="px-4 pl-10 py-3">#</th>
              {columns.map((col) => (
                <th key={col.accessor} className="px-6 py-3">{col.header}</th>
              ))}
              {actions && <th className="py-3">Action</th>}
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item._id || index} className="bg-white border-b border-gray-200">
                <td className="px-4 pl-10 py-3">{index + 1}</td>
                {columns.map((col) => (
                  <td key={col.accessor} className="px-6 py-3">
                    {col.link ? (
                      <Link
                        to={typeof col.link === 'function' ? col.link(item) : `${col.link}/${item._id}`}
                        className="font-medium flex hover:underline text-gray-500 hover:text-blue-500 transition-all"
                      >
                        {item[col.accessor]}
                      </Link>
                    ) : (
                      item[col.accessor]
                    )}
                  </td>
                ))}
                {actions && (
                  <td className="py-3 flex space-x-2">
                    {actions.map((action, i) => (
                      <button
                        key={i}
                        onClick={() => action.onClick(item)}
                        className={`px-4 py-2 text-sm cursor-pointer rounded-md transition-all ${action.className}`}
                      >
                        {action.label}
                      </button>
                    ))}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StyledTable;
