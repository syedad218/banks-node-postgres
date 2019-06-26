import Branches from "../controllers/branch";
import checkAuth from '../middleware/check-auth';

export default (app) => {
  app.get("/branch/:ifsc", checkAuth, Branches.fetch); // API route for branch details
  app.get("/branch/:city/:bank_name", checkAuth, Branches.fetchAll);
};
