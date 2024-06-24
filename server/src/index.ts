import express, { Application, Request, Response, NextFunction } from 'express';
import connectDB from './db';

const app: Application = express();
const PORT: string | number = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Server Error');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
