/**
 * @desc 生成随机数
 * @param {number} min
 * @param {number} max
 * @return {number} res
 */
var getRandom = function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = getRandom;