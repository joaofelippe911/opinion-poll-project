const Database = require("./config");

let poll = [
  {
    question: "Qual o melhor jogador da atualidade?",
    answers: ["Zywoo", "S1mple", "Dev1ce", "v$m", "Lk$"],
    times: [0, 0, 0, 0, 0],
    subject: "bestActualPlayer",
  },

  {
    question: "Qual o melhor jogador de todos os tempos?",
    answers: ["Zywoo", "S1mple", "Dev1ce", "v$m", "Lk$"],
    times: [0, 0, 0, 0, 0],
    subject: "bestHistoryPlayer",
  },

  {
    question: "Qual o melhor time da atualidade?",
    answers: ["Astralis", "Heroic", "Gambit", "Fúria", "O PLANO"],
    times: [0, 0, 0, 0, 0],
    subject: "bestActualTeam",
  },

  {
    question: "Qual o melhor time de todos os tempos?",
    answers: ["Astralis", "SK", "NIP", "Virtus Pro", "O PLANO"],
    times: [0, 0, 0, 0, 0],
    subject: "bestHistoryTeam",
  },

  {
    question: "Qual o melhor mapa da atualidade?",
    answers: ["Mirage", "Vertigo", "Nuke", "Ancient", "Inferno"],
    times: [0, 0, 0, 0, 0],
    subject: "bestActualMap",
  },

  {
    question: "Qual o melhor mapa de todos os tempos?",
    answers: ["Mirage", "Cache", "Coblestone", "Train", "Inferno"],
    times: [0, 0, 0, 0, 0],
    subject: "bestHistoryMap",
  },
];

const questions = poll.map((element) => {
  return {
    ...element,
  };
});

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(`CREATE TABLE questions (
    question_id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT,
    option_one TEXT,
    option_two TEXT,
    option_three TEXT,
    option_four TEXT,
    option_five TEXT,
    one_count INT,
    two_count INT,
    three_count INT,
    four_count INT,
    five_count INT,
    subject TEXT
)`);

    questions.forEach(async (element) => {
      await db.run(`INSERT INTO questions (
        question,
        option_one,
        option_two,
        option_three,
        option_four,
        option_five,
        one_count,
        two_count,
        three_count,
        four_count,
        five_count,
        subject
    ) VALUES (
        "${element.question}",
        "${element.answers[0]}",
        "${element.answers[1]}",
        "${element.answers[2]}",
        "${element.answers[3]}",
        "${element.answers[4]}",
        0,
        0,
        0,
        0,
        0,
        "${element.subject}"
    );`);
    });

    await db.close();
  },
};

initDb.init();
