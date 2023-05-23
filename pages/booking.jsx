import Head from "next/head"
import { InlineWidget } from "react-calendly";
import {motion as a} from "framer-motion"
import Transition from "@/components/Transition";

const Signup = () => {
  return (
    <Transition>
      <Head>
        <title>Book your free call - Friendly & experienced native speaker | French For All</title>
        <link rel="shortcut icon" href="/ffa__icon.png"/>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:locale" content="en_GB"/>
        <meta property="og:type" content="website"/>
        <meta
          property="og:description"
          content="Book your free no-commitment call with me."
        />
        <meta
          name="description"
          content="Book your free no-commitment call with me."
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

        <h1 className="mt-20 mb-20 dark:text-neutral-200 font__quicksand font-semibold text-4xl xl:text-5xl text-center">
          So, when are you free?
        </h1>
        <div className="mb-20">
            <InlineWidget url="https://calendly.com/frenchforall/introductory-phone-call"/>
        </div>  
      </div>
    </Transition>
  )
}

export default Signup;