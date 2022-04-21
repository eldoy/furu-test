module.exports = async function() {
  const content = `
    <h1>About</h1>
    <p>This is about the page.</p>
  `
  return {
    title: 'About',
    description: 'This is about it',
    content
  }
}
