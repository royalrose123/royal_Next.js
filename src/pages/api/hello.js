export async function hello(req, res) {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

export default hello
