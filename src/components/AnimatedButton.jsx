import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedButton({children, onClick, style, small}){
  return (
    <motion.button
      onClick={onClick}
      className="card"
      style={{
        display:'inline-block',
        cursor:'pointer',
        padding: small ? '8px 12px' : '12px 18px',
        borderRadius:10,
        background:'transparent',
        border:'1px solid var(--glass-border)',
        color:'var(--accent)',
        fontWeight:700,
        ...style
      }}
      whileHover={{ scale:1.03, y:-3 }}
      whileTap={{ scale:0.98, y:0 }}
      transition={{type:'spring', stiffness:260, damping:20}}
    >
      {children}
    </motion.button>
  )
}
