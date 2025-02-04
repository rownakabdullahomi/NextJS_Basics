import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-4">
        {/* Side Navbar */}
        <div className="col-span-1">
            <ul>
                <li>User List</li>
            </ul>
        </div>
        {/* Dashboard Content */}
        <div className="col-span-3">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
