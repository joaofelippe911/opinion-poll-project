const Questions = require("../model/Questions");
const Utils = require("../utils/questionUtils");

module.exports = {
  async showQuestions(req, res) {
    const questions = await Questions.get();

    return res.render("index", { questions: questions });
  },

  async showResults(req, res) {
    const results = await Questions.get();

    const responses = Utils.turnPercentage(results);

    return res.render("results", { results: responses });
  },

  async vote(req, res) {
    const data = req.body;
    const results = await Questions.saveVotes(data);
    return res.render("results", { results: results });
  },
};
