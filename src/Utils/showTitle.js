export const showTitle = path => {
  let lookUp = {
    '/product': 'Product',
    '/modalExample': 'Modal Example',
  }
  return lookUp[path] ? lookUp[path] : 'Social-App'
}
