import React from 'react'
import type { AppProps } from 'next/app'
import { Container } from '../styles/pages/transaction'
import styled from 'styled-components'

const ContainerTeste = styled.div<{bgcolor?: string}>`
  //min-height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgcolor ? props.bgcolor : 'white'};
`
const List: React.FC<AppProps> = ({ Component, pageProps }) => {

  console.log('pageProps teste aqui', pageProps)
  return (
    <ContainerTeste>
      <Container>
        <h2>Listagem de Transações</h2>
      </Container>

    </ContainerTeste>
  )
}
export default List

export async function getServerSideProps(context) {
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

  return {
    props: { data }, // will be passed to the page component as props
  }
}
