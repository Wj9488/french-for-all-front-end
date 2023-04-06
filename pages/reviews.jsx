import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

const Reviews = () => {

  const customerReviews = [
    {
      customer: "Jack Jones",
      review: "User reviews should follow a set structure and be really reliable. Your site should adopt this."
    },
    {
      customer: "Sajid Sangha",
      review: "Make sure to use a review structure that mentions the pain that your target market feels."
    },
    {
      customer: "Michelle Smith",
      review: "People like to buy things that other people have also bought, it's in our human nature to trust things that other people have already trusted more.",
    },
    {
      customer: "Sasha Cohen",
      review: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ]

  return (
    <div>
      <Head>
        <title>French For All | Reviews</title>
        <link rel="shortcut icon" href="/ffa__icon.png"/>
        <meta
          property="og:description"
          content="Get help from a professional native speaker with 1 to 1 lessons tailored to you.
          See some reviews from previous students."
        />
        <meta
          name="description"
          content="Get help from a local professional native speaker with 1 to 1 lessons tailored to you.
          See some reviews from previous students."
        />
        <meta
          property="og:image"
          content="/ffa__icon.png"
        />
      </Head>
      <div className="ml-auto mr-auto app__width">

      <section className="mt-20 mb-20 xl:mt-20 small__section_height">
        <h1 className="mb-20 text-center dark:text-neutral-200 font__quicksand font-semibold text-4xl xl:text-5xl">
          Reviews
        </h1>
          <div className="flex-row xl:grid xl:grid-cols-3 xl:grid-rows-2 xl:col-auto gap-5">
              {customerReviews.map((review) => (
                <div className="mt-5 bg-neutral-100 dark:bg-neutral-700 p-4 rounded-lg shadow-lg">
                  <div className="flex gap-5 items-center">
                    <p className="dark:text-neutral-200 font-semibold">
                      {review.customer}
                    </p>
                  </div>
                  <p className="mt-3 dark:text-neutral-200">
                    <span className="text-4x">"</span>
                    {review.review}
                  </p>
                </div>
              ))}
          </div>
      </section>

      <section className="mt-20 mb-20 flex-row xl:flex justify-between items-center font-semibold">
        <div>
          <h6 className="dark:text-white text-4xl xl:text-5xl text-center xl:text-left">
            Let's level up your French abilities
          </h6>
          <Link href="/sign-up">
            <div className="flex items-center justify-center xl:justify-start xl:justify-left">
              <button className="mt-3 xl:mt-5 font-medium text-white dark:text-black flex items-center gap-2 px-4 py-2 lg:py-2 bg-black dark:bg-white rounded-lg">
                <div className="cta__pulse_active dark:bg-green-600"></div>
                Get started
              </button>
            </div>
          </Link>
        </div>
        <div className="footer__img_grid gap-5 mt-20 xl:mt-0">
          <Image 
          width={300}
          height={300}
          src="/../public/footer__img_grid_1.png"
          className="footer__img_settings "
          id="footer__img_1"
          />
          <Image 
          width={300}
          height={300}
          src="/../public/footer__img_2.jpg"
          className="footer__img_settings "
          id="footer__img_2"
          />
          <Image 
          width={300}
          height={300}
          src="/../public/footer__img_grid_3.png"
          id="footer__img_3"
          />
        </div>
      </section>

      </div>
    </div>
  )
}

export default Reviews;