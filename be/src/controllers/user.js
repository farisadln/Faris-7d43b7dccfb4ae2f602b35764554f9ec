exports.allAccess = (req, res) => {
    res.status(200).send("Connected!");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };