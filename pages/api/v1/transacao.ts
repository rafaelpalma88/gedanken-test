// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type TransactionResponse = {
  aceito: boolean
}

export default (req: NextApiRequest, res: NextApiResponse<TransactionResponse>) => {
  console.log("Recebemos sua transação", req)
  res.status(200).json({ "aceito": true })
}
