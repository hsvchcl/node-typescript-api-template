import express from 'express';
const routes = express.Router();

import { scrapper } from '../components';

// Get Routes
routes.get('/get_plate_info/:plate', scrapper);

// Post Routes
// routes.post("/post_user_info", () => {});

export default routes;
