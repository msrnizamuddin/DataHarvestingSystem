import express from "express";

const router = express.Router();
try {
  router.use("/api", router);
  console.log("✅ Apis Loaded");
} catch (err) {
  console.log("❌ Failed to load", err);
}
export default router;
