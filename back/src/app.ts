import express from 'express';
import itemRoutes from './api/routes/itemRoutes';
import signatureMiddleware from './api/middleware/signatureMiddleware';
import cacheMiddleware from './api/middleware/cacheMiddleware';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api',cacheMiddleware,signatureMiddleware, itemRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
