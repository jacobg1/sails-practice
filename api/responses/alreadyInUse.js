module.exports = function alreadyInUse (err) {
  // gives us access to res
  var res = this.res

  // create error response
  if (err.invalidAttributes.email) {
    return res.send(409, 'Email address is already taken by another user, please try again.')
  }
}
