import React from "react";
import HeaderPromotion from "../../components/HeaderPromotion/HeaderPromotion";
import PromotionTime from "../../components/PromotionTime/PromotionTime";
import Header from "../../Components/Header";
import ThemesPromotionStarWars from "../../components/ThemesProducts/ThemesPromotionStarWars";
import ThemesPromotionMarvel from "../../components/ThemesProducts/ThemePromotionMarvel";

const HomePage = () => {
  return (
    <div className="bg-slate-100">
      <div className="">
      <Header/>
       <div/>
      <section className="allign max-w-[1440px] px-4 ">
        <HeaderPromotion />
      </section>

      <div className="h-[1000px] mt-4">
        <PromotionTime />
        <ThemesPromotionStarWars />
        <ThemesPromotionMarvel />
      </div>
    </div>
  );
};

export default HomePage;
