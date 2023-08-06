const { Schema, model } = require("mongoose");



const schemaDBContactValidator = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  
},
 {  versionKey: false }
 );

// Middleware обробки помилки валідації на сервері. Додаємо статус помилки, оскільки MongoDB повертає помилку без статусу
schemaDBContactValidator.post("save", (error, data, next) => {
  error.status = 400;
  next();
});

const Contact = model("contact", schemaDBContactValidator);



module.exports = {  Contact };
