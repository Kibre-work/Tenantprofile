import { useState } from "react"
import { FaEnvelope, FaPhone, FaEdit } from "react-icons/fa"

function ProfileHeader({ tenant }) {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(tenant.name)
  const [email, setEmail] = useState(tenant.email)
  const [phone, setPhone] = useState(tenant.phone)

  return (
    <div className="card">
      <div className="profile-header">
        <img
          src="/photo.jpg"
          alt={name}
          className="profile-photo"
        />
        <div className="profile-info">
          {isEditing ? (
            <div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ display: "block", marginBottom: "8px", padding: "6px", width: "100%" }}
                placeholder="Name"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ display: "block", marginBottom: "8px", padding: "6px", width: "100%" }}
                placeholder="Email"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ display: "block", marginBottom: "8px", padding: "6px", width: "100%" }}
                placeholder="Phone"
              />
              <button
                onClick={() => setIsEditing(false)}
                style={{ background: "#651ee9", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}
              >
                Save
              </button>
            </div>
          ) : (
            <div>
              <h2>{name}</h2>
              <p><FaEnvelope color="#6c1ee9" /> {email}</p>
              <p><FaPhone color="#431ee9" /> {phone}</p>
              <button
                onClick={() => setIsEditing(true)}
                style={{ marginTop: "8px", background: "#791ee9", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}
              >
                <FaEdit /> allow to edit my profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader