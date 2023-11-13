import CardsPromoInfo from '../../components/CardsPromoInfo/CardsPromo'
import Header from '../../components/Header'
import HeaderPromotion from '../../components/HeaderPromotion/HeaderPromotion'
import MailAreaHome from '../../components/MailAreaHome/MailAreaHome'
import PromotionTime from '../../components/PromotionTime/PromotionTime'
import SwiperHome from '../../components/Swiper/SwiperHome'
import ThemesPromotionMarvel from '../../components/ThemesProducts/ThemePromotionMarvel'
import ThemesPromotionRings from '../../components/ThemesProducts/ThemeRings'
import ThemesPromotionStarWars from '../../components/ThemesProducts/ThemesPromotionStarWars'

const HomePage = () => {
  return (
    <div className='bg-slate-100'>
      <div className=''>
        <Header />
        <div />
        <section className='allign max-w-[1440px] px-4 '>
          <HeaderPromotion />
        </section>
        <div className='h-fit mt-4'>
          <PromotionTime />
          <CardsPromoInfo />
          <ThemesPromotionStarWars />
          <ThemesPromotionMarvel />
          <ThemesPromotionRings />
          <SwiperHome />
          <MailAreaHome />
        </div>
      </div>
    </div>
  )
}

export default HomePage
