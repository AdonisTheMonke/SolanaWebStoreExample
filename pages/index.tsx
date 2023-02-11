import Head from 'next/head'
import Navigation from '../components/header'
import ConnectHeader from '../components/ConnectHeader'

export default function Home() {
  return (
    <>
      <Head>
        <title>Volitaire 2.0</title>
      </Head>

      <div className='wrapper'>
        <ConnectHeader/>
        <Navigation></Navigation>
      </div>
    </>
  )
}
