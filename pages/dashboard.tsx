import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { guardAuthenticated } from './utils/authenticationGuard'

interface Props {}

const dashboard = (props: Props) => {
  return (
    <div className="flex h-screen bg-blue-900">
      <Head>
        <title>Dashboard | Moodlog</title>
      </Head>

      <div className="w-1/12 "></div>

      <div className="p-2 w-full">
        <main className="bg-white rounded-3xl h-full w-full"></main>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  if (!(await guardAuthenticated(req, res))) return
  return { props: {} }
}

export default dashboard
