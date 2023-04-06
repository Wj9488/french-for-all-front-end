import Head from "next/head"
import { InlineWidget } from "react-calendly";

const Signup = () => {
  return (
    <div>
    <Head>
      <title>French For All | Booking</title>
      <link rel="shortcut icon" href="/ffa__icon.png"/>
      <meta
          property="og:description"
          content="Get help from a professional native speaker with 1 to 1 lessons tailored to you.
          Book a free call with me so we can establish what you're looking for."
        />
        <meta
          name="description"
          content="Get help from a local professional native speaker with 1 to 1 lessons tailored to you.
          Book a free call with me so we can establish what you're looking for."
        />
        <meta
          property="og:image"
          content="/ffa__icon.png"
        />
    </Head>
    <div className="ml-auto mr-auto app__width">

        <h1 className="mt-20 mb-20 dark:text-neutral-200 font__quicksand font-semibold text-4xl xl:text-5xl text-center">
          So, when are you free?
        </h1>
        <div className="mt-20 mb-20">
            <InlineWidget url="https://calendly.com/frenchforall/free-consultation"/>
        </div>  
      </div>
    </div>
  )
}

export default Signup;