import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>Purple</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
