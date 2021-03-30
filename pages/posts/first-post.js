import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>My names is Jiwon Park</h1>
	  <p>My hobby: coding</p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}