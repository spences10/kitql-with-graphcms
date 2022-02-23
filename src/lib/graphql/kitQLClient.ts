import { KitQLClient } from '@kitql/client'
const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_API

export const kitQLClient = new KitQLClient({
  url: GRAPHQL_ENDPOINT,
  credentials: 'omit',
  defaultCache: 1000 * 60 * 3,
  headersContentType: 'application/json',
  logType: ['client', 'server', 'operationAndvariables'],
})
