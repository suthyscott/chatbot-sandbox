import { Log } from "../models/log.js";
import { sequelize } from "./database.js";

await sequelize.sync({force: true})