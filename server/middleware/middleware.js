import UserModal from '../model/user.modal.js';

async function verifyUser(req, res, next) {
  try {
    const { username } = req.method == "GET" ? req.query : req.body;

    if (!username) {
      return res.status(400).send({
        error: "Missing username in request body"
      });
    }

    const user = await UserModal.findOne({ username });

    if (!user) {
      return res.status(404).send({
        error: "User not found"
      });
    }

    req.user = user;
    next();

  } catch (error) {
    console.error(error);
    return res.status(500).send({
      error: "Error verifying user"
    });
  }
}

export default verifyUser;
