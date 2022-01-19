const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let surveyApp = () => {

  let answers = [];

  rl.question(`What's your name? Nicknames are also acceptable :)`, (answer) => {
    answer = `Your name is: ${answer}. `;
    console.log(answer);
    answers.push(answer);

    rl.question(`What's an activity you like doing? `, (answer) => {
      answer = `An activity you like is: ${answer}. `;
      console.log(answer);
      answers.push(answer);

      rl.question(`What do you listen to while doing that? `, (answer) => {
        answer = `You enjoy listening to: ${answer}. `
        console.log(answer);
        answers.push(answer);

        rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer) => {
          answer = `Your favourite meal is: ${answer}. `;
          console.log(answer);
          answers.push(answer);

          rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
            answer = `Your favourite thing to eat is: ${answer}. `;
            console.log(answer);
            answers.push(answer);

            rl.question(`Which sport is your absolute favourite? `, (answer) => {
              answer = `Your favourite sport is: ${answer}. `;
              console.log(answer);
              answers.push(answer);

              rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer) => {
                answer = `Your superpower is: ${answer}. `
                answers.push(answer);
                const profile = answers.join(" ");
                console.log(profile);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
}
