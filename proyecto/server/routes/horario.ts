import express from 'express';
import { HorarioModel } from '../models/horario';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const horarios = await HorarioModel.find();
      return res.json(horarios);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al obtener los horarios' });
    }
  });
  
  router.get('/:id', async (req, res) => {
    try {
      const horario = await HorarioModel.findById(req.params.id);
      if (!horario) {
        return res.status(404).json({ error: 'Horario no encontrado' });
      }
      return res.json(horario);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al obtener el horario' });
    }
  });
  
  router.post('/', async (req, res) => {
    try {
      const nuevoHorario = new HorarioModel(req.body);
      await nuevoHorario.save();
      return res.json(nuevoHorario);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al crear el horario' });
    }
  });
  
  router.put('/:id', async (req, res) => {
    try {
      const horario = await HorarioModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!horario) {
        return res.status(404).json({ error: 'Horario no encontrado' });
      }
      return res.json(horario);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al actualizar el horario' });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const horario = await HorarioModel.findByIdAndDelete(req.params.id);
      if (!horario) {
        return res.status(404).json({ error: 'Horario no encontrado' });
      }
      return res.json(horario);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al eliminar el horario' });
    }
  });

  export default router
  

