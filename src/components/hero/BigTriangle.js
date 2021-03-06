import React from 'react'

export const BigTriangle = React.memo(({ className }) => (
  <svg
    className={className}
    width="274.01208"
    height="246.02499"
    viewBox="0 0 274 246"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m2.7949 7.29 271.2172 7.708-142.284 231.027z" fill="#16003c" />
    <path
      d="M0 14.822 270.9211 0l-122.624 242.036Z"
      fill="url(#a)"
      style={{
        fill: `url(#a)`,
      }}
    />
    <defs>
      <linearGradient
        id="a"
        x1="277.94901"
        y1="82.166397"
        x2="127.029"
        y2="328.63101"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(-37.5589 -120.552)"
      >
        <stop offset=".0906595" stopColor="#41DDF1" />
        <stop offset=".36173" stopColor="#7B8FCB" />
        <stop offset=".639692" stopColor="#A755AE" />
        <stop offset=".969143" stopColor="#DE0C8A" />
      </linearGradient>
    </defs>
  </svg>
))

BigTriangle.displayName = 'BigTriangle'
