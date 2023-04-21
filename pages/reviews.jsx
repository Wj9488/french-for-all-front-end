import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import {motion as a} from "framer-motion"

const Reviews = () => {

  const customerTestimonials = [
    {
      customer: "Barry Langridge",
      review: "In retirement one of my main aims was to achieve fluency in conversational French ( I had virtually nothing to start with). By great good fortune I discovered Valerie. At first face-to-face, then through Covid on Skype, and then through regular texts - lessons, chats, and always encouragement, to a level of fluency which has turned our regular excursions in our motorhome- to The Dordogne, Normandy, The Loire Valley - to increasingly rewarding and experiences. How well French people respond to an Englishman’s efforts. Valérie is a born teacher, and she has made me a friend. She always accompanies her students warmly but firmly; encouraging success but very clear-eyed about weaknesses- to which she will unerringly return! It is a great joy to learn with her. Not only good for the travel, good for the brain, but good fun! I could not recommend her highly enough."
    },
    {
      customer: "Penny Massey",
      review: "We have been enjoying French lessons with Valérie for over a year.  Following on from several years studying at the adult education centre we were very keen to continue to maintain and improve our French on a private basis. An introduction to Valérie by an acquaintance has proved to be just what we needed. Lessons are largely conversational and held almost entirely in French.  Topics are varied and conversation is free-flowing and wide ranging with new vocabulary introduced as required.  Idioms and colloquialisms have enhanced our speaking skills and the inevitable grammar has greatly improved our ability to express ourselves in French. The ambience is friendly and very supportive with a lovely sprinkling of humour.  Valérie is an excellent teacher; very encouraging and patient while gently insisting that mistakes are corrected. We have really managed to keep our French going and improving and really look forward to our weekly sessions."
    },
    {
      customer: "Mike Leonard",
      review: "Following my retirement in 2016 I decided to take up French language and conversation tuition. Having worked for a French company about fifteen years earlier it had been a requirement to learn business related French. I wanted to expand my conversational abilities as I enjoy visiting France for vacations and wine tasting tours. For about four years I was very happy with the tuition at the local college of further education. However, the course changed, Madame Jones was offering tuition for small classes at her home and seemed to offer a very different style of tuition which very quickly proved to be effective. To begin with we were encouraged to converse on a daily basis between lessons using text messages. This was like having mini lessons every day! Great practice! We continue to learn different ways of expressing ourselves in conversation, not usually covered by the courses at college and more appropriate in every day conversation. Our progress is reviewed regularly in class which is helpful and builds confidence. My vocabulary has increased and the ongoing reviews ensure that you don't simply learn something and leave it but continue to use it and therefore remember it. The range of conversation topics is broad and continues to expand which makes the classes fun and enjoyable. I am still enjoying classes after two years which are informal and friendly. Sometimes it's like meeting with friends and just having a chat, albeit with corrections noted as necessary. I am happy with my progress.",
    },
    {
      customer: "Nicky Huckley",
      review: "When I first contacted Valérie, I suggested that I simply needed some conversational French practice; How wrong I was! It soon became apparent that I needed a thorough grammatical basis on which to build. Over the past few years, I have enjoyed our lively discussions in French alongside continual learning and revision of vocabulary, phrases and grammer which Valérie provides with great patience, attention to detail and most essential of all, a sense of humour. Valerie teaches her students to speak French as native French-speakers do, semething which has, in my experience, been greatly appreciated and applauded by the French themselves. She encourages immersion into both language and culture, and I have found that listening to the radio and podcasts as well as discussing and reading French novels, has not only provided variety, but increased my interest, enjoyment and confidence. I have no hesitation in recommending Valerie as a tutor to anyone, whatever level they are currently at.",
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
      customer: "Victoria Redman",
      review: "This is a little note to say a really big thank you for all your help and patience during our lessons - I got a B (was expected a C). Without your help I would never have been able to achieve the grade."
    },
    {
      customer: "Rachel Wilkey",
      review: "I came to Valérie for private French lessons, because as a student, I was finding it difficult to fully understand and speak French GCSE. The lessons were useful because now I fully understand basic French and Valérie has taught me to use different techniques on how to form sentences properly. I now can speak French more fluently, and I'm more able to understand somebody speaking in French. I enjoyed the lessons not just because I was improving but Valérie was an understanding teacher who made the lessons enjoyable. "
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
      customer: "Allison Hood",
      review: "I just want to say how grateful I am for all your help and support. I can honestly say I wouldn't have got through my A level without your ongoing commitment. In fact, being left with only my teachers probably would have resulted in me dropping French altogether. You've put up with a lot and really put my confidence up - for that I thank you.",
    },
    {
      customer: "Marilyn",
      review: "Thank you for your infinite patience.",
    },
  ]

  return (
    <a.div
    initial={{
      opacity: 0,
      y: 10,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: .75,
      ease: "easeOut",
    }}
    >
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

        <div className="flex-row xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:col-auto gap-5">
              {customerTestimonials.map((testimonial) => (
                <div className="mt-5 bg-neutral-100 dark:bg-neutral-700 p-4 rounded-lg shadow-lg">
                  <div className="flex gap-5 items-center">
                    <p className="landing__gradient_reducedOpacity p-2 rounded-2xl w-5/12 text-center text-sm">
                      {testimonial.customer}
                    </p>
                  </div>
                  <p className="mt-3 text-black dark:text-neutral-200 italic">
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
                  <p className="mt-3 dark:text-neutral-200 italic">
                    <span>"</span>
                    {review.review}
                    <span>"</span>
                  </p>
                </div>
              ))}
          </div>
      </section>

      <section className="mt-20 mb-20 flex-row lg:flex justify-between items-center font-semibold">
        <div>
          <h6 className="dark:text-white text-4xl xl:text-5xl text-center lg:text-left xl:w-10/12">
            Get the support you need.
          </h6>
          <Link href="/booking">
            <div className="flex items-center justify-center lg:justify-start lg:justify-left">
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
          src="/img__arc_de_triumph.jpg"
          className="footer__img_settings "
          id="footer__img_2"
          alt="The Arc de Triomphe"
          />
        </div>
      </section>

      </div>
    </a.div>
  )
}

export default Reviews;