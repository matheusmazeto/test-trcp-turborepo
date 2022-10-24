import * as trpc from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import { prisma } from '../db/prisma'

export const createContext = (
  opts?: trpcExpress.CreateExpressContextOptions,
) => {
  const req = opts?.req
  const res = opts?.res

  return {
    prisma,
    req,
    res,
  }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
