import HeaderPromotion from "../../components/HeaderPromotion/HeaderPromotion";
import PromotionTime from "../../components/PromotionTime/PromotionTime";
import Header from "../../components/Header/index";
import ThemesPromotionStarWars from "../../components/ThemesProducts/ThemesPromotionStarWars";
import ThemesPromotionMarvel from "../../components/ThemesProducts/ThemePromotionMarvel";
import ThemesPromotionRings from "../../components/ThemesProducts/ThemeRings";
import CardsPromoInfo from "../../components/CardsPromoInfo/CardsPromo";

const HomePage = () => {
  return (
    <div className="bg-slate-100">
      <div className="">
        <Header />
        <div />
        <section className="allign max-w-[1440px] px-4 ">
          <HeaderPromotion />
        </section>
        <div className="h-fit mt-4">
          <PromotionTime />
          <CardsPromoInfo />
          <ThemesPromotionStarWars />
          <ThemesPromotionMarvel />
          <ThemesPromotionRings />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
