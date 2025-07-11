import dbClient
import redisClient


app.route('/files', methods=['POST'], (res, res)) 

function files() (req, res, next) {
  const {
    X-Token,
    name
  } = req.body.params;
  if (X-Token) {
    const userID = redisClient.get(X-Token);
    if (!userID) {
      res.send(
	'message': 'Unauthed'
        status: 401
      );
    }
    const user = dbClient.queryOne(userId=_id);
  }
  next();    

}
