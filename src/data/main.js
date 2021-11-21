const fs = require('fs')

const rawdata = fs.readFileSync('./showerMonthAverage.json', 'utf8');

const data = JSON.parse(rawdata);
const vals = JSON.parse(data);

fs.writeFileSync('showerMonthWater.js', JSON.stringify(vals));
