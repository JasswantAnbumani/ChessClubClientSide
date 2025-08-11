import React from 'react'
import { motion } from 'framer-motion'

export default function AnnouncementCard({item}){
  return (
    <motion.div className="card" initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{duration:0.25}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div>
          <div style={{fontWeight:800}}>{item.title}</div>
          <div style={{fontSize:13,color:'var(--muted)'}}>{item.date}</div>
        </div>
      </div>
      <p style={{marginTop:10, color:'var(--muted)'}}>{item.content}</p>
    </motion.div>
  )
}
