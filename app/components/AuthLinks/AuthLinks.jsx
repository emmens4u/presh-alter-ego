import React from 'react'
import Link from 'next/link';

const AuthLinks = () => {
  // temp
  const status = "notauthenticated"
  return (
    <>
      {status === "notauthenticated" ? (
        <div className='cursor-pointer'>
          <Link href="/login">Login</Link>
        </div>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span>Logout</span>
        </>
      )}
    </>
  );
}

export default AuthLinks