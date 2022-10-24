import { Button } from 'ui'
import { trpc } from '../utils/trpc'

export default function Web() {
  const t = trpc.hello
  console.log({ t })
  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  )
}
