module.exports = async function() {
  const content = `
    <h1>Welcome</h1>
    <p>What is going on in your life?</p>
  `
  return {
    title: 'Home page',
    description: 'This is the home page',
    content
  }
}