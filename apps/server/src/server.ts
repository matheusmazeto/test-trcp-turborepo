import * as trpcExpress from '@trpc/server/adapters/express'
import cors from 'cors'
import express, { Application } from 'express'
import morgan from 'morgan'
import { appRouter } from './router'
import { createContext } from './router/context'

export const createServer = () => {
  const app: Application = express()
  // Middleware
  app.use(cors())
  app.use(express.json())
  app.use(morgan('tiny'))
  // TRPC
  app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    }),
  )
  return { app }
}
