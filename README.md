# Requestor
Open Authorization implements a solution where a third party application is granted access to have a said scopes of permissions to act on resources owned by some resource owner on a different application.

In this project I will be build out an application that tries to bring forth a framework on top of OAuth2.0, where one resource owner wants to act on another resource owner's resources.


## Initial Thinking.

### Actors
The framework will consist of 5 actors: `Resource Owner 1`, `Resource Owner 2`, `Client App`, `Authorization Server`, and `Resource Server`.  

- Resource Owner 1 - is the initiator, denoted `ro1`, the party that wants to get resources of another resource owner.
- Resource Owner 2 - is acceptor, denoted `ro2` the party that will either accept or reject the use of their resources by `ro1` via the client app.
- Client App - same as the a client application in traditional OAuth.
- Authorization Server - same as an authorization server in traditional OAuth auths `client app`, `ro1`, and `ro2`
- Resource Server - has resources belonging to `ro1` and `ro2` respectively.

### Draft on Flow (High level)

1. `ro1` will use OAuth2.0 OpenID Connect to grant access to `client app` to get access to their identity in `auth server`
2. `client app` will use identity to present it to in their system for confirmation purposes.
3. `client app` would have recieved an opaque token with the identity.
4. `client app` needs to present the token back to `auth server` with the desired `scopes` that `ro1` wants to perform on `ro2`'s resources.
5. `auth server` will then create a request that `ro2` can come accept or reject (this can have a lifetime).
6. On acceptance the client app will be sent an apaque code containing a contract of ro1 and ro2.
7. client app will present this apaque token to resource server, which will introgate.

Additionally depending on the nature of the scopes of the request, the acceptor has a right to specify to be notified by auth server whenever the token is used.  
The acceptor also has a chance to specify how many times this token can be used to act on their resources.  
  
The acceptor should also have the ability to revoke access at anytime they wish.