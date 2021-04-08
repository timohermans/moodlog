import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import Head from 'next/head'
import HomeNav from '../components/HomeNav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeNav />

      <main className={styles.main}>
        <section className="mx-10 sm:mx-32 my-6">
          <h1
            data-cy="title"
            className="text-4xl sm:text-6xl text-blue-400 font-bold"
          >
            Feeling good
          </h1>
          <p data-cy="sub-title" className="text-2xl sm:text-4xl font-semibold">
            The new <span className="text-blue-700">moodlog</span> utilities
          </p>
          <p
            data-cy="description"
            className="mt-4 sm:w-3/4 text-gray-600 text-xl"
          >
            All the tools and tricks mentioned in the book can be used here for{' '}
            <span className="">free</span>. Let this tool help you recover even
            more quickly from all the anxieties or fears you have.
          </p>
        </section>
      </main>
    </div>
  )
}
