import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main>
        <div>
          <a href="">
            <time>12 de outubro</time>
            <strong>Titulo por aq</strong>
            <p>Texto do post</p>
          </a>
          <a href="">
            <time>12 de outubro</time>
            <strong>Titulo por aq</strong>
            <p>Texto do post</p>
          </a>
          <a href="">
            <time>12 de outubro</time>
            <strong>Titulo por aq</strong>
            <p>Texto do post</p>
          </a>
        </div>
      </main>
    </>
  )
}