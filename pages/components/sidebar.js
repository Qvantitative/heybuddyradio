// pages/index.js
import Head from 'next/head'
import { FaTwitter } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white">
      <Head>
        <title>Hey Buddy Radio</title>
        <link rel="icon" href="/heybuddy.png" />
      </Head>

      <a
        href="https://twitter.com/heybuddyradio"
        className="absolute top-4 right-4 text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={30} />
      </a>

      <div className="flex items-center justify-center">
        <img
          src="/heybuddy.png"
          alt="Hey Buddy Logo"
          className="max-w-full h-auto border-4 border-customBlue"
        />
      </div>
    </div>
  )
}