import { Router } from 'express';
const router = Router();

/** CONTROLLERS */
import * as controller from '../controller/appController.js';

/** MIDDLEWARES */
import verifyUser from '../middleware/middleware.js';
import authenticate from '../middleware/auth.js';

/** POST Methods */
router.route('/register').post(controller.register);
// router.route('/register-mail').post();
router.route('/authonticate').post((req, res) => res.end());
router.route('/login').post(verifyUser, controller.login);

/** GET Methods */
router.route('/user/:username').get(controller.getUser);
router.route('/generate-otp').get(controller.generateOTP);
router.route('/verify-otp').get(controller.verifyOTP);
router.route('/create-reset-session').get(controller.createResetSession);

/** PUT Methods */
router.route('/update-user').put(authenticate, controller.updateUser);
router.route('/reset-password').put(controller.resetPassword);

export default router;