import React from 'react'

const button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppiuns font-medium text-[18px] text-primary outline-none ${styles}`}>
      Get Started
    </button>
  )
}

export default button