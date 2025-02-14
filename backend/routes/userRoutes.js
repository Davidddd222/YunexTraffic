// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Ruta para obtener roles del usuario
router.get('/roles/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ roles: user.roles });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los roles', error });
  }
});

module.exports = router;
