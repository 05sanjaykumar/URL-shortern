import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { redirectUrl } from './controllers/urlController.js'; // ⬅️ Import it directly


const app = express();

// Needed because you're using ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (important!)
app.use(express.static(path.join(__dirname, '../public')));

// Routes
import urlRoutes from './routes/urlRoutes.js';
app.use('/api', urlRoutes);
app.get('/:code', redirectUrl);  // <-- Essential!


export default app;
