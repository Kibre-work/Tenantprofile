function RentalHistory({ history }) {
  return (
    <div className="card">
      <h2 style={{ color: "#621ee9", marginBottom: "16px" }}>Rental History</h2>
      {history.map((item, index) => (
        <div key={item.id} className="history-item">
          <div className="history-number">{index + 1}</div>
          <div>
            <p style={{ fontWeight: "bold", color: "#4d1ee9", margin: "0 0 4px" }}>{item.period}</p>
            <p style={{ margin: "0 0 4px" }}>{item.address}</p>
            <p style={{ margin: "0 0 4px", color: "#888" }}>🌍 {item.country}</p>
            <p style={{ margin: "0", color: "#888", fontSize: "14px" }}>⏱️ {item.duration}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RentalHistory