import Head from 'next/head'
import Navigation from '../components/header'
import ConnectHeader from '../components/ConnectHeader'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Volitaire 2.0</title>
      </Head>

        <Navigation></Navigation>

    </>
  )
}
