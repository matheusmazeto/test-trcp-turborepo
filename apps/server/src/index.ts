import { createServer } from './server'
export { AppRouter } from './router'

async function main() {
  const { app } = createServer()
  const PORT = 4000
  app.listen(PORT, () => {
    console.info(`✨ tRPC Server listening on http://localhost:${PORT}`)
  })
}

main()
