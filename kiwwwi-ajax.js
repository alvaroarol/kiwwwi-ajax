class kiwwwiAjax{


    /**
     * SEND DATA
     * @param {string} url: string, url where to send the AJAX request
     * @param {string} method: string, either "GET" or "POST"
     * @param {array} data: associative array, data to send
     * @param {function} callback(response): function, to call when request is successful
     * @param {function} errorCallback(errorResponse): function, to call when request is unsuccessful; optional (default: print error in console)
     * @param {boolean} asynchronous: boolean, whether to make the request asynchronous or not; optional (default: true)
     */
    static send(url, method, data, callback, errorCallback, asynchronous){

        // Asynchronous parameter is optional, default is true
        if(asynchronous === undefined){
            asynchronous = true;
        }
        // Error callback parameter is optional, default is a simple console.log
        if(errorCallback === undefined){
            errorCallback = function(message){
                console.log('Ajax Error: ' + message);
            }
        }
        // AJAX
        var x = new XMLHttpRequest();
        x.open(method, url, asynchronous);
        x.onreadystatechange = function(){
            if(x.readyState == 4 && this.status == 200){
                callback(x.responseText);
            }
            else if(x.readyState == 4 && this.status != 200){
                errorCallback(this.status);
            }
        }
        // If method is POST, add appropriate header
        if(method == 'POST'){
            x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        x.send(data);

    }


    /**
     * GET (USES PREVIOUS SEND METHOD)
     * @param {array} options: associative array with the important parameters :
     * url: string, url where to send the AJAX request
     * data: associative array, data to send
     * callback(response): function, to call when request is successful
     * errorCallback(errorResponse): function, to call when request is unsuccessful; optional (default: print error in console)
     * asynchronous: boolean, whether to make the request asynchronous or not; optional (default: true)
     */
    static get(options){

        var url = options.url,
            data = options.data,
            callback = options.callback,
            errorCallback = options.errorCallback,
            asynchronous = options.asynchronous;

        var query = [];
        for(var key in data){
            // Encode GET data for URI compatibility
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        var getUri = query.length ? '?' + query.join('&') : '';
        this.send(url + getUri, 'GET', null, callback, errorCallback, asynchronous);

    }


    /**
     * POST (USES PREVIOUS SEND METHOD)
     * @param {array} options: associative array with the important parameters :
     * url: string, url where to send the AJAX request
     * data: associative array, data to send
     * callback(response): function, to call when request is successful
     * errorCallback(errorResponse): function, to call when request is unsuccessful; optional (default: print error in console)
     * asynchronous: boolean, whether to make the request asynchronous or not; optional (default: true)
     */
    static post(options){

        var url = options.url,
            data = options.data,
            callback = options.callback,
            errorCallback = options.errorCallback,
            asynchronous = options.asynchronous;

        var query = [];
        for(var key in data){
            // Encode GET data for URI compatibility
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        this.send(url, 'POST', query.join('&'), callback, errorCallback, asynchronous);

    }


}
