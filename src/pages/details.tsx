import { GeneralContainer, Container } from '../styles/general'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { IExtendedAppProps } from '../interfaces'

const Details: React.FC<IExtendedAppProps> = ({ Component, pageProps, transactions }) => {

  const router = useRouter()
  const { id } = router.query


  const selected = transactions.filter(item => item.id === Number(id))[0]

  return (
    <GeneralContainer>
      <Container>
        <h2>Detalhe da Transação id: {id}</h2>

        { selected?.descricao }

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

export default Details
