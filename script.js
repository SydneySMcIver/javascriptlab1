let name = "Sydney McIver";
let age = "24";
let birthday = "December 8";
let detroitGC = true;
let lifeEvents = [
  "I was born in Selma, Alabama.",
  "I grew up in River Rouge, MI.",
  "I attended University of Michigan.",
  "I am a stduent at Grand Circus."
];

if (detroitGC === true) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} and my birthday is on ${birthday}`
  );
} else {
  `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} and my birthday is on ${birthday}`;
}

{
  for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
  }
}
