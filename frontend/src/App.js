import { useState, useEffect } from "react"
import "./App.css"
import ProfileHeader from "./components/ProfileHeader"
import TenancyScore from "./components/TenancyScore"
import RentalHistory from "./components/RentalHistory"

function App() {
  const [tenant, setTenant] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/tenant")
      .then(res => res.json())
      .then(data => {
        setTenant(data)
        setLoading(false)
      })
      .catch(err => {
        setError("Failed to load tenant data!")
        setLoading(false)
      })
  }, [])

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>
  if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>


   return (
  <div className="container">
    <h1 style={{ color: "#4d1ee9" }}>Tenant Profile</h1>
    <ProfileHeader tenant={tenant} />
    <TenancyScore score={tenant.tenancyScore} />
    <RentalHistory history={tenant.rentalHistory} />
  </div>
)
  
}

export default App