function TenancyScore({ score }) {
  return (
    <div className="card">
      <h2 style={{ color: "#1e25e9", marginBottom: "16px" }}>Tenancy Score</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <span className="score-number">{score.overall}</span>
        <div>
          <p style={{ margin: "0", fontWeight: "bold" }}>Overall Tenancy Score</p>
          <p className="score-label">Based on {score.ratings.length} ratings</p>
        </div>
      </div>
      {score.ratings.map((rating, index) => (
        <div key={index} className="rating-item">
          <p className="score-label" style={{ fontSize: "14px" }}>{rating.date}</p>
          <p style={{ fontWeight: "bold" }}>{rating.address}</p>
          <p style={{ color: "#731ee9" }}>Tenant's Score: {rating.score} {rating.label}</p>
        </div>
      ))}
    </div>
  )
}

export default TenancyScore