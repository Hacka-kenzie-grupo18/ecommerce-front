import CardsPromoInfo from '../../components/CardsPromoInfo/CardsPromo'
import Footer from '../../components/Swiper/Footer'
import Header from '../../components/Header'
import HeaderPromotion from '../../components/HeaderPromotion/HeaderPromotion'
import MailAreaHome from '../../components/MailAreaHome/MailAreaHome'
import AnimatedBanner from '../../components/MovPromotion/AnimatedBanner'
import Newsletter from '../../components/Select/Newsletter'
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
