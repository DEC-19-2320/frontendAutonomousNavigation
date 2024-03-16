import React from 'react'
import Link from 'next/link';

const HomeNavbar = () => {
  return (
    <div className="navbar bg-neutral-content text-black">
      <div className="flex-1">
        <a className="btn rounded btn-ghost text-xl">AutoShip</a>
      </div>
      <div className="flex-none">
        <div className="flex-none">
          <div tabIndex={1} role="button" className="btn btn-ghost btn-square">
            <button>
              <Link href="/docs">Docs</Link>
            </button>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
            <div className="indicator">
              <button>
                <Link href="/user/login">Login</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeNavbar;