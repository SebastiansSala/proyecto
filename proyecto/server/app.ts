import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import cors from 'cors';
import router from './routes/horario';

const app = express();

// Configuraciones
const PORT = process.env['PORT'] || 4200;
const MONGO_URI = 'mongodb://localhost:27017/mi-base-de-datos';

// Conexión a la base de datos
mongoose.connect(MONGO_URI);

// Configuración del middleware
app.use(json());
app.use(cors());

// Rutas
app.use('/api/horarios', router);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${4200}`);
});
