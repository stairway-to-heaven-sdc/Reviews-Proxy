const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// app.use(morgan('dev'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });
// app.use('/:id', express.static(`${__dirname}/../public`));
app.use('/bizs/:bId', express.static(`${__dirname}/../public`));
app.use(express.static(`${__dirname}/../public`));
app.use(morgan('dev'));
app.use(cors());
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
