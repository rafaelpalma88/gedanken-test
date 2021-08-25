// import { FormEvent } from 'react'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import { useForm } from 'react-hook-form'
import axios, { AxiosRequestConfig } from 'axios'
import { ITransaction } from './interfaces'

function Transaction({ Component, pageProps }: AppProps) {

    const { register, handleSubmit, reset, formState: { errors }} = useForm()
    const [formSent, setFormSent] = useState(false);

    const onSubmitForm = async (values: ITransaction[]) => {
    // const onSubmitForm = async (values: any) => {


        let config: AxiosRequestConfig = {
          method: 'post',
          // url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/transacao`,
          url: `/api/v1/transacao`,
          headers: {
            'Content-Type' : 'application/json'
          },
          data: values,

        }
    
        try
        {
          const response = await axios(config);
          //console.log('response', response.data)
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
        <form onSubmit={handleSubmit(onSubmitForm)}>

            {formSent && (

            <div style={{ background: 'white', padding: '20px', width: '100%', marginTop: '45px', marginBottom: '45px', color: '#98669e', fontWeight: 'bold' }}>
            Mensagem enviada com sucesso. &nbsp;
            <span style={{ cursor: 'pointer', textDecoration: 'underline'}} onClick={resetFormSent}>Enviar nova mensagem.</span>

            </div>

            )}

            <div>
                <p>Formulário enviado com sucesso. Resposta:</p>
            </div>

            <div>
                <label htmlFor="id">ID</label>
                <input id="id" type="number" required {...register("id")} />
                <br />
            </div>
            <div>
                <label htmlFor="estabelecimento">Estabelecimento</label>
                <input id="estabelecimento" type="text" required {...register("estabelecimento")} />
                <br />
            </div>
            <div>
                <label htmlFor="cliente">Cliente</label>
                <input id="cliente" type="text" required {...register("cliente")} />
                <br />
            </div>
            <div>
                <label htmlFor="valor">Valor</label>
                <input id="valor" type="number" required {...register("valor")} />
                <br />
            </div>
            <div>
                <label htmlFor="descricao">Descrição</label>
                <input id="descricao" type="text" required {...register("descricao")} />
                <br /> 
            </div>
            <button type="submit">Cadastrar</button>

        </form>
      )

}
export default Transaction


