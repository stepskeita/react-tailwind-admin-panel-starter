import React from "react";
import CustomSidebar from "./CustomSidebar";
import CustomHeader from "./CustomHeader";

const MainLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex items-stretch">
      {/* sidebar */}
      <CustomSidebar />

      {/* right layout */}
      <div className="flex-1 flex flex-col">
        <CustomHeader />
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
