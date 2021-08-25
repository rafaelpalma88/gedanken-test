import React from 'react'
import Link from 'next/link'
import type { AppProps } from 'next/app'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { GeneralContainer, Container } from '../styles/general'
import { ITransaction, IExtendedAppProps } from '../interfaces'

const List: React.FC<IExtendedAppProps> = ({ Component, pageProps, transactions }) => {
  return (
    <GeneralContainer>
      <Container>
        <h2>Listagem de Transações</h2>

        {transactions.length > 0 ? (

          <table>
            <tr>
              <td>estabelecimento</td>
              <td>cliente</td>
              <td>valor</td>
              <td>descricao</td>
              <td>id</td>
            </tr>
            {transactions.map((transaction: any) => (
                <tr key={transaction.id}>
                <td>{transaction.estabelecimento}</td>
                <td>{transaction.cliente}</td>
                <td>{transaction.valor}</td>
                <td><Link href={`${process.env.NEXT_PUBLIC_API_URL}/details?id=${transaction.id}`}>Ver descrição </Link></td>
                <td>{transaction.id}</td>
              </tr>
            ))}
          </table>

        ) : (
          <div><p>Não existem transições disponíveis</p></div>
        )}

      </Container>
    </GeneralContainer>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/transacao`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  const transactions = [
    { estabelecimento: '45.543.915/0001-61', cliente: '45.543.915/0001-61', valor: 345.45, descricao: 'Compra de Mercadoria', id: 1 },
    { estabelecimento: '45.543.915/0001-61', cliente: '45.543.915/0001-61', valor: 345.45, descricao: 'Compra de Mercadoria', id: 2 },
    { estabelecimento: '45.543.915/0001-61', cliente: '45.543.915/0001-61', valor: 345.45, descricao: 'Compra de Mercadoria', id: 3 },
    { estabelecimento: '45.543.915/0001-61', cliente: '45.543.915/0001-61', valor: 345.45, descricao: 'Compra de Mercadoria', id: 4 },
    { estabelecimento: '45.543.915/0001-61', cliente: '45.543.915/0001-61', valor: 345.45, descricao: 'Compra de Mercadoria', id: 5 },
    { estabelecimento: '45.543.915/0001-61', cliente: '45.543.915/0001-61', valor: 345.45, descricao: 'Compra de Mercadoria', id: 6 },

  ]

  return {
    props: { transactions },
  }
}

export default List

