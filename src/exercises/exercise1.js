
export const FETCH_CATEGORIES_QUERY =
`
MATCH (c:Category)
// Edit this part to filter only top level categories 
// Top level categories don’t have an outgoing NARROWER_THAN relationship.

WITH c ORDER BY c.name LIMIT 500
RETURN COLLECT(c.name) AS categories
`;

// The solution for this exercise is available in  src/solutions/exercise1.js