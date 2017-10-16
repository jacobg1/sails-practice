/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var EmailAddresses = require('machinepack-emailaddresses')

module.exports = {

	// POST action
  create: function createFn (req, res) {
    var email = req.param('email')

    // validate email
    EmailAddresses.validate({
      string: email
    }).exec({

      // for gen errors
      error: function (err) {
        return res.serverError(err)
      },

      // if email is not validate
      invalid: function () {
        return res.badRequest('not a valid email address!')
      },

      // if email validation is successful, check passwords
      success: function () {

      }
    })
  }

}
