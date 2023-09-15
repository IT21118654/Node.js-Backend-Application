const User = require("../model/User");

//get all users
const getAllUser = async (req, res, next) => {
  let user;
  try {
    user = await User.find();
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(404).json({ message: "Nothing found" });
  }
  return res.status(200).json(user);
};

//add User
const addUser = async (req, res, next) => {
  const { fname, lname, uname, email, location } =
    req.body;
  let user;
  try {
    user = new User({
      fname,
      lname,
      uname,
      email,
      location,
    });
    await user.save();
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Unable to add" });
  }
  return res.status(201).json(user);
};

//get users by id
const getById = async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: "No user found" });
  }
  return res.status(200).json(user);
};


//update user
const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { fname, lname, uname, email, location  } = req.body;
  let user;
  try {
    user = await User.findByIdAndUpdate(id, {
        fname,
        lname,
        uname,
        email,
        location,
    });
    user = await user.save();
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: "Unable to Update by id" });
  }
  return res.status(200).json({ user });
};

//delete books
const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: "Unable to Delete by id" });
  }
  return res.status(200).json({ message: "User Successfully Deleted" });
};

exports.addUser = addUser;
exports.getAllUser = getAllUser;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
