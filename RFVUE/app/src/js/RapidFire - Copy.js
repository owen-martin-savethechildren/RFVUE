// Beginning of RapidFire Development
// RapidFire version 1.0.0



//*************************************************
//string of Application Configuration
//*************************************************
var appConfig = {
    configure: function (themeKey, format, rootUrl) {
        $(document).ready(function () {
            rf.appConfig.themeKey = themeKey;
            if (format) {
                rf.appConfig.format = format;
            }
            // If Has any root url for API
            if (typeof (rootUrl) != "undefined" || rootUrl != null || rootUrl != "")
                rf.appConfig.rootUrl = rootUrl;
            //UI Render On Application Start
            ui.render();
            //ui.onRenderComplete();

        });
        //$.blockUI({ message: '<img src="/stclib/828.png" />' });
        $(document).ajaxStart($.blockUI).ajaxStop($.unblockUI).ajaxComplete(function () {
        });
    },
    themeKey: "",
    rootUrl: "",
    format: "dd-MMM-yyyy",
    control: ['input', 'select', 'textarea'],
    controlsArray: ["input[type=text]", "input[rf-ntb]", "input[type=number]", "select", "div[rf-cbx]", "div[rf-rdo]"],
    switch: function (themeKey) {
        RF.appConfig.themeKey = themeKey;
        ui.render();
    }
};
//*************************************************
//Ending of Application Configuration
//*************************************************





//*************************************************
//Starting of UI
//*************************************************
var ui = {
    renderComplete: null,

    onRenderComplete: function (callbackFn) {
        
        ui.renderComplete = callbackFn;
    },
    render: function () {
        for (var i = 0; i < appConfig.control.length; i++) {
            var elements = document.getElementsByTagName(appConfig.control[i]);
            ui.masterRender(elements);
        }
        if (ui.renderComplete != null) ui.renderComplete();
        ui.renderComplete = null;

        toastr.options = {
            "closeButton": true,
            "progressBar": true,
            "onclick": null,
        };
    },
    masterRender: function (elements) {
        for (var i = 0; i < elements.length; i++) {
            var elementAttr = elements[i].attributes;
            for (var j = 0; j < elementAttr.length; j++) {
                var attributeName = elementAttr[j].name.split('-');
                if (attributeName[0] === 'rf') {
                    eval(appConfig.themeKey + '.' + attributeName[1] + '(elements[i])');
                    break;
                }
            }
        }
    },
    renderByHtml: function (html) {
        for (var i = 0; i < appConfig.control.length; i++) {
            var elements = $(renderByHtml).find(appConfig.control[i]);
            ui.masterRender(elements);
        }
    },
    get: function (selector) {
        var value;
        eval('value = ' + (appConfig.themeKey || 'kendoui') + '.get(selector)');
        return value;
    },
    set: function (selector, value) {
        eval((appConfig.themeKey || 'kendoui') + '.set(selector,value)');
    },
    mapper: {
        uiToModel: function (divId) {
            var value;
            eval('value = ' + (appConfig.themeKey || 'kendoui') + '.mapper.uiToModel(divId)');
            return value;
        },
        //values as JSON
        modelToUI: function (divId, values) {
            console.log((appConfig.themeKey || 'kendoui') + '.mapper.modelToUI(divId,values)');
            eval((appConfig.themeKey || 'kendoui') + '.mapper.modelToUI(divId,values)');
        }
    },
    clear: function (divId, except) {
        eval('value = ' + (appConfig.themeKey || 'kendoui') + '.clear(divId,except)');
    },
    disable: function (divId, except) {
        eval('value = ' + (appConfig.themeKey || 'kendoui') + '.disable(divId,except)');
    },
    enable: function (divId, except) {
        eval('value = ' + (appConfig.themeKey || 'kendoui') + '.enable(divId,except)');
    },
    remoteBind: function (selector, url, obj, extraObj) {
        eval((appConfig.themeKey || 'kendoui') + '.remoteBind(selector, url, obj,extraObj)');
    },
    event: {
        change: function (selector, callbackFn) {
            $(selector).bind('change',callbackFn);
        },
        input: function (selector, callbackFn) {
            $(selector).bind('oninput',callbackFn);
        },
        addListener: function (selector, eventName, callbackFn) {
            $(selector).bind(eventName, callbackFn);
        }
    },
    message: {
        success: function (messageText) {
            toastr.success(messageText, 'Success');
        },
        info: function (messageText) {
            toastr.info(messageText, 'Information');
        },
        warning: function (messageText) {
            toastr.warning(messageText, 'Warning');
        },
        error: function (messageText) {
            toastr.error(messageText, 'Error');
        },
        showConfirm: function (msg, callbackFn) {
            swal({
                title: "Are you sure?",
                text: msg,
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes",
                closeOnConfirm: false,
                closeOnCancel: true
            },
                function (isConfirm) {
                    swal.close();
                    callbackFn(isConfirm);
                });
        }
    },
    validate: function (divId) {
        var isValid = true;
        $('#' + divId).find(appConfig.controlsArray.dss(',')).each(function (e) {           
            if ($(this).prop('required') && $(this).siblings().not('.PK')) {
                var cVal = ui.get('#' + divId + ' #' + $(this).attr('id'));
                var elParent = $(this).parent();
                if (cVal == "" || cVal == null || cVal == 'undefined') {
                    if (isValid) isValid = false;
                    var errorObject = document.createElement('span');
                    errorObject.className = 'rf-bubble right rf-bubble--bottom--right'; 
                    elParent.append(errorObject);
                    errorObject.innerHTML = 'Required field';
                }
                else {
                    elParent.find('.rf-bubble').each(function () {
                        $(this).remove();
                    });
                }
            }
            else {
                if ($(this).is('div') == true && $(this).attr('required')) {
                    var cVal = ui.get('#' + divId + ' #' + $(this).attr('id'));
                    if (cVal == "" || cVal == null || cVal == 'undefined') {
                        if (isValid) isValid = false;
                        var errorObject = document.createElement('span');
                        errorObject.className = 'rf-bubble left-div rf-bubble--bottom';
                        $(this).append(errorObject);
                        errorObject.innerHTML = 'Required field';
                    }
                    else {
                        $(this).find('.rf-bubble').each(function () {
                            $(this).remove();
                        });
                    }
                }
            }
            
        });
        if (!isValid) rf.ui.message.warning('Some field is required!');
        return isValid;
    }

}
//*************************************************
//Ending of UI
//*************************************************

