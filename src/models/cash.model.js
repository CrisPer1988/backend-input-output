import { DataTypes } from "sequelize";
import { db } from "../database/config.js";

const Cash = db.define(
  "cash",
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("input", "output"),
      defaultValue: "input",
      allowNull: false,
    },
    cash: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return new Date(this.getDataValue("createdAt")).toLocaleString(
          "es-AR",
          {
            timeZone: "America/Argentina/Buenos_Aires",
          }
        );
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      get() {
        return new Date(this.getDataValue("updatedAt")).toLocaleString(
          "es-AR",
          {
            timeZone: "America/Argentina/Buenos_Aires",
          }
        );
      },
    },
  },
  {
    timestamps: true,
  }
);

export default Cash;
