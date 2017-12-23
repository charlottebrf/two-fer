var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  defaultMessage = 'One for you, one for me.';
  if (who === undefined || who === null) {
    return defaultMessage;
  } else {
    defaultMessage = `One for ${who}, one for me.`;
  }
  return defaultMessage;
};

module.exports = TwoFer;
