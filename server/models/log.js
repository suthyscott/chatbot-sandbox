import { DataTypes } from "sequelize"
import { sequelize } from "../util/database.js"

const Log = sequelize.define("log", {
    logId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    sessionId: DataTypes.STRING,
    data: DataTypes.STRING,
    meta: DataTypes.STRING,

})

console.log(Log)

export  {Log}