import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminPage() {
  return (
    <div>
      <p>
        Register Emp
      </p>
      <Link to='/EmpRegister'><button>Register</button></Link>
    </div>
  )
}
