import CardsPromoInfo from '../../Components/CardsPromoInfo/CardsPromo'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import HeaderPromotion from '../../Components/HeaderPromotion/HeaderPromotion'
import MailAreaHome from '../../Components/MailAreaHome/MailAreaHome'
import AnimatedBanner from '../../Components/MovPromotion/AnimatedBanner'
import Newsletter from '../../Components/Newsletter'
import PromotionTime from '../../Components/PromotionTime/PromotionTime'
import SwiperHome from '../../Components/Swiper/SwiperHome'
import ThemesPromotionMarvel from '../../Components/ThemesProducts/ThemePromotionMarvel'
import ThemesPromotionRings from '../../Components/ThemesProducts/ThemeRings'
import ThemesPromotionStarWars from '../../Components/ThemesProducts/ThemesPromotionStarWars'

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
          <AnimatedBanner />
          <ThemesPromotionStarWars />
          <ThemesPromotionMarvel />
          <ThemesPromotionRings />
          <SwiperHome />
          <MailAreaHome />
          <Newsletter />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HomePage
