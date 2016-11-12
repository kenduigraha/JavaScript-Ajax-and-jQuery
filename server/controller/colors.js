'use strict'

let colors = (req, res) => {
  console.log(`adfadsf`);
  var rand = Math.floor(Math.random()*9)+1
  var colors = ['6984c9', '0EFF6A', 'ea7e3f', '1e90ff', 'ff6a6a', 'ffff66', 'ff7256', '00fa9a', '3a3b33']
  res.status(200).json(colors[rand])
}

module.exports = {
  colors : colors
}
