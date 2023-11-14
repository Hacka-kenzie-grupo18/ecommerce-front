import React from "react";
import AsideAdmin from "./components/AsideAdmin";
import HeaderAdmin from "./components/HeaderAdmin";
import MainAdmin from "./components/MainAdmin";

const DashboardAdmin = () => {
  return (
    <div className="h-[950px] flex">
      <AsideAdmin />
      <div className="flex flex-col  w-full">
        <HeaderAdmin />
        <MainAdmin />
      </div>
    </div>
  );
};

export default DashboardAdmin;
