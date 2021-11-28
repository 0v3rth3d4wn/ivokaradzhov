import React from 'react'
import { motion } from 'framer-motion'

const Logo = () => (
  <motion.svg
    width="52"
    height="32"
    viewBox="0 0 52 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M30.7041 28.0632L34.8381 26.7912V23.6545L30.7041 24.9265V28.0632Z"
      fill="#F707CF"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
    />
    <motion.path
      d="M34.0576 14.8082C33.1614 8.63611 32.323 3.75045 28.6371 1.36544C26.0787 -0.296836 22.6096 -0.441381 17.7094 0.931805C4.55576 4.61773 -0.546712 15.7333 0.0459263 27.3837C0.132654 28.9448 0.219381 30 0.219381 30L48.8302 15.0395V10.3562L34.0576 14.8082ZM4.49794 23.8857C4.49794 22.7582 4.6714 21.5585 4.88822 20.3877L9.71605 18.6676V15.5309L5.84222 16.7162C5.9434 16.4416 6.03013 16.1236 6.13131 15.8779C8.02486 10.9633 12.7804 7.0461 18.9381 5.326C19.9499 5.03691 20.8895 4.83455 21.7278 4.70446C23.7226 4.41536 25.1969 4.57436 26.1365 5.18146C28.2179 6.54019 28.8539 10.7609 29.62 16.138L4.49794 23.8857Z"
      fill="#F707CF"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
    />
  </motion.svg>
)

export default Logo
