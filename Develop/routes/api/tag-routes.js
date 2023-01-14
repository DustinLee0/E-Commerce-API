const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    return res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    // Not found error message
    if (!tagData) {
      res.status(404).json({ message: 'No tag with matching ID in database.' });
      return;
    }

    return res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagCreate = await Tag.create({
      tag_name: req.body.name,
    });
    
    res.status(200).json({ message: 'New tag created', tagCreate});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagUpdate = await Tag.update(
      {
        tag_name: req.body.name,
      },
      {
        where: {
          id: req.params.id,
        },
      });

      if (!tagUpdate) {
        res.status(404).json({ message: 'No tag with matching ID in database.' });
        return;
      }

      res.status(200).json({message: `Tag with Id: ${req.params.id} updated`, tagUpdate});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagDelete = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagDelete) {
      res.status(404).json({ message: 'No tag with matching ID in database.' });
      return;
    }

    res.status(200).json({message: `Tag with Id: ${req.params.id} deleted`, tagDelete});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
