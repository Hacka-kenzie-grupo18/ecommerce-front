import DescriptionAndComment from '../../Components/DescriptionAndComment/indext'
import Footer from '../../Components/Footer'
import Product from '../../Components/Product'
import RelatedProducts from '../../Components/RelatedProducts'

const ProductPage = () => (
  <div className='bg-grey200 h-[100%] flex flex-col items-center'>
    <Product />
    <DescriptionAndComment />
    <RelatedProducts />
    <Footer />
  </div>
)

export default ProductPage
