var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  let defaultMessage = who === undefined || null ? 'One for you, one for me.' : `One for ${who}, one for me.`;
  return defaultMessage;
};

module.exports = TwoFer;
