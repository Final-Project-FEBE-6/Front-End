import axios from "axios"
import React, { useEffect, useState } from "react"

function Artikel() {
    useEffect => {
        const token = localStorage.getItem("token")
        axios.get("https://be-skilvul-production.up.railway.app/artikel")
        .then
    }
  return (
    <div>
        <h1>Ini artikel</h1>
    </div>
  )
}

export default Artikel