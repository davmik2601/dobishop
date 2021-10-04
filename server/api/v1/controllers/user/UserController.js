

class UserController {
  constructor() {  }

  my_account = async (req, res) => {
    res.json({success: true, user: {a:1}})
  }
}

export default new UserController;