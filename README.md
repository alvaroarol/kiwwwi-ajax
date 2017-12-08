# kiwwwi-ajax

A simple to use library to make ajax calls easier


## How to use

#### GET request

```js
kiwwwiAjax.get(parameters);
```


#### POST request

```js
kiwwwiAjax.post(parameters);
```


###### Parameters

url: (string) the url where to send the request, obligatory

data: (array) an associative array with the data to send, obligatory for POST method

callback: (function) the function to call if request is successful, response is passed as parameter, obligatory

errorCallback: (function) the function to call if request is unsuccessful, error code is passed as parameter, optional, default prints error code to console

asynchronous: (boolean) whether or not make the call asynchronous, optional, default is true

json: (boolean) whether or not to parse the JSON into a javascript object


###### Examples

```js
kiwwwiAjax.get({
    url: 'ajax.php',
    json: true,
    callback: function(response){
        console.log(response);
    }
});
```

```js
kiwwwiAjax.post({
    url: 'ajax.php',
    data: {
        someData: 'someValue',
        someOtherData: 'someOtherValue'
    },
    callback: function(response){
        console.log(response);
    },
    errorCallback: function(errorCode){
        console.log('Uh oh something went wrong. Error code: ' + errorCode);
    }
});
```
