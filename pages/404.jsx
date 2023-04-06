import Link from "next/link"
import Head from "next/head"

const NotFound = () => {
  return (
    <div>
        <Head>
            <title>French For All | 404 Not Found!</title>
            <link rel="shortcut icon" href="/ffa__icon.png"/>
        </Head>
        <section className="header__height flex items-center justify-center">
            <div className="flex-row">
                <p className="dark:text-neutral-200 text-xl font-semibold mb-3">
                    Looks like you've landed on a page that doesn't exist!
                </p>
                <Link href="/">
                    <div className="flex items-center justify-center">
                        <button className="bg-neutral-200 dark:bg-neutral-700 dark:text-white py-2 px-4 hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded xl:mt-5 mt-3 font-medium">
                            Take me home
                        </button>
                    </div>
                </Link>
            </div>
        </section>
    </div>
  )
}

export default NotFound; 