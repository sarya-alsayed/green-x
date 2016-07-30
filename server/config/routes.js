var plantsController = require('../plants/plantsController.js');
var messageController = require('../messages/messageController.js');
var usersController = require('../users/usersController.js');
var storeController = require('../store/storeController.js');
var commentController = require('../comments/commentController.js');
var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {
  // app.get('/:code', plantsController.navToLink);
  app.get('/', function (req, res) {
    res.render('public/index.html');
  });
app.post('/api/users/garden',usersController.getfriendGarden)
  app.get('/api/users/allusers',usersController.getAllusers);
  app.get('/api/users/message',messageController.getAll);
  //Routes to handle authentication
  app.post('/api/users/signin', usersController.signin);
  app.post('/api/users/signup', usersController.signup);
  app.get('/api/users/signedin', usersController.checkAuth);
  app.get('/api/us/:user', commentController.getAllComments);
  app.get('/api/1/:user',usersController.getInfoGarden);
  app.post('/api/1/:user', commentController.newComment);

  app.post('/api/users/addplant', usersController.addPlant);
  app.post('/api/users/signinstore',storeController.signin);
  app.post('/api/users/signupstore',storeController.signup);
  app.get('/api/users/stores',usersController.getStores);
  app.get('/api/users/store',storeController.getOneStore);
  app.get('/api/stores/:store',storeController.getInfoStore);
  app.get('/api/browseusers/:user',usersController.getInfoGarden)
  app.get('/api/2/:store',storeController.getInfoStore);
  
  app.get('/api/users/garden', usersController.getGarden);
  app.get('/api/users/friends',usersController.getFriends);
  app.post('/api/users/friendadd/',usersController.addFriend);
  app.put('/api/users/likes',usersController.updateLikes);
  app.post('/api/users/description',usersController.addDescription);
  //Remove plant from user garden
  app.put('/api/users/removeplant', usersController.removePlant);
  app.post('/api/plants/newplant', plantsController.newPlant)
  app.get('/api/plants', plantsController.allPlants);

  //TODO: delete plant
  
  // other garden
  // app.get('/api/users/frindgarden',usersController.getFrindGarden);//comment plant descr
  // app.post('/api/users/frindgarden',usersController.addFollower); //  fol




  // authentication middleware used to decode token and made available on the request
  // app.use('/api/plants', helpers.decode);

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

