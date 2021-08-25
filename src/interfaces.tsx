import type { AppProps } from 'next/app'
export interface ITransaction {
    estabelecimento: string
    cliente: string
    valor: number | string
    descricao: string
    id: number | string
}

export interface IExtendedAppProps extends AppProps {
  transactions: ITransaction[]
 }