//*************************************************
// Starting of DB
//*************************************************
var db = {
    save: function (divIdOrApiPacket, controllerName, callbackFn) {
        ui.message.showConfirm('Do you want to save', function (isConfirm) {
            if (isConfirm) { var data = this.prepareDataAndUrl(divIdOrApiPacket, controllerName, 'add'); if (request) api.actionCall(data.url, 'POST', data.apiPacket, callbackFn); }
        });
    },
    update: function (divIdOrApiPacket, controllerName, callbackFn) {
        ui.message.showConfirm('Do you want to update', function (isConfirm) {
            if (isConfirm) { var data = this.prepareDataAndUrl(divIdOrApiPacket, controllerName, 'update'); if (request) api.actionCall(data.url, 'POST', data.apiPacket, callbackFn); }
        });
    },
    delete: function (divIdOrApiPacket, controllerName, callbackFn) {
        ui.message.showConfirm('Do you want to delete', function (isConfirm) {
            if (isConfirm) { var data = this.prepareDataAndUrl(divIdOrApiPacket, controllerName, 'delete'); if (request) api.actionCall(data.url, 'POST', data.apiPacket, callbackFn); }
        });
    },
    get: function (divIdOrApiPacket, controllerName, callbackFn) {
        var data = this.prepareDataAndUrl(divIdOrApiPacket, controllerName, 'GetData');
        if (request) api.actionCall(data.url, 'POST', data.apiPacket, callbackFn);
    },
    prepareDataAndUrl: function (divIdOrApiPacket, controllerName, command) {
        var data = { url: '', apiPacket: '', request: true }
        if (typeof divIdOrApiPacket == 'object') { data.apiPacket = divIdOrApiPacket; }
        else { data.apiPacket = api.getApiPacket(divIdOrApiPacket) }
        data.apiPacket.Command = command;

        if (controllerName != null && controllerName != 'undefined' && controllerName != "") { data.url = "/" + controllerName + "/Command"; }
        else if (typeof divIdOrApiPacket == 'string' && controllerName == null || controllerName == 'undefined') { data.url = "/" + controllerName + "/Command"; }
        else { request = false; console.error('Requiered controllerName as parameter in rf.db.save function!'); }
        return data;
    }
}
//*************************************************
// Ending of DB
//*************************************************


