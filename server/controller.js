module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}
module.exports = {
 getFortune: (req, res) => {
      const fortunes = [
          "Your future is looking bright!",
          "You will soon find happiness in unexpected places.",
          "A pleasant surprise is in store for you soon.",
          "You are about to embark on a new adventure!",
          "The love of your life is right around the corner."
      ];

      let randomIndex = Math.floor(Math.random() * fortunes.length);
      let randomFortune = fortunes[randomIndex];

      res.status(200).send(randomFortune);
  }
  };


let goals = [];

module.exports = {
    getGoals: (req, res) => {
        res.status(200).send(goals);
    },
    addGoal: (req, res) => {
        const { goal } = req.body;
        goals.push(goal);
        res.status(201).send();
    }
    };





module.exports = {
  getQuote: (req, res) => {
      const quotes = ["Believe you can and you're halfway there.", "Success is not final, failure is not fatal: it is the courage to continue that counts.", "Do not wait to strike till the iron is hot; but make it hot by striking.", "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", "Strive not to be a success, but rather to be of value."];

      // choose random quote
      let randomIndex = Math.floor(Math.random() * quotes.length);
      let randomQuote = quotes[randomIndex];

      res.status(200).send(randomQuote);
  }
}
