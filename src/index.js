// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency > 10000) {
    return  { error: "You are rich, my friend! We don't have so much coins for exchange" };
  }

  if (currency <= 0) {
    return {};
  }

    let countH = 0, //50¢
        countQ = 0, //25¢
        countD = 0, //10¢
        countN = 0, //5¢
        countP = 0; //1¢

  while (currency >= 50) {
    currency -= 50;
    countH++;
  }

  while (currency >= 25) {
    currency -= 25;
    countQ++;
  }

  while (currency >= 10) {
    currency -= 10;
    countD++;
  }

  while (currency >= 5) {
    currency -= 5;
    countN++;
  }

  while (currency >= 1) {
    currency -= 1;
    countP++;
  }

  let exchange = new Object();
  if (countH) exchange.H = countH;
  if (countQ) exchange.Q = countQ;
  if (countD) exchange.D = countD;
  if (countN) exchange.N = countN;
  if (countP) exchange.P = countP;

  return exchange;
}
