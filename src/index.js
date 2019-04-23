const bookListingTemplate = require("./handlebar-template/basic-info.handlebars");

const element = document.createElement("div");

element.innerHTML = bookListingTemplate({
  username: "Manivannan",
  mailId: "manivannan@gmail.com",
  company: "CTS"
});

document.body.appendChild(element);