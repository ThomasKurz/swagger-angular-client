# swagger-angular-client

> AngularJS service for communicating with endpoints described by [swagger](https://github.com/wordnik/swagger-spec/blob/master/versions/1.2.md).

# Usage
To use, include one of these files in your application: 
* *[swagger-angular-client.js](https://raw.githubusercontent.com/signalfuse/swagger-angular-client/master/dist/swagger-angular-client.js)*
* *[swagger-angular-client.js.min](https://raw.githubusercontent.com/signalfuse/swagger-angular-client/master/dist/swagger-angular-client.min.js)*, a minified version ([source map](https://raw.githubusercontent.com/signalfuse/swagger-angular-client/master/dist/swagger-angular-client.min.js.map))

You may also `bower install swagger-angular-client` to install using bower. Once you've included the script, you can include the `swagger-client` module as a dependency to your existing application and configure the provider with your schemas:

```javascript
angular.module('myApp', ['swagger-client'])
    .configure(function(swaggerClientProvider){
        // Configure which schemas map to which api.
        swaggerClientProvider.add('MyFirstApi', schema1);
        swaggerClientProvider.add('MySecondApi', schema2);
    })
    .run(function(swaggerClient){
        // Start using your api clients
        swaggerClient.MyFirstApi.auth('my-token');
        swaggerClient.MyFirstApi.aResource.anOperation('argument')
            .then(function(response){
                console.log('response:', response);
            })
            .catch(function(error){
                // error could be a validation error or an http response that's not in the 200s.
                console.log('error', error);
            });
    });
```

Schemas can be generated using [fetch-swagger-schema](https://github.com/signalfuse/fetch-swagger-schema).


# Example
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Example</title>
  <script src="angular.js"></script>
</head>
<body ng-app="myApp" ng-cloak>
    Pet: {{ pet.name || 'Loading...' }}

  <script src="swagger-client.js"></script>

  <!-- `petStoreSchema.js` exposes the JSON object generated by [fetch-swagger-schema] when run against http://petstore.swagger.wordnik.com/api/api-docs to the window as `PetStoreSchema` (see `examples/petStoreSchema.js`). -->
  <script src="petStoreSchema.js"></script>

  <script>
  angular.module('myApp', ['swagger-client'])
    .config(function(swaggerClientProvider){
      // Add the schema to the provider
      swaggerClientProvider.add('PetStore', PetStoreSchema);
    })
    .run(function($rootScope, swaggerClient){
      var api = swaggerClient.PetStore;
      
      api.auth('secret-key');
      api.pet.addPet({id: 1, name: 'Bob'}).then(function(){
        return swaggerClient.PetStore.pet.getPetById(1);
      }).then(function(pet){
        $rootScope.pet = pet;
      });
    }); 
  </script>
</body>
</html>
```
