
export const FETCH_REVIEWS_QUERY = 
`
// Update to match also the User by the $userId parameter
MATCH (b:Business {id: $businessId})

MATCH (b)<-[:REVIEWS]-(r:Review)<-[:WROTE]-(u:User)
// Use the optional match to search for reviewers who the user TRUSTS
// Hint: You will use the TRUST relationships

WITH r{.text, stars: toFloat(r.stars), name: u.name, date: toString(r.date)} AS review

// Order by TRUST score DESC
ORDER BY r.date DESC LIMIT 1000

RETURN COLLECT(review) AS reviews
`

// The solution for this exercise is available in  src/solutions/exercise3.js