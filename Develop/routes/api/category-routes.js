const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    return res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    // Not found error message
    if (!categoryData) {
      res.status(404).json({ message: 'No category with matching ID in database.' });
      return;
    }

    return res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const catCreate = await Category.create({
      category_name: req.body.name,
    });
    
    res.status(200).json({ message: 'New category created', catCreate});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const catUpdate = await Category.update(
      {
        category_name: req.body.name,
      },
      {
        where: {
          id: req.params.id,
        },
      });

      if (!catUpdate) {
        res.status(404).json({ message: 'No category with matching ID in database.' });
        return;
      }

      res.status(200).json({message: `Category with Id: ${req.params.id} updated`, catUpdate});
  } catch (err) {
    res.status(500).json(err);
  }
  });

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const catDelete = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!catDelete) {
      res.status(404).json({ message: 'No category with matching ID in database.' });
      return;
    }

    res.status(200).json({message: `Category with Id: ${req.params.id} deleted`, catDelete});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
