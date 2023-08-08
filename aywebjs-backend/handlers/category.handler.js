// # 15 这个文件会处理与Category相关的HTTP请求并返回响应。


// handlers/category.handler.js
const categoryModel = require('../models/category.model');

exports.createCategory = async (req, res) => {
  const { name, parentId } = req.body;

  try {
    await categoryModel.createCategory(name, parentId);
    res.status(200).send({ message: 'Category created successfully' });
  } catch (error) {
    res.status(500).send({ error });
  }
};

exports.getCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await categoryModel.getCategoryById(id);
    res.status(200).send({ category });
  } catch (error) {
    res.status(500).send({ error });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await categoryModel.getCategories();
    res.status(200).send({ categories });
  } catch (error) {
    res.status(500).send({ error });
  }
};
