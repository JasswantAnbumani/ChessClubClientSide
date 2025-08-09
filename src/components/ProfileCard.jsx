import React from 'react'
import { motion } from 'framer-motion'

export default function ProfileCard({name, role, extra}){
  return (
    <motion.div className="profile-card" whileHover={{y:-6}} transition={{type:'spring',stiffness:260,damping:22}}>
      <div className="profile-avatar">{name.split(' ').map(n=>n[0]).slice(0,2).join('').toUpperCase()}</div>
      <div style={{fontWeight:700}}>{name}</div>
      <div style={{fontSize:13,color:'var(--muted)'}}>{role}</div>
      {extra && <div style={{marginTop:6,fontSize:13,color:'var(--muted)'}}>{extra}</div>}
    </motion.div>
  )
}
