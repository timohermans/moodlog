import DashboardLayout from 'components/DashboardLayout'
import TripleAddThought, {
  TripleColumnThought,
} from 'components/TripleAddThought'

interface Props {}

function TripleColumn({}: Props) {
  function handleNewThought(thought: TripleColumnThought): void {
    fetch('/api/triple-column/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(thought),
    })
  }

  return (
    <DashboardLayout pageTitle="Triple column">
      <TripleAddThought onNewThought={handleNewThought} />
    </DashboardLayout>
  )
}

export default TripleColumn
