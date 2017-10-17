/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // define email attributes
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    // define password attributes
    encryptedPassword: {
      type: 'string',
      required: true
    },
    toJSON: function () {
      // set obj variable to current object
      var obj = this.toObject()

      // delete password so that it doesn't get passed back in api call
      delete obj.encryptedPassword

      // return obj
      return obj
    }

  }

}
