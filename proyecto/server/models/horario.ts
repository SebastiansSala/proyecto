import mongoose from 'mongoose';

export interface Horario {
  _id?: mongoose.Types.ObjectId;
  fecha: Date;
  hora: string;
  disponibles: number;
  reservados: number;
}

const horarioSchema = new mongoose.Schema<Horario>({
  fecha: { type: Date, required: true },
  hora: { type: String, required: true },
  disponibles: { type: Number, required: true },
  reservados: { type: Number, required: true },
});

export const HorarioModel = mongoose.model<Horario>('Horario', horarioSchema);
