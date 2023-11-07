const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true, // Menambahkan 'useUnifiedTopology' untuk menghindari peringatan
});

///////////////////////////////////////////////////////////////////
