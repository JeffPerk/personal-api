var me = require('../scripts/modelProfile');
var skills = require('../scripts/modelSkillz');

module.exports = {

  getName: function(req, res, next) {
    res.status(200).send({
      "name": me.name
    });
  },

  getLocation: function(req, res, next) {
    res.status(200).send({
      "location": me.location
    });
  },

  getOccupations: function(req, res, next) {
    if (req.query.order === 'desc') {
      res.status(200).send(me.occupations.sort());
    } else if (req.query.order === 'asc') {
      res.status(200).send(me.occupations.reverse());
    } else {
      res.status(200).send({"occupations": me.occupations});
    }
  },

  getLastOccupation: function(req, res, next) {
    res.status(200).send({
      "latestOccupation": me.occupations[me.occupations.length - 1]
    });
  },

  getHobbies: function(req, res, next) {
    var hobbyArr = [];
    
  },

  getHobbyType: function(req, res, next) {
    var arr = [];
    me.hobbies.forEach(function(value) {
      console.log(value);
      if (req.params.type === value.type) {
        arr.push(value);
      }
    });
    res.status(200).send(arr);
  },

  getSkillz: function(req, res, next) {
    res.status(200).json(skills);
  },

  getSkillzExp: function(req, res, next) {
    var arr2 = [];
    skills.forEach(function(value) {
      if (req.query.experience === value.experience) {
        arr2.push(value);
      }
    });
      res.status(200).json(arr2);
  },

  getSecret: function(req, res, next) {
    res.status(200).json(me.secret);
  },

  changeName: function(req, res, next) {
    me.name = req.body.name;
    res.status(200).json(me.name);
  },

  changeLocation: function(req, res, next) {
    me.location = req.body.location;
    res.status(200).json(me.location);
  },

  postHobby: function(req, res, next) {
    me.hobbies.push(req.body);
    res.status(200).json(me.hobbies);
  },

  postOccupation: function(req, res, next) {
    me.occupations.push(req.body.occupations);
    res.status(200).json(me.occupations);
  },

  postSkillz: function(req, res, next) {
    skills.push(req.body);
    res.status(200).json(skills);
  }

};
