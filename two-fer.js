var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  who = who === undefined || null ? 'you' : `${who}`;
  return `One for ${who}, one for me.`;
};

module.exports = TwoFer;
