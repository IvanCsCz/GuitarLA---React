export function getIndexItem (id, array) {
  return array.findIndex(guitar => guitar.id === id)
}