import { helloRouter } from './post.router'
import { router } from './trcp'

export const appRouter = router({
  hello: helloRouter,
})

export type AppRouter = typeof appRouter
