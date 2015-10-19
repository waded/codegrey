var app = require("express")();

app.use("/:code", function(req, res) {
  res.set("X-Powered-By", "codegrey");
  res.status(req.params.code);
  res.send(req.params.code + "'d!");
});

app.listen(process.env.PORT || 8888);