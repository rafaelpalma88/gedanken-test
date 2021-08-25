// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ITransaction } from '../../../interfaces'

type TransactionResponse = {
  aceito: boolean
}

let transactionsArray:ITransaction[]  = []

export default (req: NextApiRequest, res: NextApiResponse<TransactionResponse>) => {
  console.log("Recebemos sua transação", req.body)
  transactionsArray.push(req.body)
  console.log("transactionsArray", transactionsArray)
  res.status(200).json({ "aceito": true })
}
