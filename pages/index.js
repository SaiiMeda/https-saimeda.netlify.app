import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sai Meda</title>
        <link rel="icon" href="/favicon-16x16.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      
      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get to know me :)
        </p>
        <a href="https://www.linkedin.com/in/saimeda/" class="fa fa-linkedin"></a>
        <a href="https://github.com/WistfulSai" class="fa fa-github"></a>
        <a href="mailto: saimeda3963@gmail.com" class="fa fa-envelope"></a>
      </main>

      <Footer />
    </div>
  )
}
