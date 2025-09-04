import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.status(200).json({ status: "ok", message: "api is running" });
});

// connect db
// connectdb()

// Local dev listener (ignored on Vercel)
// Only listen if not in production (Vercel handles this)
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
  );
}

export default app;
