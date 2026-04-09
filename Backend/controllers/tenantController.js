const db = require("../db")

const getTenant = async (req, res) => {
  try {
    const [tenants] = await db.query(
      "SELECT * FROM tenants WHERE id = 1"
    )

    const [history] = await db.query(
      "SELECT * FROM rental_history WHERE tenant_id = 1"
    )

    const [ratings] = await db.query(
      "SELECT * FROM tenancy_ratings WHERE tenant_id = 1"
    )

    const tenant = {
      ...tenants[0],
      photo: "/photo.jpg",
      tenancyScore: {
        overall: tenants[0].tenancy_score,
        ratings: ratings
      },
      rentalHistory: history
    }

    res.json(tenant)

  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Database error!" })
  }
}

module.exports = { getTenant }