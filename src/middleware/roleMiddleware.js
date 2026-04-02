module.exports = (allowedRoles) => {
  return (req, res, next) => {
    const role = req.headers.role; // get role from request header

    if (!role) {
      return res.status(400).json({ message: "Role not provided" });
    }

    if (!allowedRoles.includes(role)) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};