import { useQuery } from '@tanstack/react-query'
import { getSummary } from './components/http/get-summary'
import { Dialog } from './components/ui/dialog'
import { Summary } from './components/summary'
import { EmptyGoals } from './components/empty-goals'
import { CreateGoal } from './components/creat-goal'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}
      <CreateGoal />
    </Dialog>
  )
}
