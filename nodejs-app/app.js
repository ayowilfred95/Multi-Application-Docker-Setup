const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Book Review: The Name of the Wind",
    },
    {
      id: "2",
      title: "Game Review: Pokemon Brillian Diamond",
    },
    {
      id: "3",
      title: "Show Review: Alice in Borderland",
    },
    {
      id: "4",
      title: "Story of my Devops Journey",
    },
    {
      id: "5",
      title: "Devops involves people,principle and tools",
    },
    {
      id: "6",
      title: "Nupat Technologies comes with bulky learning environment and amazing facilitators",
    },
  ]);
});

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});
