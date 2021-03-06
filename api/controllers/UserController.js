/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var EmailAddresses = require('machinepack-emailaddresses')
var Passwords = require('machinepack-passwords')

module.exports = {
  // create login path
  login: function loginFn (req, res) {
    // query db for user
    User.findOne({
      email: req.param('email')
    }, function (err, result) {
      // send error if error
      if (err) return res.serverError(err)

      // if no result for email return not found
      if (!result) return res.notFound()

      // if email exists, check password
      Passwords.checkPassword({
        passwordAttempt: req.param('password'),
        encryptedPassword: result.encryptedPassword

      }).exec({

        // handle errors
        error: function (err) {
          return result.id
          // return res.serverError(err)
        },

        // handle incorrect submission
        incorrect: function () {
          return res.forbidden('invalid login, please try again!')
        },

        // if passwords match
        success: function () {
          req.session.user = result.id
          return res.ok(result)
        }
      })
    })
  },

  // logout function
  logout: function logoutFn (req, res) {
    // set session user to null
    req.session.user = null
    return res.ok()
  },

  // get logged in user info
  userIdentity: function (req, res) {
    // query db with the id of user stored in session
    User.findOne({

      id: req.session.user
    }, function (err, result) {
      // handle errors
      if (err) return res.serverError(err)
      if (!result) return res.notFound()

      // if no errors return result
      return res.ok(result)
    })
  },

  // override find so that it only return the logged in user's info
  find: function findFn (req, res) {
    User.find({

      id: req.session.user
    }, function (err, results) {

      //handle errors
      if (err) return res.serverError(err)

      if (results.length === 0) return res.notFound()

      return res.ok(results)
    })
  },
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
            // create user variable to save in DB
            var user = {
              email: email,
              encryptedPassword: result
            }
            // return res.ok(user)

            // create user in db
            User.create(user, function (err, createdResult) {
              // error check
              if (err) {
                if (err.invalidAttributes
                  && err.invalidAttributes.email
                  && err.invalidAttributes.email[0]
                  && err.invalidAttributes.email[0].rule === 'unique') {
                    // send err to alreadyInUse.js
                  return res.alreadyInUse(err)
                }
                // if not a dup email error, send normal error
                return res.serverError(err)
              }

              // add user id to session state
              req.session.user = createdResult.id

              // return back created user with status code of 200
              return res.ok(createdResult)
            })
          }
        })
      }
    })
  }
}
