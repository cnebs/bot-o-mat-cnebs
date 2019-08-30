const getFiveRandom = tasks => {
  const shuffled = tasks.sort(() => 0.5 - Math.random());
  let randomFive = shuffled.slice(0, 5);
  return randomFive;
}

export default getFiveRandom; 