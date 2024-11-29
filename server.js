import express from 'express';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const app = express();
const port = process.env.PORT || 3000;

// Obtener el directorio actual del módulo
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
