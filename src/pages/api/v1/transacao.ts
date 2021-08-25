// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ITransaction } from '../../../interfaces'

type TransactionResponse = {
  aceito: boolean
}

let transactionsArray:ITransaction[]  = []
//let transactionsArray:any = []

// export default (req: NextApiRequest, res: NextApiResponse<TransactionResponse>) => {
export default (req: NextApiRequest, res: NextApiResponse<any>) => {

  if (req.method === 'POST') {
    transactionsArray.push(req.body)
    res.status(200).json({ "aceito": true })
  } else if (req.method === 'GET') {
    // res.status(200).json(transactionsArray)
    res.status(200).json({"teste": "recebido ok"})
  } else {}
}
