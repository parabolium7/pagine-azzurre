import express from 'express';
import expressAsyncHandler from 'express-async-handler';

const passwordRecoveryRouter = express.Router();

passwordRecoveryRouter.get(
  '/password-recovery',
  expressAsyncHandler(async (req, res) => {
    const email = await User.find({ email: req.body.email });
    if(email) {
      res.send("Controlla la tua casella email per impostare una nuova password")
    } else {
      res.send("Non abbiamo trovato questo email. Controlla la sua esattezza.");
    }
  })
);

export default passwordRecoveryRouter;
