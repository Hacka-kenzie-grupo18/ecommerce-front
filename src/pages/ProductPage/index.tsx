import DescriptionAndComment from '../../components/DescriptionAndComment/indext'
import Footer from '../../components/Footer'
import Product from '../../components/Product'
import RelatedProducts from '../../components/Select/RelatedProducts'


const ProductPage = () => (
  <div className='bg-grey200 h-[100%] flex flex-col items-center'>
    <Product />
    <DescriptionAndComment />
    <RelatedProducts />
    <Footer />
  </div>
)

export default ProductPage
