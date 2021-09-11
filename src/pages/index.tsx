import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import avatar from '../images/avatar.svg'
// import { stripe } from '../services/stripe'

import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
            {/* <span>for {product.amount} month</span> */}
          </p>
          <SubscribeButton priceId={"9.90"}/>
          {/* <SubscribeButton priceId={product.priceId}/> */}
        </section>

        {/* <img src="/images/avatar.svg" alt="Girl coding" /> */}

        <div>
        <Image
          alt={'text'}
          src={avatar}
        />
        </div>
      </main>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const price = await stripe.prices.retrieve('price_1JYDp8DDdwlroJwF4vX72tiO', {
//     expand: ['product']
//   })

//   const product = {
//     priceId: price.id,
//     amount: new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD'
//     }).format(price.unit_amount / 100)
//   }

//   return {
//     props: {
//       product
//     }
//   }
// }
