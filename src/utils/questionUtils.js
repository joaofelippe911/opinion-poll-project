module.exports = {
  countVotes(responses, data) {
    for (let x = 0; x < responses.length; x++) {
      if (responses[x].subject == "bestActualPlayer") {
        for (let i = 0; i < responses[x].all_answers.length; i++) {
          if (responses[x].all_answers[i] == data.bestActualPlayer) {
            responses[x].all_counts[i] += 1;
          }
        }
      }

      if (responses[x].subject == "bestActualMap") {
        for (let i = 0; i < responses[x].all_answers.length; i++) {
          if (responses[x].all_answers[i] == data.bestActualMap) {
            responses[x].all_counts[i] += 1;
          }
        }
      }

      if (responses[x].subject == "bestHistoryMap") {
        for (let i = 0; i < responses[x].all_answers.length; i++) {
          if (responses[x].all_answers[i] == data.bestHistoryMap) {
            responses[x].all_counts[i] += 1;
          }
        }
      }

      if (responses[x].subject == "bestHistoryTeam") {
        for (let i = 0; i < responses[x].all_answers.length; i++) {
          if (responses[x].all_answers[i] == data.bestHistoryTeam) {
            responses[x].all_counts[i] += 1;
          }
        }
      }

      if (responses[x].subject == "bestHistoryPlayer") {
        for (let i = 0; i < responses[x].all_answers.length; i++) {
          if (responses[x].all_answers[i] == data.bestHistoryPlayer) {
            responses[x].all_counts[i] += 1;
          }
        }
      }

      if (responses[x].subject == "bestActualTeam") {
        for (let i = 0; i < responses[x].all_answers.length; i++) {
          if (responses[x].all_answers[i] == data.bestActualTeam) {
            responses[x].all_counts[i] += 1;
          }
        }
      }
    }
  },

  turnPercentage(results) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const noAnswers = results[0].all_counts.reduce(reducer);

    if (noAnswers == 0) {
      return results;
    }

    const resultsInPercentage = results.map((element) => ({
      ...element,
      all_counts: [
        (element.all_counts[0] /
          (element.all_counts[0] +
            element.all_counts[1] +
            element.all_counts[2] +
            element.all_counts[3] +
            element.all_counts[4])) *
          100,
        (element.all_counts[1] /
          (element.all_counts[0] +
            element.all_counts[1] +
            element.all_counts[2] +
            element.all_counts[3] +
            element.all_counts[4])) *
          100,
        (element.all_counts[2] /
          (element.all_counts[0] +
            element.all_counts[1] +
            element.all_counts[2] +
            element.all_counts[3] +
            element.all_counts[4])) *
          100,
        (element.all_counts[3] /
          (element.all_counts[0] +
            element.all_counts[1] +
            element.all_counts[2] +
            element.all_counts[3] +
            element.all_counts[4])) *
          100,
        (element.all_counts[4] /
          (element.all_counts[0] +
            element.all_counts[1] +
            element.all_counts[2] +
            element.all_counts[3] +
            element.all_counts[4])) *
          100,
      ],
    }));

    return resultsInPercentage;
  },

  organizeQuestions(questions) {
    const organizedQuestions = questions.map((element) => ({
      id: element.question_id,
      question_text: element.question,
      subject: element.subject,
      all_answers: [
        element.option_one,
        element.option_two,
        element.option_three,
        element.option_four,
        element.option_five,
      ],
      all_counts: [
        element.one_count,
        element.two_count,
        element.three_count,
        element.four_count,
        element.five_count,
      ],
    }));

    return organizedQuestions;
  },
};
