import superjson from 'superjson'
import { createRouter } from './context'

// Import routers
import { postRouter } from './post.router'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('posts.', postRouter)

// export type definition of API
export type AppRouter = typeof appRouter
