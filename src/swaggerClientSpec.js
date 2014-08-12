'use strict';

/* jshint quotmark:false,maxlen:false */
var schema = {"apiVersion":"1.0.0","swaggerVersion":"1.2","apis":[{"path":"/pet","description":"Operations about pets","apiDeclaration":{"apiVersion":"1.0.0","swaggerVersion":"1.2","basePath":"http://petstore.swagger.wordnik.com/api","resourcePath":"/pet","produces":["application/json","application/xml","text/plain","text/html"],"apis":[{"path":"/pet/{petId}","operations":[{"method":"GET","summary":"Find pet by ID","notes":"Returns a pet based on ID","type":"Pet","nickname":"getPetById","authorizations":{},"parameters":[{"name":"petId","description":"ID of pet that needs to be fetched","required":true,"type":"integer","format":"int64","paramType":"path","allowMultiple":false,"minimum":"1.0","maximum":"100000.0"}],"responseMessages":[{"code":400,"message":"Invalid ID supplied"},{"code":404,"message":"Pet not found"}]},{"method":"DELETE","summary":"Deletes a pet","notes":"","type":"void","nickname":"deletePet","authorizations":{"oauth2":[{"scope":"write:pets","description":"modify pets in your account"}]},"parameters":[{"name":"petId","description":"Pet id to delete","required":true,"type":"string","paramType":"path","allowMultiple":false}],"responseMessages":[{"code":400,"message":"Invalid pet value"}]},{"method":"PATCH","summary":"partial updates to a pet","notes":"","type":"array","items":{"$ref":"Pet"},"nickname":"partialUpdate","produces":["application/json","application/xml"],"consumes":["application/json","application/xml"],"authorizations":{"oauth2":[{"scope":"write:pets","description":"modify pets in your account"}]},"parameters":[{"name":"petId","description":"ID of pet that needs to be fetched","required":true,"type":"string","paramType":"path","allowMultiple":false},{"name":"body","description":"Pet object that needs to be added to the store","required":true,"type":"Pet","paramType":"body","allowMultiple":false}],"responseMessages":[{"code":400,"message":"Invalid tag value"}]},{"method":"POST","summary":"Updates a pet in the store with form data","notes":"","type":"void","nickname":"updatePetWithForm","consumes":["application/x-www-form-urlencoded"],"authorizations":{"oauth2":[{"scope":"write:pets","description":"modify pets in your account"}]},"parameters":[{"name":"petId","description":"ID of pet that needs to be updated","required":true,"type":"string","paramType":"path","allowMultiple":false},{"name":"name","description":"Updated name of the pet","required":false,"type":"string","paramType":"form","allowMultiple":false},{"name":"status","description":"Updated status of the pet","required":false,"type":"string","paramType":"form","allowMultiple":false}],"responseMessages":[{"code":405,"message":"Invalid input"}]}]},{"path":"/pet","operations":[{"method":"POST","summary":"Add a new pet to the store","notes":"","type":"void","nickname":"addPet","consumes":["application/json","application/xml"],"authorizations":{"oauth2":[{"scope":"write:pets","description":"modify pets in your account"}]},"parameters":[{"name":"body","description":"Pet object that needs to be added to the store","required":true,"type":"Pet","paramType":"body","allowMultiple":false}],"responseMessages":[{"code":405,"message":"Invalid input"}]},{"method":"PUT","summary":"Update an existing pet","notes":"","type":"void","nickname":"updatePet","authorizations":{},"parameters":[{"name":"body","description":"Pet object that needs to be updated in the store","required":true,"type":"Pet","paramType":"body","allowMultiple":false}],"responseMessages":[{"code":400,"message":"Invalid ID supplied"},{"code":404,"message":"Pet not found"},{"code":405,"message":"Validation exception"}]}]},{"path":"/pet/findByStatus","operations":[{"method":"GET","summary":"Finds Pets by status","notes":"Multiple status values can be provided with comma seperated strings","type":"array","items":{"$ref":"Pet"},"nickname":"findPetsByStatus","authorizations":{},"parameters":[{"name":"status","description":"Status values that need to be considered for filter","defaultValue":"available","required":true,"type":"string","paramType":"query","allowMultiple":true,"enum":["available","pending","sold"]}],"responseMessages":[{"code":400,"message":"Invalid status value"}]}]},{"path":"/pet/findByTags","operations":[{"method":"GET","summary":"Finds Pets by tags","notes":"Muliple tags can be provided with comma seperated strings. Use tag1, tag2, tag3 for testing.","type":"array","items":{"$ref":"Pet"},"nickname":"findPetsByTags","authorizations":{},"parameters":[{"name":"tags","description":"Tags to filter by","required":true,"type":"string","paramType":"query","allowMultiple":true}],"responseMessages":[{"code":400,"message":"Invalid tag value"}],"deprecated":"true"}]},{"path":"/pet/uploadImage","operations":[{"method":"POST","summary":"uploads an image","notes":"","type":"void","nickname":"uploadFile","consumes":["multipart/form-data"],"authorizations":{"oauth2":[{"scope":"write:pets","description":"modify pets in your account"},{"scope":"read:pets","description":"read your pets"}]},"parameters":[{"name":"additionalMetadata","description":"Additional data to pass to server","required":false,"type":"string","paramType":"form","allowMultiple":false},{"name":"file","description":"file to upload","required":false,"type":"File","paramType":"form","allowMultiple":false}]}]}],"models":{"Tag":{"id":"Tag","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}}},"Pet":{"id":"Pet","required":["id","name"],"properties":{"id":{"type":"integer","format":"int64","description":"unique identifier for the pet","minimum":"0.0","maximum":"100.0"},"category":{"$ref":"Category"},"name":{"type":"string"},"photoUrls":{"type":"array","items":{"type":"string"}},"tags":{"type":"array","items":{"$ref":"Tag"}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}}},"Category":{"id":"Category","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}}}}}},{"path":"/user","description":"Operations about user","apiDeclaration":{"apiVersion":"1.0.0","swaggerVersion":"1.2","basePath":"http://petstore.swagger.wordnik.com/api","resourcePath":"/user","produces":["application/json"],"apis":[{"path":"/user/createWithArray","operations":[{"method":"POST","summary":"Creates list of users with given input array","notes":"","type":"void","nickname":"createUsersWithArrayInput","authorizations":{"oauth2":[{"scope":"test:anything","description":"anything"}]},"parameters":[{"name":"body","description":"List of user object","required":true,"type":"array","items":{"$ref":"User"},"paramType":"body","allowMultiple":false}]}]},{"path":"/user/{username}","operations":[{"method":"GET","summary":"Get user by user name","notes":"","type":"User","nickname":"getUserByName","authorizations":{},"parameters":[{"name":"username","description":"The name that needs to be fetched. Use user1 for testing.","required":true,"type":"string","paramType":"path","allowMultiple":false}],"responseMessages":[{"code":400,"message":"Invalid username supplied"},{"code":404,"message":"User not found"}]},{"method":"PUT","summary":"Updated user","notes":"This can only be done by the logged in user.","type":"void","nickname":"updateUser","authorizations":{"oauth2":[{"scope":"test:anything","description":"anything"}]},"parameters":[{"name":"username","description":"name that need to be deleted","required":true,"type":"string","paramType":"path","allowMultiple":false},{"name":"body","description":"Updated user object","required":true,"type":"User","paramType":"body","allowMultiple":false}],"responseMessages":[{"code":400,"message":"Invalid username supplied"},{"code":404,"message":"User not found"}]},{"method":"DELETE","summary":"Delete user","notes":"This can only be done by the logged in user.","type":"void","nickname":"deleteUser","authorizations":{"oauth2":[{"scope":"test:anything","description":"anything"}]},"parameters":[{"name":"username","description":"The name that needs to be deleted","required":true,"type":"string","paramType":"path","allowMultiple":false}],"responseMessages":[{"code":400,"message":"Invalid username supplied"},{"code":404,"message":"User not found"}]}]},{"path":"/user/login","operations":[{"method":"GET","summary":"Logs user into the system","notes":"","type":"string","nickname":"loginUser","authorizations":{},"parameters":[{"name":"username","description":"The user name for login","required":true,"type":"string","paramType":"query","allowMultiple":false},{"name":"password","description":"The password for login in clear text","required":true,"type":"string","paramType":"query","allowMultiple":false}],"responseMessages":[{"code":400,"message":"Invalid username and password combination"}]}]},{"path":"/user/logout","operations":[{"method":"GET","summary":"Logs out current logged in user session","notes":"","type":"void","nickname":"logoutUser","authorizations":{},"parameters":[]}]},{"path":"/user","operations":[{"method":"POST","summary":"Create user","notes":"This can only be done by the logged in user.","type":"void","nickname":"createUser","authorizations":{"oauth2":[{"scope":"test:anything","description":"anything"}]},"parameters":[{"name":"body","description":"Created user object","required":true,"type":"User","paramType":"body","allowMultiple":false}]}]},{"path":"/user/createWithList","operations":[{"method":"POST","summary":"Creates list of users with given list input","notes":"","type":"void","nickname":"createUsersWithListInput","authorizations":{"oauth2":[{"scope":"test:anything","description":"anything"}]},"parameters":[{"name":"body","description":"List of user object","required":true,"type":"array","items":{"$ref":"User"},"paramType":"body","allowMultiple":false}]}]}],"models":{"User":{"id":"User","properties":{"id":{"type":"integer","format":"int64"},"firstName":{"type":"string"},"username":{"type":"string"},"lastName":{"type":"string"},"email":{"type":"string"},"password":{"type":"string"},"phone":{"type":"string"},"userStatus":{"type":"integer","format":"int32","description":"User Status","enum":["1-registered","2-active","3-closed"]}}}}}},{"path":"/store","description":"Operations about store","apiDeclaration":{"apiVersion":"1.0.0","swaggerVersion":"1.2","basePath":"http://petstore.swagger.wordnik.com/api","resourcePath":"/store","produces":["application/json"],"apis":[{"path":"/store/order","operations":[{"method":"POST","summary":"Place an order for a pet","notes":"","type":"void","nickname":"placeOrder","authorizations":{"oauth2":[{"scope":"write:pets","description":"write to your pets"}]},"parameters":[{"name":"body","description":"order placed for purchasing the pet","required":true,"type":"Order","paramType":"body","allowMultiple":false}],"responseMessages":[{"code":400,"message":"Invalid order"}]}]},{"path":"/store/order/{orderId}","operations":[{"method":"DELETE","summary":"Delete purchase order by ID","notes":"For valid response try integer IDs with value < 1000.  Anything above 1000 or nonintegers will generate API errors","type":"void","nickname":"deleteOrder","authorizations":{"oauth2":[{"scope":"write:pets","description":"write to your pets"}]},"parameters":[{"name":"orderId","description":"ID of the order that needs to be deleted","required":true,"type":"string","paramType":"path","allowMultiple":false}],"responseMessages":[{"code":400,"message":"Invalid ID supplied"},{"code":404,"message":"Order not found"}]},{"method":"GET","summary":"Find purchase order by ID","notes":"For valid response try integer IDs with value <= 5. Anything above 5 or nonintegers will generate API errors","type":"Order","nickname":"getOrderById","authorizations":{},"parameters":[{"name":"orderId","description":"ID of pet that needs to be fetched","required":true,"type":"string","paramType":"path","allowMultiple":false}],"responseMessages":[{"code":400,"message":"Invalid ID supplied"},{"code":404,"message":"Order not found"}]}]}],"models":{"Order":{"id":"Order","properties":{"id":{"type":"integer","format":"int64"},"petId":{"type":"integer","format":"int64"},"quantity":{"type":"integer","format":"int32"},"status":{"type":"string","description":"Order Status","enum":["placed"," approved"," delivered"]},"shipDate":{"type":"string","format":"date-time"}}}}}}],"authorizations":{"oauth2":{"type":"oauth2","scopes":[{"scope":"write:pets","description":"Modify pets in your account"},{"scope":"read:pets","description":"Read your pets"}],"grantTypes":{"implicit":{"loginEndpoint":{"url":"http://petstore.swagger.wordnik.com/oauth/dialog"},"tokenName":"access_token"},"authorization_code":{"tokenRequestEndpoint":{"url":"http://petstore.swagger.wordnik.com/oauth/requestToken","clientIdName":"client_id","clientSecretName":"client_secret"},"tokenEndpoint":{"url":"http://petstore.swagger.wordnik.com/oauth/token","tokenName":"auth_code"}}}}},"info":{"title":"Swagger Sample App","description":"This is a sample server Petstore server.  You can find out more about Swagger \n    at <a href=\"http://swagger.wordnik.com\">http://swagger.wordnik.com</a> or on irc.freenode.net, #swagger.  For this sample,\n    you can use the api key \"special-key\" to test the authorization filters","termsOfServiceUrl":"http://helloreverb.com/terms/","contact":"apiteam@wordnik.com","license":"Apache 2.0","licenseUrl":"http://www.apache.org/licenses/LICENSE-2.0.html"}};

