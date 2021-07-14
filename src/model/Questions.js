const Database = require("../db/config");
const Utils = require("../utils/questionUtils");

module.exports = {
  async get() {
    const db = await Database();

    const questions = await db.all(`SELECT * FROM questions`);

    await db.close();

    const responses = Utils.organizeQuestions(questions);

    return responses;
  },

  async saveVotes(data) {
    const db = await Database();

    const questions = await db.all(`SELECT * FROM questions`);

    const responses = Utils.organizeQuestions(questions);

    Utils.countVotes(responses, data);

    for (let i = 0; i < responses.length; i++) {
      if (responses[i].subject == "bestActualPlayer") {
        await db.run(`UPDATE questions SET 
            one_count = ${responses[i].all_counts[0]},
            two_count = ${responses[i].all_counts[1]},
            three_count = ${responses[i].all_counts[2]},
            four_count = ${responses[i].all_counts[3]},
            five_count = ${responses[i].all_counts[4]}
            WHERE subject = "bestActualPlayer";
        `);
      }

      if (responses[i].subject == "bestActualMap") {
        await db.run(`UPDATE questions SET 
            one_count = ${responses[i].all_counts[0]},
            two_count = ${responses[i].all_counts[1]},
            three_count = ${responses[i].all_counts[2]},
            four_count = ${responses[i].all_counts[3]},
            five_count = ${responses[i].all_counts[4]}
            WHERE subject = "bestActualMap";
        `);
      }

      if (responses[i].subject == "bestHistoryMap") {
        await db.run(`UPDATE questions SET 
            one_count = ${responses[i].all_counts[0]},
            two_count = ${responses[i].all_counts[1]},
            three_count = ${responses[i].all_counts[2]},
            four_count = ${responses[i].all_counts[3]},
            five_count = ${responses[i].all_counts[4]}
            WHERE subject = "bestHistoryMap";
        `);
      }

      if (responses[i].subject == "bestHistoryTeam") {
        await db.run(`UPDATE questions SET 
            one_count = ${responses[i].all_counts[0]},
            two_count = ${responses[i].all_counts[1]},
            three_count = ${responses[i].all_counts[2]},
            four_count = ${responses[i].all_counts[3]},
            five_count = ${responses[i].all_counts[4]}
            WHERE subject = "bestHistoryTeam";
        `);
      }

      if (responses[i].subject == "bestHistoryPlayer") {
        await db.run(`UPDATE questions SET 
            one_count = ${responses[i].all_counts[0]},
            two_count = ${responses[i].all_counts[1]},
            three_count = ${responses[i].all_counts[2]},
            four_count = ${responses[i].all_counts[3]},
            five_count = ${responses[i].all_counts[4]}
            WHERE subject = "bestHistoryPlayer";
        `);
      }

      if (responses[i].subject == "bestActualTeam") {
        await db.run(`UPDATE questions SET 
            one_count = ${responses[i].all_counts[0]},
            two_count = ${responses[i].all_counts[1]},
            three_count = ${responses[i].all_counts[2]},
            four_count = ${responses[i].all_counts[3]},
            five_count = ${responses[i].all_counts[4]}
            WHERE subject = "bestActualTeam";
        `);
      }
    }

    await db.close();

    const responsesInPercentage = Utils.turnPercentage(responses);

    return responsesInPercentage;
  },
};