//*************************************************
// Starting of API
//*************************************************
var api = {
    actionCall: function (actionURL, type, jsonObject, callbackFn) {
        $.ajax({
            url: actionURL,
            type: type,
            data: jsonObject,
            dataType: 'json',
            success: function (response, status, jqXHR) {
                if (callbackFn != null || callbackFn != 'undefined') {
                    if (response != null && response.success) callbackFn(response, true);
                    else callbackFn(response, false);
                }
                else {
                    ui.message.success(response.Data);
                }
            },
            error: function (jqXHR, status, error) {
                if (callbackFn != null || callbackFn != 'undefined') {
                    var err = jqXHR.responseText;
                    callbackFn(err, false);
                }
                else {
                    ui.message.error(response.Data);
                }
            }
        });
    },
    getApiPacket: function (modelName, jsonObj) {
        if (divId != null && divId != "" && divId != 'undefinde') {
            var packet = "";
            if (jsonObj != null && jsonObj != 'undefined') { packet = jsonObj }
            else { packet = rf.ui.mapper.uiToModel(modelName) }

            var jsonObject = {
                "ApiPacket": {
                    "Packet": packet
                },
                "PageNo": 0,
                "PageSize": 0,
                "TableName": modelName,
                "Command": "",
                "TotalRecord": 0,
                "UserId": 0
            };
            return jsonObject;
        }
        else {
            console.error('Required div id as  parameter in getAPIPacket function');
            return 0
        }
    }
}
//*************************************************
// Ending of API
//*************************************************


//*************************************************
//Starting of Route
//*************************************************
var oldUrl = '';
var ifHashBasedUrlFired = false;
var route = {
    start: function () {
        $(document).ready(function () {
            var referrer = document.referrer;
            console.log(referrer);
            $("a").click(function (event) {

                var targetAction = event.target;
                var parentLink = $(targetAction).is('a')? $(targetAction): $(targetAction).parent('a');
                var rfRouteAttr = $(parentLink).attr('rf-route');
                var currentRouteUrl = $(parentLink[0]).attr("href");

                if (document.location.href.includes('#')) {
                    history.replaceState(null, null, "");
                    return false;
                }
                
                if (typeof (rfRouteAttr) == 'undefined') {
                    window.location.reload();
                    window.location.href = currentRouteUrl;

                }
                if (typeof (rfRouteAttr) != 'undefined') {
                    window.history.pushState(null, null, currentRouteUrl);
          
                    //$.bbq.pushState({ url: currentRouteUrl });
                    //window.history.pushState({ urlPath: currentRouteUrl }, "", currentRouteUrl);
                    route.loadToUrl(currentRouteUrl);
                   //// window.location.pathname = currentRouteUrl;
                }
                else{
                    if (currentRouteUrl != '') {
                        window.location.href = currentRouteUrl;
                    }
                }
                
                // console.log(targetAction.attributes);
                // var getAttribute = $(targetAction).attr("rf-route");
                // var href = $(this).attr("href");
                // if (href) {
                //     $.bbq.pushState({ url: href });
                //     //window.location.href = href;
                // }
                return false;
            });

             //Bind a callback that executes when document.location.hash changes.
            $(window).bind("hashchange", function (e) {
                //// In jQuery 1.4, use e.getState( "url" );
                //var url = $.bbq.getState("url");
                //$("a").each(function () {
                //    var href = $(this).attr("href");
                //    window.history.pushState({ "html": "", "pageTitle": "" }, "", href);
                //});
            });

            // $("a[rf-route]").on("click", function (event) {
            //     event.preventDefault();
            //     var currentRouteUrl = $(this).attr("href");
            //     route.loadToUrl(currentRouteUrl);
            //     if (!currentRouteUrl.includes('#')) window.history.pushState({ "html": "", "pageTitle": "" }, "", currentRouteUrl);
            // });
        });
        
        window.onpopstate = function (event) {
            //event.preventDefault();
        //    event.stopPropagation();
        //    //if (typeof (event.target.$emodal) !== 'undefined' && oldUrl !== '') {
        //    //    if (ifHashBasedUrlFired) {
        //    //        route.loadToUrl(oldUrl);
        //    //        window.history.pushState({ "html": "", "pageTitle": "" }, "", oldUrl);
        //    //        ifHashBasedUrlFired = false;
        //    //        oldUrl = '';
        //    //        return;
        //    //    }
        //    //}
            if (!document.location.href.includes('#')) {
                var d = event.state;
                route.loadToUrl(document.location.href);//document.location.href);

                return false;
            }

           
        };
       
        
    },
    redirectToAction: function () {

    },
    loadToUrl(currentRouteUrl) {
        $.ajax({
            url: currentRouteUrl,
            type: "GET",
            beforeSend: function (xhr) { xhr.setRequestHeader('X-SPA', 'YES'); },
            success: function (response) {
                $("#main").html(response);
                ui.render();
            }
        });
    }
};
//*************************************************
//Ending of Route
//*************************************************

//Prototypings Start
//Method is for delimeter separated string
Array.prototype.dss = function (delimeter) {
    var result = '';
    for (var i = 0; i < this.length; i++) result += delimeter + this[i];
    return result.substr(1);
};

// Exist in the array
Array.prototype.exists = function (value) {
    for (var i = 0; i < this.length; i++) {
        if (value == this[i]) {
            return true;
        }
    }
    return false;
}

var rf = {
    appConfig: appConfig,
    route: route,
    ui: ui,
    db: db,
    api: api
};






