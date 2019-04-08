const Event = require('../models').Event;
const validator = require('validator');

const create = async function (req, res) {
  res.setHeader('ContentType', 'application/json');
  const body = req.body;

  if (!body.name) {
    return ReE(res, 'Please enter a name to register', 422);
  
  } else {
    let err, event

    [err, event] = await to(createEvent(body));
    console.log(err);
    if (err) return ReE(res, err, 422);
    
    return ReS(res, event, 201);
  }
}
module.exports.create = create;

const createEvent = async function (eventInfo) {
  let err;
  
    [err, event] = await to(Event.create(eventInfo));
    if (err) TE('Error creating this event!!!!');
    return event;
   
}
module.exports.createEvent = createEvent;

const update = async function (req, res) {
  let err, data, event;
  data = req.body;
  let options = {where: {id: data.id}};
  [err, event] = await to(Event.update(data,options));
  if (err) {
    if (typeof err == 'object' && typeof err.message != 'undefined') {
      err = err.message;
    }

    if (typeof code !== 'undefined') res.statusCode = code;
    res.statusCode = 422
    return res.json({ success: false, error: err });
  }

  return res.json(event);
}
module.exports.update = update;

const destroy = async function (req, res) {
    let err, data, event;
    data = req.body;
    let options = {where: {id: data.id}};
    [err, event] = await to(Event.destroy(options));
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422
      return res.json({ success: false, error: err });
    }
  
    return res.json(event);
  }
  module.exports.delete = destroy;


  const read = async function (req, res) {
    let err, event;
    [err, event] = await to(Event.findAll());
    if (err) {
      if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
      }
  
      if (typeof code !== 'undefined') res.statusCode = code;
      res.statusCode = 422
      return res.json({ success: false, error: err });
    }
  
    return res.json(event);
  }
  module.exports.read = read;