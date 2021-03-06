import type { NextApiRequest, NextApiResponse } from 'next'
import { ITransaction } from '../../../interfaces'

type TransactionResponse = {
  aceito: boolean
}

let transactionsArray:ITransaction[]  = []

export default (req: NextApiRequest, res: NextApiResponse<ITransaction[] | TransactionResponse>) => {

  if (req.method === 'POST') {
    transactionsArray.push(req.body)
    res.status(200).json({ "aceito": true })

  } else if (req.method === 'GET') {

    res.status(200).json(transactionsArray)

  } else {}
}
