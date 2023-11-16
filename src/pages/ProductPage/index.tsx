import DescriptionAndComment from '../../Components/DescriptionAndComment/indext'
import Product from '../../Components/Product'
import RelatedProducts from '../../Components/RelatedProducts'

const ProductPage = () => {
  return (
    <div className='bg-grey200 h-[100%] flex flex-col items-center'>
      <Product />
      <DescriptionAndComment />
      <RelatedProducts />
    </div>
  )
}

export default ProductPage
