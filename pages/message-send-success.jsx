import Link from "next/link"
import Head from "next/head"

const BookingSuccess = () => {
  return (
    <div>
        <Head>
            <title>French For All</title>
            <link rel="shortcut icon" href="/ffa__icon.png"/>
        </Head>
        <section className="header__height flex items-center justify-center">
            <div className="flex-row">
                <p className="text-green-500 text-xl text-center font-semibold mb-3">
                    Your message was sent!
                    <br />
                    <br />
                    <span className="font-normal dark:text-neutral-200 text-black">
                        I usually respond within 24 hours.
                    </span>
                </p>
                <Link href="/">
                    <div className="flex items-center justify-center">
                        <button className="bg-neutral-200 dark:bg-neutral-700 dark:text-white py-2 px-4 hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded xl:mt-5 mt-3 font-medium">
                            Back to homepage
                        </button>
                    </div>
                </Link>
            </div>
        </section>
    </div>
  )
}

export default BookingSuccess; 