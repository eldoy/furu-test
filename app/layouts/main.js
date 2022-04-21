module.exports = function({ title, content }) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/app.css">
    ${function(){
      if (process.env.NODE_ENV == 'development') {
        return `<script src="/dev.js"></script>`
      }
      return ''
    }()}
    <script src="/app.js"></script>
    <title>${title}</title>
  </head>
  <body>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
    <main>${content}</main>
  </body>
  </html>
`
}