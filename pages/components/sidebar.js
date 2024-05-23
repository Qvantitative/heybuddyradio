// pages/index.js
import Head from 'next/head'
import { FaTwitter } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white">
      <Head>
        <title>My Next.js Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a
        href="https://twitter.com/heybuddyradio"
        className="absolute top-4 right-4 text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={30} />
      </a>

      <div className="flex items-center justify-center w-full h-full">
        <img
          src="/heybuddy.png"
          alt="Hey Buddy Logo"
          className="max-w-full h-auto border-none"
        />
      </div>
    </div>
  )
}