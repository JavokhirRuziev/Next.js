import Link from 'next/link'
import React from 'react'
import {SiBurgerking} from 'react-icons/si'

function Headers() {
  return (
    <>
    <header>
      <SiBurgerking/>
      <nav>
        <Link href='/'>
        Home
        </Link>
        <Link href='/About'>
        About us
        </Link>
        <Link href='/Reviews'>
        Reviews
        </Link>
        <Link href='/burgers/'>
        Burgers
        </Link>
        <Link href='/Burgers/Comments'>
          Comments
        </Link>
      </nav>
    </header>
    </>
    
  )
}

export default Headers