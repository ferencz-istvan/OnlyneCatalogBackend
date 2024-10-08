import { Router } from "express";
import {
  addParent,
  getParents,
  getParentById,
  updateParent,
  deleteParentById,
  getParentByPhoneNumber,
} from "../../../database/dbParents.js";

const parentsRouter = Router();

parentsRouter.use((req, res, next) => {
  console.log("Parents:");
  next();
});

parentsRouter.get("/", async (req, res) => {
  const parents = await getParents();
  res.status(200).json(parents);
});

parentsRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const parentById = await getParentById(id);
  console.log(`parentId: ${id}`);
  res.status(200).json(parentById);
});

parentsRouter.post("/byPhoneNumber", async (req, res) => {
  const phoneNumber = req.body.phone_number;
  console.log(`Searched phone number: ${phoneNumber}`);
  const parent = await getParentByPhoneNumber(phoneNumber);
  console.log("eredmény");
  console.log(parent);
  if (parent.length > 0) {
    return res.status(200).json(parent[0]);
  } else {
    return res.status(404).json({ message: "not found" });
  }
});

parentsRouter.post("/", async (req, res) => {
  const name = req.body.name;
  const phone_number = req.body.phone_number;
  const user_id = req.body.user_id;
  await addParent(name, phone_number, user_id);
  return res.status(201).json({
    name,
    phone_number,
    user_id,
  });
});

parentsRouter.put("/:id", async (req, res) => {
  const name = req.body.name;
  const phone_number = req.body.phone_number;
  const user_id = req.body.user_id;
  const id = req.params.id;
  await updateParent(id, name, phone_number, user_id);
  const updatedParent = await getParentById(id);
  return res.status(200).json(updatedParent[0]);
});

parentsRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await deleteParentById(id);
  res.send("Torolve");
  res.status(204);
});

export { parentsRouter };
