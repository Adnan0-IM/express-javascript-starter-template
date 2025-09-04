import express from "express"
const app = express()
const port = 3000


app.get("/", (_, res)=> {
    res.status(200).json({status: "ok", message:"api is running"})
})




// connect db
// connectdb()

// Local dev listener (ignored on Vercel)
app.listen(3000, () => console.log('Server running on http://localhost:3000'));

export default app