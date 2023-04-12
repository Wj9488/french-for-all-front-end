import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

const Reviews = () => {

  const customerTestimonials = [
    {
      customer: "Victoria Redman",
      review: "This is a little note to say a really big thank you for all your help and patience during our lessons - I got a B (was expected a C). Without your help I would never have been able to achieve the grade."
    },
    {
      customer: "Rachel Wilkey",
      review: "I came to Valérie for private French lessons, because as a student, I was finding it difficult to fully understand and speak French GCSE. The lessons were useful because now I fully understand basic French and Valérie has taught me to use different techniques on how to form sentences properly. I now can speak French more fluently, and I'm more able to understand somebody speaking in French. I enjoyed the lessons not just because I was improving but Valérie was an understanding teacher who made the lessons enjoyable. "
    },
    {
      customer: "Allison Hood",
      review: "I just want to say how grateful I am for all your help and support. I can honestly say I wouldn't have got through my A level without your ongoing commitment. In fact, being left with only my teachers probably would have resulted in me dropping French altogether. You've put up with a lot and really put my confidence up - for that I thank you.",
    },
  ]

  const customerReviews = [
    {
      customer: "Allison",
      review: "Thank you for being a wonderful tutor - you helped me so much."
    },
    {
      customer: "Susie and Johnny",
      review: "Thank you so much for all the help and support you have given Johnny, and especially for the way you have encouraged his love for the French language."
    },
    {
      customer: "Sarah",
      review: "Thank you for all the help you have given me over the years. Without your help I probably wouldn't have realised that I enjoy languages so much. I really appreciate the support you gave me.",
    },
    {
      customer: "Rob",
      review: "Thank you for all the help and encouragement you have given me.",
    },
    {
      customer: "Edward, Matthew, Daniel and William",
      review: "Thank you for all your years of help with French.",
    },
    {
      customer: "Mike",
      review: "Thank you for your help and patience.",
    },
    {
      customer: "Marilyn",
      review: "Thank you for your infinite patience.",
    },
  ]

  return (
    <div>
      <Head>
        <title>Testimonials & Reviews - Friendly & experienced native speaker | French For All</title>
        <link rel="shortcut icon" href="/ffa__icon.png"/>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:locale" content="en_GB"/>
        <meta property="og:type" content="website"/>
        <meta
          property="og:description"
          content="Some of the many positive reviews that I've received over my years of teaching. I've helped countless people improve their French abilities."
        />
        <meta
          name="description"
          content="Some of the many positive reviews that I've received over my years of teaching. I've helped countless people improve their French abilities."
        />
        <meta
          property="og:image"
          content="/ffa__og_image.png"
        />
        <meta 
         name="keywords"
         content="french lessons, online french lessons, french lessons near me, french lessons london, french lessons sussex, 
         french lesson, french online lessons, french classes near me, learn french online, french for all"
        />
      </Head>
      <div className="ml-auto mr-auto app__width">

      <section className="mt-20 mb-20 xl:mt-20 small__section_height">
        <h1 className="mb-20 text-center dark:text-neutral-200 font__quicksand font-semibold text-4xl xl:text-5xl">
          Testimonials
        </h1>

        <div className="flex-row xl:grid xl:grid-cols-3 xl:grid-rows-1 xl:col-auto gap-5">
              {customerTestimonials.map((testimonial) => (
                <div className="mt-5 bg-neutral-100 dark:bg-neutral-700 p-4 rounded-lg shadow-lg">
                  <div className="flex gap-5 items-center">
                    <p className="landing__gradient_reducedOpacity p-2 rounded-2xl w-5/12 text-center text-sm">
                      {testimonial.customer}
                    </p>
                  </div>
                  <p className="mt-3 text-black dark:text-neutral-200 ">
                    <span>"</span>
                    {testimonial.review}
                    <span>"</span>
                  </p>
                </div>
              ))}
          </div>

        <h2 className="mb-20 mt-20 text-center dark:text-neutral-200 font__quicksand font-semibold text-4xl xl:text-5xl">
          Reviews
        </h2>
          <div className="flex-row xl:grid xl:grid-cols-3 xl:grid-rows-3 xl:col-auto gap-5">
              {customerReviews.map((review) => (
                <div className="mt-5 bg-neutral-100 dark:bg-neutral-700 p-4 rounded-lg shadow-lg">
                  <div className="flex gap-5 items-center">
                    <p className="dark:text-neutral-200 font-semibold">
                      {review.customer}
                    </p>
                  </div>
                  <p className="mt-3 dark:text-neutral-200">
                    <span>"</span>
                    {review.review}
                    <span>"</span>
                  </p>
                </div>
              ))}
          </div>
      </section>

      <section className="mt-20 mb-20 flex-row xl:flex justify-between items-center font-semibold">
        <div>
          <h6 className="dark:text-white text-4xl xl:text-5xl text-center xl:text-left xl:w-10/12">
            Get the support you need.
          </h6>
          <Link href="/booking">
            <div className="flex items-center justify-center xl:justify-start xl:justfiy-left">
              <button className="mt-3 xl:mt-5 font-medium text-white dark:text-black flex items-center gap-2 px-4 py-2 lg:py-2 bg-black dark:bg-white rounded-lg">
                <div className="cta__pulse_active dark:bg-green-600"></div>
                Get started
              </button>
            </div>
          </Link>
        </div>
        <div className="footer__img_grid gap-5 mt-20 xl:mt-0">
          <Image 
          width={250}
          height={250}
          src="/img__french_cafe.jpg"
          className="footer__img_settings"
          id="footer__img_1"
          
          />
          <Image 
          width={250}
          height={250}
          src="/img__eiffel_tower.jpg"
          className="footer__img_settings "
          id="footer__img_2"
          
          />
          <Image 
          width={250}
          height={250}
          src="/img__french_cafe_2.jpg"
          id="footer__img_3"
          
          />
        </div>
      </section>

      </div>
    </div>
  )
}

export default Reviews;