import { Router } from 'express';

const router = Router();

/** POST Methods */
router.route('/register').post((req,res) => {return res.json('register route')});
router.route('/register-mail').post();
router.route('/authonticate').post();
router.route('/login').post();

/** GET Methods */
router.route('/user/:username').get();
router.route('/generate-otp').get();
router.route('/verify-otp').get();
router.route('/create-reset-session').get();

/** PUT Methods */
router.route('/update-user').put();
router.route('/reset-password').put();

export default router;