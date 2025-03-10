import Link from 'next/link';
import React from 'react'

const Header = (props) => {
  console.log(props);
  return (
    <div className='container'>
      <h4>Blogs</h4>
        <h4>
            <Link href="/About">About Me</Link>
        </h4>
        <h4>
            <Link href="/Contact">Contact Us</Link>
        </h4>
        <h4>
            <Link href="/Socials">Socials</Link>
        </h4>
        <h4>{props.course}</h4>
    </div>
  )
}
export default Header