import React from 'react'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import { useForm } from 'react-hook-form'
import axios, { AxiosRequestConfig } from 'axios'
import { ITransaction } from '../interfaces'
import { Label, Input, Button, Form, FormGroup, InputCustomMask } from '../styles/pages/transaction'
import { GeneralContainer, Container } from '../styles/general'

const Transaction: React.FC<AppProps> = ({ Component, pageProps }) => {

    const { register, handleSubmit, reset, formState: { errors }} = useForm()
    const [formSent, setFormSent] = useState(false);

    const onSubmitForm = async (values: ITransaction[]) => {

        let config: AxiosRequestConfig = {
          method: 'post',
           url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/transacao`,
          headers: {
            'Content-Type' : 'application/json'
          },
          data: values,

        }

        try
        {
          const response = await axios(config);
            if (response.data.aceito) {
            setFormSent(true);
          }
        } catch (err) {
          console.error(err)
          setFormSent(false);
        }
      }

      const resetFormSent = () => {
        reset();
        setFormSent(false);
      }

      return (
        <GeneralContainer bgcolor="white">
          <Container>
            <h2>Cadastro de Transação</h2>

            <Form onSubmit={handleSubmit(onSubmitForm)}>

              {formSent && (

                <div style={{ background: 'green', padding: '20px', width: '100%', marginTop: '45px', marginBottom: '45px', color: 'white', fontWeight: 'bold' }}>
                Transação cadastrada com sucesso. &nbsp;
                  <span style={{ cursor: 'pointer', textDecoration: 'underline'}} onClick={resetFormSent}>Fechar</span>
                </div>

              )}

              <FormGroup>
                  <Label htmlFor="id">ID</Label>
                  <Input id="id" type="number" {...register("id")} />
              </FormGroup>
              <FormGroup>
                  <Label htmlFor="estabelecimento">Estabelecimento (CNPJ)</Label>
                  <InputCustomMask id="estabelecimento" mask="99.999.999/9999-99" {...register("estabelecimento")} />
              </FormGroup>
              <FormGroup>
                  <Label htmlFor="cliente">Cliente</Label>
                  <InputCustomMask id="cliente" mask="99.999.999/9999-99" {...register("cliente")} />
                  <br />
              </FormGroup>
              <FormGroup>
                  <Label htmlFor="valor">Valor</Label>
                  <Input id="valor" type="number" required {...register("valor")} />
                  <br />
              </FormGroup>
              <FormGroup>
                  <Label htmlFor="descricao">Descrição</Label>
                  <Input id="descricao" type="text" required {...register("descricao")} />
                  <br />
              </FormGroup>
              <Button type="submit">Cadastrar</Button>

            </Form>
          </Container>
        </GeneralContainer>

      )

}
export default Transaction


