import type { AppProps } from 'next/app'
export interface ITransaction {
    estabelecimento: string
    cliente: string
    valor: number
    descricao: string
    id: number
}

export interface IExtendedAppProps extends AppProps {
  transactions: ITransaction[]
 }
