import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'
import Subnavbar from '../components/subnavbar'
import Aboutme from '../components/aboutme'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NomaDiix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/nomadiix.ico" />
      </Head>
      <Navbar/>
      <Subnavbar/>
      <Aboutme/>
      
    </>
  )
}
