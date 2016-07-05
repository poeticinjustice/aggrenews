module.exports = {
    //es6  - method for this object: searchGuardian(){}
    //go and search movies
    searchGuardian: function(req, res, next) {
        //empty object to fill with if statements below then use to pass into the .find
        //make sure capitalization matches the key from the object!
        const guardianFilter = {};
        //check for request queries t/y/d/id, if they are there set the
        //not if/elses, just ifs, special javascript word in
        if ('l' in req.query) {
            //if it is then:
            guardianFilter['incident_zip'] = req.query.l
        }
    }
  };