var m = angular.mock.module;
describe('Swagger Client Provider', function() {
  var $httpBackend;

  beforeEach(function(){
    var testModule = angular.module('test', function(){});
    m('swagger-client', 'test');

    testModule.config(function(swaggerClientProvider){
      swaggerClientProvider.add('PetStore', schema);
    });

    inject(function($injector){
      $httpBackend = $injector.get('$httpBackend');
    });
  });

  it('provides the client', inject(function(swaggerClient) {
    expect(swaggerClient).toBeDefined();
  }));

  it('makes requests on behalf of the client', inject(function(swaggerClient){
    var response = {
      petId: 1,
      name: 'bob'
    };

    $httpBackend.expectGET('http://petstore.swagger.wordnik.com/api/pet/1')
      .respond(response);
    
    var result = swaggerClient.PetStore.pet.getPetById(1);

    result.then(function(pet){
      expect(pet).toEqual(response);
    });

    $httpBackend.flush();
  }));


  it('propogates validation errors which may occur', inject(function($rootScope, swaggerClient){
    var response = {
      petId: 1,
      name: 'bob'
    };

    $httpBackend.expectGET('http://petstore.swagger.wordnik.com/api/pet/1')
      .respond(response);
    
    var result = swaggerClient.PetStore.pet.getPetById();

    result.then(function(){
      throw new Error('Promise was resolved when it should have been rejected');
    }).catch(function(err){
      expect(err instanceof Error).toBe(true);
    });

    $rootScope.$apply();
  }));
});