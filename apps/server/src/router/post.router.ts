import { z } from 'zod'
import { publicProcedure, router } from './trcp'

export const helloRouter = router({
  greeting: publicProcedure
    .input(z.object({ name: z.string() }).nullish())
    .query(({ input }) => {
      return `Hello ${input?.name ?? 'World'}`
    }),
})
