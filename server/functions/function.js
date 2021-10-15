exports.home = (req, res) => res.json({ path: '/api/' }).status(200);
exports.test = (req, res) => res.json({ path: '/api/test' }).status(200);