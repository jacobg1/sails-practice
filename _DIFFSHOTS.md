# https://www.github.com/jacobg1/sails-practice

> This commit history created using [Diffshot](https://github.com/RobertAKARobin/diffshot)

## Table of Contents

- [b1ba1cf: initial commit](#initial-commit)
    - [.editorconfig](#initial-commit-editorconfig)
    - [.gitignore](#initial-commit-gitignore)
    - [.sailsrc](#initial-commit-sailsrc)
    - [README.md](#initial-commit-readmemd)
    - [api/controllers/.gitkeep](#initial-commit-apicontrollersgitkeep)
    - [api/models/.gitkeep](#initial-commit-apimodelsgitkeep)
    - [api/policies/sessionAuth.js](#initial-commit-apipoliciessessionauthjs)
    - [api/responses/badRequest.js](#initial-commit-apiresponsesbadrequestjs)
    - [api/responses/created.js](#initial-commit-apiresponsescreatedjs)
    - [api/responses/forbidden.js](#initial-commit-apiresponsesforbiddenjs)
    - [api/responses/notFound.js](#initial-commit-apiresponsesnotfoundjs)
    - [api/responses/ok.js](#initial-commit-apiresponsesokjs)
    - [api/responses/serverError.js](#initial-commit-apiresponsesservererrorjs)
    - [api/services/.gitkeep](#initial-commit-apiservicesgitkeep)
    - [app.js](#initial-commit-appjs)
    - [config/blueprints.js](#initial-commit-configblueprintsjs)
    - [config/bootstrap.js](#initial-commit-configbootstrapjs)
    - [config/connections.js](#initial-commit-configconnectionsjs)
    - [config/cors.js](#initial-commit-configcorsjs)
    - [config/csrf.js](#initial-commit-configcsrfjs)
    - [config/env/development.js](#initial-commit-configenvdevelopmentjs)
    - [config/env/production.js](#initial-commit-configenvproductionjs)
    - [config/globals.js](#initial-commit-configglobalsjs)
    - [config/http.js](#initial-commit-confighttpjs)
    - [config/i18n.js](#initial-commit-configi18njs)
    - [config/locales/_README.md](#initial-commit-configlocales_readmemd)
    - [config/locales/de.json](#initial-commit-configlocalesdejson)
    - [config/locales/en.json](#initial-commit-configlocalesenjson)
    - [config/locales/es.json](#initial-commit-configlocalesesjson)
    - [config/locales/fr.json](#initial-commit-configlocalesfrjson)
    - [config/log.js](#initial-commit-configlogjs)
    - [config/models.js](#initial-commit-configmodelsjs)
    - [config/policies.js](#initial-commit-configpoliciesjs)
    - [config/routes.js](#initial-commit-configroutesjs)
    - [config/session.js](#initial-commit-configsessionjs)
    - [config/sockets.js](#initial-commit-configsocketsjs)
    - [config/views.js](#initial-commit-configviewsjs)
    - [package-lock.json](#initial-commit-package-lockjson)
    - [package.json](#initial-commit-packagejson)
- [b3cf5f6: generate user models](#generate-user-models)
    - [api/controllers/UserController.js](#generate-user-models-apicontrollersusercontrollerjs)
    - [api/models/User.js](#generate-user-models-apimodelsuserjs)
- [5282f9d: generate todo model](#generate-todo-model)
    - [api/controllers/TodoController.js](#generate-todo-model-apicontrollerstodocontrollerjs)
    - [api/models/Todo.js](#generate-todo-model-apimodelstodojs)
- [1554719: turn views off](#turn-views-off)
    - [.sailsrc](#turn-views-off-sailsrc)
- [db64fbd: set migration strategy to "alter"](#set-migration-strategy-to-alter)
    - [config/models.js](#set-migration-strategy-to-alter-configmodelsjs)
- [edebb3e: update POST action](#update-post-action)
    - [api/controllers/UserController.js](#update-post-action-apicontrollersusercontrollerjs)
- [990a67e: add email verification](#add-email-verification)
    - [package.json](#add-email-verification-packagejson)
- [d459cc5: add package-lock.json](#add-package-lockjson)
    - [.gitignore](#add-package-lockjson-gitignore)
- [d4df2aa: add machinepack](#add-machinepack)
    - [api/controllers/UserController.js](#add-machinepack-apicontrollersusercontrollerjs)
- [fcbfe16: lock](#lock)
    - [package-lock.json](#lock-package-lockjson)
- [7775bd9: add email validation](#add-email-validation)
    - [api/controllers/UserController.js](#add-email-validation-apicontrollersusercontrollerjs)
- [9b847ca: start pass encryption](#start-pass-encryption)
    - [api/controllers/UserController.js](#start-pass-encryption-apicontrollersusercontrollerjs)
- [6b06121: fix space](#fix-space)
    - [api/responses/badRequest.js](#fix-space-apiresponsesbadrequestjs)
- [d6b0f7e: change to song](#change-to-song)
    - [api/controllers/SongController.js](#change-to-song-apicontrollerssongcontrollerjs)
    - [api/models/Song.js](#change-to-song-apimodelssongjs)
- [580ff83: change name](#change-name)
- [d4322af: finish pass verification](#finish-pass-verification)
    - [api/controllers/UserController.js](#finish-pass-verification-apicontrollersusercontrollerjs)
- [a7a5e41: remove encrypted pass from api call](#remove-encrypted-pass-from-api-call)
    - [api/models/User.js](#remove-encrypted-pass-from-api-call-apimodelsuserjs)
- [65d2f5b: make sure email is unique](#make-sure-email-is-unique)
    - [api/models/User.js](#make-sure-email-is-unique-apimodelsuserjs)
- [8ba15ac: add alreadyInUse err function](#add-alreadyinuse-err-function)
    - [api/controllers/UserController.js](#add-alreadyinuse-err-function-apicontrollersusercontrollerjs)
- [abb3483: error handling for dup email](#error-handling-for-dup-email)
    - [api/responses/alreadyInUse.js](#error-handling-for-dup-email-apiresponsesalreadyinusejs)
- [c797255: fix user creation](#fix-user-creation)
    - [api/controllers/UserController.js](#fix-user-creation-apicontrollersusercontrollerjs)
    - [api/models/User.js](#fix-user-creation-apimodelsuserjs)
- [a6f9142: fix already in user err message](#fix-already-in-user-err-message)
    - [api/controllers/UserController.js](#fix-already-in-user-err-message-apicontrollersusercontrollerjs)
- [b5abc53: fix spacing](#fix-spacing)
    - [api/models/User.js](#fix-spacing-apimodelsuserjs)
- [c0ac02d: start login](#start-login)
    - [api/controllers/UserController.js](#start-login-apicontrollersusercontrollerjs)
- [2c1a65d: remove lock file](#remove-lock-file)
- [57e04bf: add machine-pack passwords](#add-machine-pack-passwords)
    - [package.json](#add-machine-pack-passwords-packagejson)
- [1900a2a: package-lock.json](#package-lockjson)
    - [package-lock.json](#package-lockjson-package-lockjson)
- [f57c731: package-lock.json](#package-lockjson)
- [45f9cd0: fix variable name](#fix-variable-name)
    - [api/models/User.js](#fix-variable-name-apimodelsuserjs)
- [338781d: finish login action](#finish-login-action)
    - [api/controllers/UserController.js](#finish-login-action-apicontrollersusercontrollerjs)
- [d52ae99: user logout done](#user-logout-done)
    - [api/controllers/UserController.js](#user-logout-done-apicontrollersusercontrollerjs)
- [01fd898: add user iden path](#add-user-iden-path)
    - [api/controllers/UserController.js](#add-user-iden-path-apicontrollersusercontrollerjs)
- [5794363: override find all](#override-find-all)
    - [api/controllers/UserController.js](#override-find-all-apicontrollersusercontrollerjs)


# initial commit
> [b1ba1cf](https://www.github.com/jacobg1/sails-practice/commit/b1ba1cf)

### [initial commit: `.editorconfig`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/.editorconfig)

![initial commit, .editorconfig](_DIFFSHOTS/initial-commit..editorconfig.png)
### [initial commit: `.gitignore`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/.gitignore)

![initial commit, .gitignore](_DIFFSHOTS/initial-commit..gitignore.png)
### [initial commit: `.sailsrc`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/.sailsrc)

![initial commit, .sailsrc](_DIFFSHOTS/initial-commit..sailsrc.png)
### [initial commit: `README.md`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/README.md)

![initial commit, README.md](_DIFFSHOTS/initial-commit.readme.md.png)
### [initial commit: `api/controllers/.gitkeep`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/api/controllers/.gitkeep)

![initial commit, api/controllers/.gitkeep](_DIFFSHOTS/initial-commit.apicontrollers.gitkeep.png)
### [initial commit: `api/models/.gitkeep`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/api/models/.gitkeep)

![initial commit, api/models/.gitkeep](_DIFFSHOTS/initial-commit.apimodels.gitkeep.png)
### [initial commit: `api/policies/sessionAuth.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/api/policies/sessionAuth.js)

![initial commit, api/policies/sessionAuth.js](_DIFFSHOTS/initial-commit.apipoliciessessionauth.js.png)
### [initial commit: `api/responses/badRequest.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/api/responses/badRequest.js)

![initial commit, api/responses/badRequest.js](_DIFFSHOTS/initial-commit.apiresponsesbadrequest.js.png)
### [initial commit: `api/responses/created.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/api/responses/created.js)

![initial commit, api/responses/created.js](_DIFFSHOTS/initial-commit.apiresponsescreated.js.png)
### [initial commit: `api/responses/forbidden.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/api/responses/forbidden.js)

![initial commit, api/responses/forbidden.js](_DIFFSHOTS/initial-commit.apiresponsesforbidden.js.png)
### [initial commit: `api/responses/notFound.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/api/responses/notFound.js)

![initial commit, api/responses/notFound.js](_DIFFSHOTS/initial-commit.apiresponsesnotfound.js.png)
### [initial commit: `api/responses/ok.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/api/responses/ok.js)

![initial commit, api/responses/ok.js](_DIFFSHOTS/initial-commit.apiresponsesok.js.png)
### [initial commit: `api/responses/serverError.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/api/responses/serverError.js)

![initial commit, api/responses/serverError.js](_DIFFSHOTS/initial-commit.apiresponsesservererror.js.png)
### [initial commit: `api/services/.gitkeep`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/api/services/.gitkeep)

![initial commit, api/services/.gitkeep](_DIFFSHOTS/initial-commit.apiservices.gitkeep.png)
### [initial commit: `app.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/app.js)

![initial commit, app.js](_DIFFSHOTS/initial-commit.app.js.png)
### [initial commit: `config/blueprints.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/blueprints.js)

![initial commit, config/blueprints.js](_DIFFSHOTS/initial-commit.configblueprints.js.png)
### [initial commit: `config/bootstrap.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/bootstrap.js)

![initial commit, config/bootstrap.js](_DIFFSHOTS/initial-commit.configbootstrap.js.png)
### [initial commit: `config/connections.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/connections.js)

![initial commit, config/connections.js](_DIFFSHOTS/initial-commit.configconnections.js.png)
### [initial commit: `config/cors.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/cors.js)

![initial commit, config/cors.js](_DIFFSHOTS/initial-commit.configcors.js.png)
### [initial commit: `config/csrf.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/csrf.js)

![initial commit, config/csrf.js](_DIFFSHOTS/initial-commit.configcsrf.js.png)
### [initial commit: `config/env/development.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/env/development.js)

![initial commit, config/env/development.js](_DIFFSHOTS/initial-commit.configenvdevelopment.js.png)
### [initial commit: `config/env/production.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/env/production.js)

![initial commit, config/env/production.js](_DIFFSHOTS/initial-commit.configenvproduction.js.png)
### [initial commit: `config/globals.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/globals.js)

![initial commit, config/globals.js](_DIFFSHOTS/initial-commit.configglobals.js.png)
### [initial commit: `config/http.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/http.js)

![initial commit, config/http.js](_DIFFSHOTS/initial-commit.confighttp.js.png)
### [initial commit: `config/i18n.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/i18n.js)

![initial commit, config/i18n.js](_DIFFSHOTS/initial-commit.configi18n.js.png)
### [initial commit: `config/locales/_README.md`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/locales/_README.md)

![initial commit, config/locales/_README.md](_DIFFSHOTS/initial-commit.configlocalesreadme.md.png)
### [initial commit: `config/locales/de.json`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/locales/de.json)

![initial commit, config/locales/de.json](_DIFFSHOTS/initial-commit.configlocalesde.json.png)
### [initial commit: `config/locales/en.json`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/locales/en.json)

![initial commit, config/locales/en.json](_DIFFSHOTS/initial-commit.configlocalesen.json.png)
### [initial commit: `config/locales/es.json`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/locales/es.json)

![initial commit, config/locales/es.json](_DIFFSHOTS/initial-commit.configlocaleses.json.png)
### [initial commit: `config/locales/fr.json`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/locales/fr.json)

![initial commit, config/locales/fr.json](_DIFFSHOTS/initial-commit.configlocalesfr.json.png)
### [initial commit: `config/log.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/log.js)

![initial commit, config/log.js](_DIFFSHOTS/initial-commit.configlog.js.png)
### [initial commit: `config/models.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/models.js)

![initial commit, config/models.js](_DIFFSHOTS/initial-commit.configmodels.js.png)
### [initial commit: `config/policies.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/policies.js)

![initial commit, config/policies.js](_DIFFSHOTS/initial-commit.configpolicies.js.png)
### [initial commit: `config/routes.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/routes.js)

![initial commit, config/routes.js](_DIFFSHOTS/initial-commit.configroutes.js.png)
### [initial commit: `config/session.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/session.js)

![initial commit, config/session.js](_DIFFSHOTS/initial-commit.configsession.js.png)
### [initial commit: `config/sockets.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/sockets.js)

![initial commit, config/sockets.js](_DIFFSHOTS/initial-commit.configsockets.js.png)
### [initial commit: `config/views.js`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/config/views.js)

![initial commit, config/views.js](_DIFFSHOTS/initial-commit.configviews.js.png)
### [initial commit: `package-lock.json`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/package-lock.json)

![initial commit, package-lock.json](_DIFFSHOTS/initial-commit.package-lock.json.png)
### [initial commit: `package.json`](https://www.github.com/jacobg1/sails-practice/blob/b1ba1cf/package.json)

![initial commit, package.json](_DIFFSHOTS/initial-commit.package.json.png)
# generate user models
> [b3cf5f6](https://www.github.com/jacobg1/sails-practice/commit/b3cf5f6)

### [generate user models: `api/controllers/UserController.js`](https://www.github.com/jacobg1/sails-practice/blob/b3cf5f6/api/controllers/UserController.js)

![generate user models, api/controllers/UserController.js](_DIFFSHOTS/generate-user-models.apicontrollersusercontroller.js.png)
### [generate user models: `api/models/User.js`](https://www.github.com/jacobg1/sails-practice/blob/b3cf5f6/api/models/User.js)

![generate user models, api/models/User.js](_DIFFSHOTS/generate-user-models.apimodelsuser.js.png)
# generate todo model
> [5282f9d](https://www.github.com/jacobg1/sails-practice/commit/5282f9d)

### [generate todo model: `api/controllers/TodoController.js`](https://www.github.com/jacobg1/sails-practice/blob/5282f9d/api/controllers/TodoController.js)

![generate todo model, api/controllers/TodoController.js](_DIFFSHOTS/generate-todo-model.apicontrollerstodocontroller.js.png)
### [generate todo model: `api/models/Todo.js`](https://www.github.com/jacobg1/sails-practice/blob/5282f9d/api/models/Todo.js)

![generate todo model, api/models/Todo.js](_DIFFSHOTS/generate-todo-model.apimodelstodo.js.png)
# turn views off
> [1554719](https://www.github.com/jacobg1/sails-practice/commit/1554719)

### [turn views off: `.sailsrc`](https://www.github.com/jacobg1/sails-practice/blob/1554719/.sailsrc)

![turn views off, .sailsrc](_DIFFSHOTS/turn-views-off..sailsrc.png)
# set migration strategy to "alter"
> [db64fbd](https://www.github.com/jacobg1/sails-practice/commit/db64fbd)

### [set migration strategy to "alter": `config/models.js`](https://www.github.com/jacobg1/sails-practice/blob/db64fbd/config/models.js)

![set migration strategy to "alter", config/models.js](_DIFFSHOTS/set-migration-strategy-to-alter.configmodels.js.png)
# update POST action
> [edebb3e](https://www.github.com/jacobg1/sails-practice/commit/edebb3e)

### [update POST action: `api/controllers/UserController.js`](https://www.github.com/jacobg1/sails-practice/blob/edebb3e/api/controllers/UserController.js)

![update POST action, api/controllers/UserController.js](_DIFFSHOTS/update-post-action.apicontrollersusercontroller.js.png)
# add email verification
> [990a67e](https://www.github.com/jacobg1/sails-practice/commit/990a67e)

### [add email verification: `package.json`](https://www.github.com/jacobg1/sails-practice/blob/990a67e/package.json)

![add email verification, package.json](_DIFFSHOTS/add-email-verification.package.json.png)
# add package-lock.json
> [d459cc5](https://www.github.com/jacobg1/sails-practice/commit/d459cc5)

### [add package-lock.json: `.gitignore`](https://www.github.com/jacobg1/sails-practice/blob/d459cc5/.gitignore)

![add package-lock.json, .gitignore](_DIFFSHOTS/add-package-lock.json..gitignore.png)
# add machinepack
> [d4df2aa](https://www.github.com/jacobg1/sails-practice/commit/d4df2aa)

### [add machinepack: `api/controllers/UserController.js`](https://www.github.com/jacobg1/sails-practice/blob/d4df2aa/api/controllers/UserController.js)

![add machinepack, api/controllers/UserController.js](_DIFFSHOTS/add-machinepack.apicontrollersusercontroller.js.png)
# lock
> [fcbfe16](https://www.github.com/jacobg1/sails-practice/commit/fcbfe16)

### [lock: `package-lock.json`](https://www.github.com/jacobg1/sails-practice/blob/fcbfe16/package-lock.json)

![lock, package-lock.json](_DIFFSHOTS/lock.package-lock.json.png)
# add email validation
> [7775bd9](https://www.github.com/jacobg1/sails-practice/commit/7775bd9)

### [add email validation: `api/controllers/UserController.js`](https://www.github.com/jacobg1/sails-practice/blob/7775bd9/api/controllers/UserController.js)

![add email validation, api/controllers/UserController.js](_DIFFSHOTS/add-email-validation.apicontrollersusercontroller.js.png)
# start pass encryption
> [9b847ca](https://www.github.com/jacobg1/sails-practice/commit/9b847ca)

### [start pass encryption: `api/controllers/UserController.js`](https://www.github.com/jacobg1/sails-practice/blob/9b847ca/api/controllers/UserController.js)

![start pass encryption, api/controllers/UserController.js](_DIFFSHOTS/start-pass-encryption.apicontrollersusercontroller.js.png)
# fix space
> [6b06121](https://www.github.com/jacobg1/sails-practice/commit/6b06121)

### [fix space: `api/responses/badRequest.js`](https://www.github.com/jacobg1/sails-practice/blob/6b06121/api/responses/badRequest.js)

![fix space, api/responses/badRequest.js](_DIFFSHOTS/fix-space.apiresponsesbadrequest.js.png)
# change to song
> [d6b0f7e](https://www.github.com/jacobg1/sails-practice/commit/d6b0f7e)

### [change to song: `api/controllers/SongController.js`](https://www.github.com/jacobg1/sails-practice/blob/d6b0f7e/api/controllers/SongController.js)

![change to song, api/controllers/SongController.js](_DIFFSHOTS/change-to-song.apicontrollerssongcontroller.js.png)
### [change to song: `api/models/Song.js`](https://www.github.com/jacobg1/sails-practice/blob/d6b0f7e/api/models/Song.js)

![change to song, api/models/Song.js](_DIFFSHOTS/change-to-song.apimodelssong.js.png)
# change name
> [580ff83](https://www.github.com/jacobg1/sails-practice/commit/580ff83)

# finish pass verification
> [d4322af](https://www.github.com/jacobg1/sails-practice/commit/d4322af)

### [finish pass verification: `api/controllers/UserController.js`](https://www.github.com/jacobg1/sails-practice/blob/d4322af/api/controllers/UserController.js)

![finish pass verification, api/controllers/UserController.js](_DIFFSHOTS/finish-pass-verification.apicontrollersusercontroller.js.png)
# remove encrypted pass from api call
> [a7a5e41](https://www.github.com/jacobg1/sails-practice/commit/a7a5e41)

### [remove encrypted pass from api call: `api/models/User.js`](https://www.github.com/jacobg1/sails-practice/blob/a7a5e41/api/models/User.js)

![remove encrypted pass from api call, api/models/User.js](_DIFFSHOTS/remove-encrypted-pass-from-api-call.apimodelsuser.js.png)
# make sure email is unique
> [65d2f5b](https://www.github.com/jacobg1/sails-practice/commit/65d2f5b)

### [make sure email is unique: `api/models/User.js`](https://www.github.com/jacobg1/sails-practice/blob/65d2f5b/api/models/User.js)

![make sure email is unique, api/models/User.js](_DIFFSHOTS/make-sure-email-is-unique.apimodelsuser.js.png)
# add alreadyInUse err function
> [8ba15ac](https://www.github.com/jacobg1/sails-practice/commit/8ba15ac)

### [add alreadyInUse err function: `api/controllers/UserController.js`](https://www.github.com/jacobg1/sails-practice/blob/8ba15ac/api/controllers/UserController.js)

![add alreadyInUse err function, api/controllers/UserController.js](_DIFFSHOTS/add-alreadyinuse-err-function.apicontrollersusercontroller.js.png)
# error handling for dup email
> [abb3483](https://www.github.com/jacobg1/sails-practice/commit/abb3483)

### [error handling for dup email: `api/responses/alreadyInUse.js`](https://www.github.com/jacobg1/sails-practice/blob/abb3483/api/responses/alreadyInUse.js)

![error handling for dup email, api/responses/alreadyInUse.js](_DIFFSHOTS/error-handling-for-dup-email.apiresponsesalreadyinuse.js.png)
# fix user creation
> [c797255](https://www.github.com/jacobg1/sails-practice/commit/c797255)

### [fix user creation: `api/controllers/UserController.js`](https://www.github.com/jacobg1/sails-practice/blob/c797255/api/controllers/UserController.js)

![fix user creation, api/controllers/UserController.js](_DIFFSHOTS/fix-user-creation.apicontrollersusercontroller.js.png)
### [fix user creation: `api/models/User.js`](https://www.github.com/jacobg1/sails-practice/blob/c797255/api/models/User.js)

![fix user creation, api/models/User.js](_DIFFSHOTS/fix-user-creation.apimodelsuser.js.png)
# fix already in user err message
> [a6f9142](https://www.github.com/jacobg1/sails-practice/commit/a6f9142)

### [fix already in user err message: `api/controllers/UserController.js`](https://www.github.com/jacobg1/sails-practice/blob/a6f9142/api/controllers/UserController.js)

![fix already in user err message, api/controllers/UserController.js](_DIFFSHOTS/fix-already-in-user-err-message.apicontrollersusercontroller.js.png)
# fix spacing
> [b5abc53](https://www.github.com/jacobg1/sails-practice/commit/b5abc53)

### [fix spacing: `api/models/User.js`](https://www.github.com/jacobg1/sails-practice/blob/b5abc53/api/models/User.js)

![fix spacing, api/models/User.js](_DIFFSHOTS/fix-spacing.apimodelsuser.js.png)
# start login
> [c0ac02d](https://www.github.com/jacobg1/sails-practice/commit/c0ac02d)

### [start login: `api/controllers/UserController.js`](https://www.github.com/jacobg1/sails-practice/blob/c0ac02d/api/controllers/UserController.js)

![start login, api/controllers/UserController.js](_DIFFSHOTS/start-login.apicontrollersusercontroller.js.png)
# remove lock file
> [2c1a65d](https://www.github.com/jacobg1/sails-practice/commit/2c1a65d)

# add machine-pack passwords
> [57e04bf](https://www.github.com/jacobg1/sails-practice/commit/57e04bf)

### [add machine-pack passwords: `package.json`](https://www.github.com/jacobg1/sails-practice/blob/57e04bf/package.json)

![add machine-pack passwords, package.json](_DIFFSHOTS/add-machine-pack-passwords.package.json.png)
# package-lock.json
> [1900a2a](https://www.github.com/jacobg1/sails-practice/commit/1900a2a)

### [package-lock.json: `package-lock.json`](https://www.github.com/jacobg1/sails-practice/blob/1900a2a/package-lock.json)

![package-lock.json, package-lock.json](_DIFFSHOTS/package-lock.json.package-lock.json.png)
# package-lock.json
> [f57c731](https://www.github.com/jacobg1/sails-practice/commit/f57c731)

# fix variable name
> [45f9cd0](https://www.github.com/jacobg1/sails-practice/commit/45f9cd0)

### [fix variable name: `api/models/User.js`](https://www.github.com/jacobg1/sails-practice/blob/45f9cd0/api/models/User.js)

![fix variable name, api/models/User.js](_DIFFSHOTS/fix-variable-name.apimodelsuser.js.png)
# finish login action
> [338781d](https://www.github.com/jacobg1/sails-practice/commit/338781d)

### [finish login action: `api/controllers/UserController.js`](https://www.github.com/jacobg1/sails-practice/blob/338781d/api/controllers/UserController.js)

![finish login action, api/controllers/UserController.js](_DIFFSHOTS/finish-login-action.apicontrollersusercontroller.js.png)
# user logout done
> [d52ae99](https://www.github.com/jacobg1/sails-practice/commit/d52ae99)

### [user logout done: `api/controllers/UserController.js`](https://www.github.com/jacobg1/sails-practice/blob/d52ae99/api/controllers/UserController.js)

![user logout done, api/controllers/UserController.js](_DIFFSHOTS/user-logout-done.apicontrollersusercontroller.js.png)
# add user iden path
> [01fd898](https://www.github.com/jacobg1/sails-practice/commit/01fd898)

### [add user iden path: `api/controllers/UserController.js`](https://www.github.com/jacobg1/sails-practice/blob/01fd898/api/controllers/UserController.js)

![add user iden path, api/controllers/UserController.js](_DIFFSHOTS/add-user-iden-path.apicontrollersusercontroller.js.png)
# override find all
> [5794363](https://www.github.com/jacobg1/sails-practice/commit/5794363)

### [override find all: `api/controllers/UserController.js`](https://www.github.com/jacobg1/sails-practice/blob/5794363/api/controllers/UserController.js)

![override find all, api/controllers/UserController.js](_DIFFSHOTS/override-find-all.apicontrollersusercontroller.js.png)

