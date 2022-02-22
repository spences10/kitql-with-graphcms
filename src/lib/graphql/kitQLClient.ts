import { KitQLClient } from '@kitql/client'

export const kitQLClient = new KitQLClient({
  url: 'https://api-eu-central-1.graphcms.com/v2/cktod9uc411qp01yz80gwh9bo/master',
  credentials: 'same-origin',
  defaultCache: 1000 * 60 * 3,
  headersContentType: 'application/json',
  logType: ['client', 'server', 'operationAndvariables'],
})
