import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import SideNav from '../components/SideNav'
import { guardAuthenticated } from './utils/authenticationGuard'

interface Props {}

const dashboard = (props: Props) => {
  return <DashboardLayout pageTitle="Dashboard">The dashboard</DashboardLayout>
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  if (!(await guardAuthenticated(req, res))) return
  return { props: {} }
}

export default dashboard
