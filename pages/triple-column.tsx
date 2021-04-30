import DashboardLayout from 'components/DashboardLayout'
import TripleAddThought from 'components/TripleAddThought'
import React from 'react'
import TripleThoughtList from '../components/TripleThoughtList'
import useFetch from '../lib/hooks/use-fetch'
import { TripleColumnThoughtInput } from '../lib/triple-column-thought/create-and-update-type'

interface Props {}

function TripleColumn({}: Props) {
  const { data: thoughts, isLoading, fetchData } = useFetch(
    '/api/triple-column'
  )

  async function handleNewThought(thought: TripleColumnThoughtInput) {
    await fetch('/api/triple-column/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(thought),
    })

    // TODO: refetch data or add it to the list
    await fetchData()
  }

  return (
    <DashboardLayout pageTitle="Triple column">
      <TripleAddThought onNewThought={handleNewThought} />
      {isLoading && <div>Loading thoughts...</div>}
      {!isLoading && <TripleThoughtList thoughts={thoughts} />}
    </DashboardLayout>
  )
}

export default TripleColumn
