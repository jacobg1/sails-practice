/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var EmailAddresses = require('machinepack-emailaddresses')
var Passwords = require('machinepack-passwords')

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
        Passwords.encryptPassword({
          password: req.param('password')
        }).exec({

          // if error return server error 500 status code
          error: function (err) {
            return res.serverError(err)
          },

          // if successful then next step
          success: function (result) {
            // create user in database
            var user = {
              email: email,
              encryptPassword: result
            }

            // create user in db(with waterline) pass in local user var
            User.create(user, function (err, createdResult) {
              // check for errors
              if (err) {
                if (err.invalidAttributes
                  && err.invalidAttributes.email
                  && err.invalidAttributes.email[0]
                  && err.invalidAttributes.email[0].rule === 'unique') {
                }
                return res.alreadyInUse(err)
              }
              return res.serverError(err)

              // add user id to session state(just id to prevent password from being stored in memory)
              req.session.user = createdResult.id

              // return back user with response 200
              return res.ok(createdResult)
            })
          }

        })
      }
    })
  }

}
