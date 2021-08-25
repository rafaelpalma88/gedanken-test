import React from 'react'
import type { AppProps } from 'next/app'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { GeneralContainer, Container } from '../styles/general'

const List: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <GeneralContainer>
      <Container>
        <h2>Listagem de Transações</h2>
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

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default List
