import { GetServerSideProps } from 'next'
import React from 'react'
import { guardAuthenticated } from './utils/authenticationGuard'

interface Props {}

const dashboard = (props: Props) => {
  return <div>hello dashboard</div>
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  if (!(await guardAuthenticated(req, res))) return
  return { props: {} }
}

export default dashboard
