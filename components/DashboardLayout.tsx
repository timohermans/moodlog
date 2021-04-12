import Head from 'next/head'
import React from 'react'
import SideNav from './SideNav'

interface Props {
  pageTitle: string
  children: React.ReactNode
}

const DashboardLayout = (props: Props) => {
  return (
    <div className="flex h-screen bg-blue-900">
      <Head>
        <title>{props.pageTitle} | Moodlog</title>
      </Head>

      <SideNav />

      <div className="p-2 w-full">
        <main className="p-4 bg-white rounded-3xl h-full w-full">
          {props.children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
