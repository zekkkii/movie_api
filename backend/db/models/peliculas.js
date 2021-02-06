import Sequelize,{DataTypes} from "sequelize"
import {db} from "../db"

export const movies =db.define(
    "movies",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.TEXT,
    },
    primary_director:DataTypes.TEXT,
    year_released:DataTypes.INTEGER,
    genre:DataTypes.TEXT
}, {
    timestamps: false
  }
)

movies.sync()