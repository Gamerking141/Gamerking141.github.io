const solarSystem = (await import('npm-solarsystem')).default;

import express from 'express';

//express is an API engine
//it lets you make your own APIs
const app = express();

//EJS is a way to dynamically build html pages
//and easily substitute data into them
app.set("view engine", "ejs");

//public folder
app.use(express.static("public"));

app.get('/', async (req, res) => {
   const url = "https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&per_page=20&orientation=horizontal&q=solar%20system";

   try {
      const response = await fetch(url);

      if (!response.ok) {
         throw new Error("Error accessing API endpoint");
      }

      const data = await response.json();
      shuffleArray(data.hits);

      let results = [];
      for (let x = 0; x < 4; x++) {
         results.push(data.hits[x]);
      }

      res.render('home.ejs', { name: "", results: results, error: false });
   }
   catch (err) {
      console.log(err);
      console.log('error');
      res.render('home.ejs', { name: "", results: "", error: true });
   }
});


app.get('/planetInfo', (req, res) => {

   let planet = req.query.planet;

   if (planet === 'Jupiter') {

      let data = solarSystem.getJupiter();
      console.log(data);

      data.image = "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter_OPAL_2024.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original";
      res.render('planet.ejs', { name: "Jupiter", planetData: data, errormessage: "" });
   }
   else if (planet === 'Mars') {
      let data = solarSystem.getMars();
      console.log(data);

      data.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpw7aS8aXJjamzi_1pff_16B2QgvDs6CWUvo5bBnW0Aw&s=10";
      res.render('planet.ejs', { name: "Mars", planetData: data, errormessage: "" });
   }
   else if (planet === "Mercury") {
      let data = solarSystem.getMercury();
      console.log(data);

      res.render('planet.ejs', { name: "Mercury", planetData: data, errormessage: "" });
   }
   else if (planet === "Venus") {
      let data = solarSystem.getVenus();
      console.log(data);

      res.render('planet.ejs', { name: "Venus", planetData: data, errormessage: "" });
   }
   else if (planet === "Earth") {
      let data = solarSystem.getEarth();
      console.log(data);

      data.image = "https://assets.science.nasa.gov/dynamicimage/assets/science/cds/kids/nasa-kids-science/earth/why-does-nasa-study-earth/earth1.jpg?w=2048&h=2048&fit=clip&crop=faces%2Cfocalpoint";
      res.render('planet.ejs', { name: "Earth", planetData: data, errormessage: "" });
   }
   else if (planet === "Saturn") {
      let data = solarSystem.getSaturn();
      console.log(data);

      res.render('planet.ejs', { name: "Saturn", planetData: data, errormessage: "" });
   }
   else if (planet === "Uranus") {
      let data = solarSystem.getUranus();
      console.log(data);

      data.image = "https://assets.science.nasa.gov/dynamicimage/assets/science/cds/general/images/2024/03/uranus-pia18182-16x9-1.jpg?w=1536&h=864&fit=crop&crop=faces%2Cfocalpoint";
      res.render('planet.ejs', { name: "Uranus", planetData: data, errormessage: "" });
   }
   else if (planet === "Neptune") {
      let data = solarSystem.getNeptune();
      console.log(data);

      res.render('planet.ejs', { name: "Neptune", planetData: data, errormessage: "" });
   }
   else if (planet === "Pluto") {
      let data = solarSystem.getPluto();
      console.log(data);

      data.image = "https://science.nasa.gov/wp-content/uploads/2023/06/color-image-of-pluto-pia20291-1.jpg";
      res.render('planet.ejs', { name: "Pluto", planetData: data, errormessage: "" });
   }
});

app.listen(3000, () => {
   console.log('server started');
});


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}