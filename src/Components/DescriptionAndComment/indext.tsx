import Comments from '../Comments'
import Description from '../Description'

const DescriptionAndComment = () => {
  return (
    <>
      <section className='p-2 flex flex-col items-center pb-20'>
        <div className='border-2 rounded-4 bg-whiteFixed p-4'>
          <Description />
          <Comments />
        </div>
      </section>
    </>
  )
}

export default DescriptionAndComment
