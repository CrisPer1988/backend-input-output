import { Op } from "sequelize";
import Cash from "../models/cash.model.js";

export const createCashIn = async (req, res) => {
  try {
    const { cash, type, description } = req.body;

    console.log("cash", cash);
    console.log("type", type);
    console.log("description", description);

    const createCashIn = await Cash.create({
      cash,
      type,
      description,
    });

    return res.status(201).json({
      createCashIn,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCash = async (req, res) => {
  try {
    const { from, to } = req.body;

    let whereCondition = {};

    if (!to) {
      whereCondition.createdAt = {
        [Op.gte]: `${from} 00:00:00`,
        [Op.lt]: `${from} 23:59:59`,
      };
    } else {
      whereCondition.createdAt = {
        [Op.between]: [`${from} 00:00:00`, `${to} 23:59:59`],
      };
    }

    // if (from) {
    //   whereCondition.createdAt = {
    //     [Op.gte]: `${from} 00:00:00`,
    //     [Op.lt]: `${from} 23:59:59`,
    //   };
    // }

    // if (to) {
    //   whereCondition.createdAt = {
    //     [Op.between]: [`${from} 00:00:00`, `${to} 23:59:59`],
    //   };
    // }

    const getCash = await Cash.findAll({ where: whereCondition });

    return res.status(200).json({ getCash });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al obtener cash" });
  }
};
