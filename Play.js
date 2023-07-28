import React from "react"
import "./pg.css"
import { Link } from "react-router-dom"
export function Play() {
  return (
    <div className="sty">Play a Specific AudioBook
    <br></br>
      <br></br>
      <br></br>
      <Link to="/" className="a">Go Back To Home Page</Link>
      </div>
  )
}

export default Play