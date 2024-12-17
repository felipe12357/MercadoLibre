import express from 'express';
import itemRoutes from './api/routes/item/itemRoutes';
import signatureMiddleware from './api/middleware/signatureMiddleware';
import cacheMiddleware from './api/middleware/cacheMiddleware';
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors({ origin: 'http://localhost:5173' }));
app.use('/api',cacheMiddleware,signatureMiddleware, itemRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


