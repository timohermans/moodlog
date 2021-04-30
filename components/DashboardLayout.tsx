import Head from 'next/head'
import React from 'react'
import SideNav from 'components/SideNav'

interface Props {
  pageTitle: string
  children: React.ReactNode
}

const DashboardLayout = (props: Props) => {
  return (
    <div className="flex min-h-full bg-blue-900">
      <Head>
        <title>{props.pageTitle} | Moodlog</title>
      </Head>

      <SideNav />

      <div className="min-h-full p-2 w-full">
        <main className="min-h-full p-4 bg-gray-100 rounded-3xl w-full">
          {props.children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
