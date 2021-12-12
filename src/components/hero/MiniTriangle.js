import React from 'react'

export const MiniTriangle = React.memo(() => (
  <svg
    width="11"
    height="10"
    viewBox="0 0 11 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="origin-center"
  >
    <path
      d="M5.49639 9.12451L0.342366 0.197471L10.6504 0.197472L5.49639 9.12451Z"
      fill="#641C94"
    />
  </svg>
))

MiniTriangle.displayName = 'MiniTriangle'
