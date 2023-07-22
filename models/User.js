import { DataTypes, Model } from "sequelize";
import { sequelize } from "../helpers/databaseLoader.js";

class User extends Model {}

User.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
    },

    email: {
      type: DataTypes.STRING,
    },

    password: {
      type: DataTypes.STRING,
    },

    created_at: {
      type: DataTypes.DATE,
    },

    mobile: {
      type: DataTypes.NUMBER,
    },
  },
  {
    tableName: "users",
    sequelize,
    underscored: true,
    timestamps: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  }
);



export default User;
