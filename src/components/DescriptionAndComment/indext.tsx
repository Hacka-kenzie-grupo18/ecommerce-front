import Comments from "../Comments"
import Description from "../Description"


const DescriptionAndComment = () => {
  return (
    <>
      <section className='flex flex-col items-center pb-5'>
        <div className='border-2 rounded-4 bg-whiteFixed p-2'>
          <Description />
          <Comments />
        </div>
      </section>
    </>
  )
}

export default DescriptionAndComment
