import { Router } from "express";

const router = Router();

router.get("/contacts", (req, res) => {
    return res.json({"test": "testing"})
});

export default router;