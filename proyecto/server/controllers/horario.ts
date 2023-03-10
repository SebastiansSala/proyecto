import { Request, Response } from 'express';
import { HorarioModel } from '../models/horario';

export async function crearHorario(req: Request, res: Response) {
  const { fecha, hora, disponibles, reservados } = req.body;
  try {
    const nuevoHorario = await HorarioModel.create({ fecha, hora, disponibles, reservados });
    res.status(201).json(nuevoHorario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el horario' });
  }
}

