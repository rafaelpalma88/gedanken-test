import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { GeneralContainer, Container } from '../styles/general'

const List: React.FC<AppProps> = ({ Component, pageProps }) => {

  const [transactions, setTransactions] = useState<any>([])

  useEffect(() => {
    console.log('pageProps dentro useEffect', transactions)
    setTransactions(pageProps)
  }, [pageProps])

  console.log('pageProps teste aqui', pageProps)
  return (
    <GeneralContainer>
      <Container>
        <h2>Listagem de Transações</h2>
      </Container>
    </GeneralContainer>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log('caiu aqui')
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/transacao`)
  console.log('res xxx aqui', res)
  const data = await res.json()
  console.log('data xxx aqui', data)

  if (!data) {
    return {
      notFound: true,
    }
  }

  console.log('DATA XXXX', data)

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default List
