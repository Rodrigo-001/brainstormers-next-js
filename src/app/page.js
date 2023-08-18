import Image from 'next/image'
import Link from 'next/link'
import Button from './components/Button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/sobre">Sobre</Link>
      <Button name="click me"/>
    </main>
  )
}
