import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/welcome">Welcome page</Link>
        <Link href="/profile">Profile page</Link>
        <Link href="/users">Users page</Link>
      </nav>

      <h1>Home page</h1>
    </div>
  )
}
