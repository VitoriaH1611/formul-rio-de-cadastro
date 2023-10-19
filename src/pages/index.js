import Head from 'next/head'
import { useState } from 'react'




export default function Home() {

  const [data,setData] = useState({
    nameUser:'',
    emailUser:'',
    phoneUser:''
})

  const valorInput = (e)=> setData({...data,[e.target.name]: e.target.value})


  const addUser = (e)=>{
  e.preventDefault()

  console.log('Nome:' + data.nameUser)
  console.log('Email:' + data.emailUser)
  console.log('Telefone:' + data.phoneUser)


  }
  return (
    <>
      <Head>
        <title>Formulário de cadastro</title>
        <meta name="description" content="página de cadastro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
       <h1>Cadastrar</h1>

       <form onSubmit={addUser}>
      <label>Nome: </label> 

      <input type = 'text' name='nameUser' placeholder='Nome do cliente' onChange={valorInput}>
      </input><br/><br/>

      <label>Email: </label> 

      <input type = 'email' name='emailUser' placeholder='Email do cliente' onChange={valorInput}>
      </input><br/><br/>

      <label>Telefone: </label> 

     <input type = 'tel' maxLength="12" name='phoneUser' placeholder='Telefone do cliente' onChange={valorInput}>
     </input><br/><br/>
       <button type='submit'>cadastrar</button>

       </form>

      </main>
    </>
  )
}
