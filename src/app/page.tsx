import React from 'react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <h1>Welcome</h1>
      <ul>
        <li><Link href={'/spec/project1'}>Project1</Link></li>
        <li><Link href={'/spec/project2'}>Project2</Link></li>
      </ul>
    </div>
  )
}
