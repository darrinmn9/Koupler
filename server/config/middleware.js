var morgan = require('morgan');
var bodyParser = require('body-parser');
var helpers = require('./helpers.js');


module.exports = function (app, express) {
  console.log("in Middleware!");
  var coupleRouter = express.Router();
  var activityRouter = express.Router();
  var profileRouter = express.Router();

  // Middleware to parse request body
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  // Render client/index.html upon receiving request
  app.use(express.static(__dirname + './../../client'));
  app.use(express.static(__dirname + './../assets'));

  app.use('/couples', coupleRouter);
  app.use('/activities', activityRouter);
  app.use('/profile', profileRouter); //CHANGE TO PROFILE

  require('../couples/coupleRoute.js')(coupleRouter);
  require('../activities/activityRoutes.js')(activityRouter);
  require('../profiles/profileRoute.js')(profileRouter);

};