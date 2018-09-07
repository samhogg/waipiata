import React from 'react'

const d = new Date()

const Footer = () => (
  <div className="container">
    <footer>
      <p>© {d.getFullYear()} Waipiata Consulting, all rights reserved.</p>
    </footer>
  </div>
)

export default Footer
