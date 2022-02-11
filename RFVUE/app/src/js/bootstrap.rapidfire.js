

var bootstrapui = {
    tb: function (ctrl) {
        // ctrl.className = 'k-textbox';
        ctrl.style.width = "100%";
        ctrl.class = "form-control";
    },
    ntb: function (ctrl) {
        ctrl.type = "number";
        ctrl.className = 'form-control';
        ctrl.style.width = "100%";
    },
    ucbx: function (ctrl) {
        var elementId = $(ctrl).attr('id');
        var elementText = $(ctrl).attr('rfc-text');
        $(ctrl).after('<label for="' + elementId + '" class="k-checkbox-label">' + (elementText || '') + '</label>')
    },
    dtp: function (ctrl) {
        $(ctrl).parent().addClass('input-group');
        $(ctrl).datepicker({
            format: "dd-M-yyyy"
        });
        var htmlToAppend = '<div class="input-group-append">' +
            '<span class="input-group-text">' +
            '<i class="fa fa-calendar"></i>' +
            '</span >' +
            '</div >';
        //$(ctrl).insert(htmlToAppend);
        $(ctrl).addClass('dtp-hidden');
        $(ctrl).next('.input-group-append').on('click', function () {
            var visible = $(ctrl).datepicker("widget").is(":visible");
            $(ctrl).data('datepicker').show();
        });
    },
    ddl: function (ctrl) {
        if ($(ctrl).attr('rf-ddl') == '') {
            $(ctrl).select2({
                placeholder: 'Select an option',
                width: '100%',
                theme: 'bootstrap4'
            });
        }
        $(ctrl).on('change', function () { $(ctrl).valid(); });
    },
    mddl: function (ctrl) {
        if ($(ctrl).attr('rf-mddl') == '') {
            //ctrl.setAttribute("multiple", "multiple");
            $(ctrl).select2({
                placeholder: 'Select an option',
                width: '100%'
            });
        }
        $(ctrl).on('change', function () { $(ctrl).valid(); });

    },
    urdo: function (ctrl) {
        $(ctrl).addClass('rf-radio-button');
    },
    tp: function (ctrl) {
        $(ctrl).timepicker();
        $(ctrl).addClass('form-control');
    },
    getValueForAll: function (ctrl, attributename) {
        switch (attributename) {
            case 'rf-tb':
                return $(ctrl).val();
            case 'rf-ntb':
                return $(ctrl).val();
            case 'rf-dtp':
                return $(ctrl).val();
            case 'rf-tp':
                return $(ctrl).val();
            case 'rf-ddl':
                var ddlValue = $(ctrl).val();
                if (ddlValue) {
                    return $(ctrl).val();
                }
                return null;
            case 'rf-mddl':
                var mddlValue = $(ctrl).val();
                if (mddlValue) {
                    return mddlValue.dss(',');
                }
                return null;
            case 'rf-cbx':
                if ($(ctrl).is('div')) {
                    var result = '';
                    var itemId = ctrl.getAttribute('id');
                    var checkboxItems = $(ctrl).find('[name=' + itemId + ']');
                    for (var i = 0; i < checkboxItems.length; i++) {
                        if (checkboxItems[i].checked) {
                            result += ',' + $(checkboxItems[i]).val();
                        }
                    }
                    return result.substr(1);
                }
                else if ($(ctrl).is('input')) {
                    if ($(ctrl)[0].checked)
                        return true;
                    else return false;
                }
            case 'rf-rdo':
                var value = ctrl.getAttribute('id');
                return $(ctrl).find('input[name=' + value + ']:checked').val();

        }
        console.error('Control not found');
        return '';
    },
    setValueForAll: function (ctrl, value, attributeName) {
        switch (attributeName) {
            case 'rf-tb':
                return $(ctrl).val(value);
            case 'rf-ntb':
                return $(ctrl).val(value);
            case 'rf-tp':
                return $(ctrl).val(value);
            case 'rf-dtp':
                return $(ctrl).val(value);
            case 'rf-ddl':
                return $(ctrl).val(value);
            case 'rf-mddl':
                return $(ctrl).val(value.dss());
            case 'rf-cbx':
                var result = '';
                var itemId = ctrl.getAttribute('id');
                var checkboxItems = $(ctrl).find('[name=' + itemId + ']');
                if (typeof (value) != "undefined") {
                    var arrayValue = value.split(',');
                    for (var i = 0; i < checkboxItems.length; i++) {
                        var checkbox = checkboxItems[i];
                        var checkboxValue = $(checkbox).val();
                        if (arrayValue.exists(checkboxValue)) {
                            $(checkbox).prop('checked', true);
                        } else $(checkbox).prop('checked', false);

                    }
                }
                return;
            case 'rf-rdo':
                var result = '';
                var itemId = ctrl.getAttribute('id');
                var checkboxItems = $(ctrl).find('[name=' + itemId + ']');
                if (typeof (value) != "undefined") {
                    var arrayValue = value.split(',');
                    for (var i = 0; i < checkboxItems.length; i++) {
                        var checkbox = checkboxItems[i];
                        var checkboxValue = $(checkbox).val();
                        if (arrayValue.exists(checkboxValue)) {
                            $(checkbox).prop('checked', true);
                        } else $(checkbox).prop('checked', false);
                    }
                }
                return;

        }
        console.error('Control not found');
        return '';
    },
    disableForAll: function (ctrl, attributeName) {
        switch (attributeName) {
            case 'rf-tb':
                return $(ctrl).prop("disabled", true);
            case 'rf-ntb':
                return $(ctrl).prop('disabled', true);
            case 'rf-tp':
                return $(ctrl).prop("disabled", true);
            case 'rf-dtp':
                return $(ctrl).prop("disabled", true);
            case 'rf-ddl':
                return $(ctrl).prop("disabled", true);
            case 'rf-mddl':
                return $(ctrl).prop("disabled", true);
            case 'rf-cbx':
                var itemId = ctrl.getAttribute('id');
                $(ctrl).find('[name=' + itemId + ']').prop('disabled', true);
                return;
            case 'rf-rdo':
                var itemId = ctrl.getAttribute('id');
                $(ctrl).find('[name=' + itemId + ']').prop('disabled', true);
                return;

        }
        console.error('Control not found');
        return '';
    },
    enableForAll: function (ctrl, attributeName) {
        switch (attributeName) {
            case 'rf-tb':
                return $(ctrl).prop("disabled", false);
            case 'rf-ntb':
                return $(ctrl).prop('disabled', false);
            case 'rf-tp':
                $(ctrl).prop('disabled', false);
                return;
            case 'rf-dtp':
                $(ctrl).prop('disabled', false);
                return;
            case 'rf-ddl':
                return $(ctrl).prop('disabled', false);
            case 'rf-mddl':
                return $(ctrl).prop('disabled', false);
            case 'rf-cbx':
                var itemId = ctrl.getAttribute('id');
                $(ctrl).find('[name=' + itemId + ']').prop('disabled', false);
                return;
            case 'rf-rdo':
                var itemId = ctrl.getAttribute('id');
                $(ctrl).find('[name=' + itemId + ']').prop('disabled', false);
                return;

        }
        console.error('Control not found');
        return '';
    },
    remoteBindForAll: function (selector, url, obj, extraObj, serverflter, eventName, callbackFn, attribute) {
        switch (attribute) {
            case "rf-ddl":
                bootstrapui.remotebindings.ddl(selector, url, obj, extraObj, serverflter, eventName, callbackFn);
                return;
            case "rf-mddl":
                bootstrapui.remotebindings.mddl(selector, url, obj, extraObj, serverflter, eventName, callbackFn);
                return;
        }
    },
    get: function (selector) {
        var element = $(selector)[0];
        if (element != null) {
            var elementAttributes = element.attributes;
            for (var j = 0; j < elementAttributes.length; j++) {
                var attributeName = elementAttributes[j].name.split('-');
                if (attributeName[0] === 'rf') {
                    return bootstrapui.getValueForAll(element, elementAttributes[j].name);
                }
            }
        }
        else {
            console.error("Your selected item not found : " + selector);
        }
    },
    set: function (selector, value) {
        element = $(selector)[0];
        if (element != null) {
            var elementAttributes = element.attributes;
            for (var j = 0; j < elementAttributes.length; j++) {
                var attributeName = elementAttributes[j].name.split('-');
                if (attributeName[0] === 'rf') {
                    bootstrapui.setValueForAll(element, value, elementAttributes[j].name);
                }
            }
        }
    },
    mapper: {
        uiToModelx: function (selector) {
            var master = {};
            $(selector).each(function () {
                master = ui.mapper.uiToModel($(this).find('rf-data-master'));
                $('rf-data-details').each(function () {
                    var detailName = $(this).attr('rf-data-details');
                    master[detailName] = ui.mapper.uiToModel($(this).find(detailName + ['rf-data-master']));
                });
            });
            return master;
        },
        uiToModel: function (selector) {
            var result = {};
            var elements = $(selector);
            for (var i = 0; i < config.controlsArray.length; i++) {
                var elementsArray = $(elements).find(config.controlsArray[i]);
                for (var j = 0; j < elementsArray.length; j++) {
                    var itemId = elementsArray[j].getAttribute('id');
                    if (typeof (itemId) == 'undefined' || itemId === '') console.warn('One element has no ID');
                    result[itemId] = bootstrapui.get(elementsArray[j]);
                }
            }
            for (var j = 0; j < config.detailsControls.length; j++) {
                var detailsControls = $(selector).find(config.detailsControls[j]);
                var modelName = '';
                if (detailsControls.length > 0) {
                    for (var k = 0; k < detailsControls.length; k++) {
                        modelName = $(detailsControls[k]).attr('rf-data-details');
                        var rows = $(detailsControls[k]).find('[rf-details-row]');


                        var detailsObj = [];

                        for (var m = 0; m < rows.length; m++) {
                            datamodels = $(rows[m]).find('[rf-data-model]');
                            var detailsResult = {};
                            for (var n = 0; n < datamodels.length; n++) {
                                detailsResult[$(datamodels[n]).attr('rf-data-model')] = $(rows[m]).find('[rf-data-model=' + $(datamodels).attr('rf-data-model') + ']').text();
                            }
                            console.log(detailsResult);
                            detailsObj.push(detailsResult);
                        }
                        result[modelName] = detailsObj;
                    }
                }

            }
            return result;
        },
        modelToUI: function (divId, values) {
            var keys = Object.keys(values);
            for (var i = 0; i < keys.length; i++) {
                bootstrapui.set(divId + " #" + keys[i], values[keys[i]]);
            }
        }
    },
    clear: function (selector, except) {
        var splittedArray = typeof (except) == 'undefined' ? [] : except.split(',');
        var elements = $(selector);
        for (var i = 0; i < config.controlsArray.length; i++) {
            var elementsArray = $(elements).find(config.controlsArray[i]);
            for (var j = 0; j < elementsArray.length; j++) {
                var itemId = elementsArray[j].getAttribute('id');
                if (typeof (itemId) == 'undefined' || itemId == '') return console.warn('One element has no ID');
                if (!splittedArray.exists(itemId)) {
                    bootstrapui.set(selector + " #" + itemId, "");
                }
            }
        }
    },
    disable: function (selector, except) {
        var splittedArray = typeof (except) == 'undefined' ? [] : except.split(',');
        var elements = $(selector);
        for (var i = 0; i < config.controlsArray.length; i++) {
            var elementsArray = $(elements).find(config.controlsArray[i]);
            for (var j = 0; j < elementsArray.length; j++) {
                var attributes = elementsArray[j].attributes;
                for (var k = 0; k < attributes.length; k++) {
                    var attributeSplittedValue = attributes[k].name.split('-');
                    if (attributeSplittedValue[0] == 'rf') {
                        var itemId = elementsArray[j].getAttribute('id');
                        if (typeof (itemId) == 'undefined' || itemId == '') return console.warn('One element has no ID');
                        if (!splittedArray.exists(itemId)) {
                            bootstrapui.disableForAll(elementsArray[j], attributes[k].name);
                        }
                    }
                }
            }
        }
    },
    enable: function (selector, except) {
        var splittedArray = typeof (except) == 'undefined' ? [] : except.split(',');
        var elements = $(selector);
        for (var i = 0; i < config.controlsArray.length; i++) {
            var elementsArray = $(elements).find(config.controlsArray[i]);
            for (var j = 0; j < elementsArray.length; j++) {
                var attributes = elementsArray[j].attributes;
                for (var k = 0; k < attributes.length; k++) {
                    var attributeSplittedValue = attributes[k].name.split('-');
                    if (attributeSplittedValue[0] == 'rf') {
                        var itemId = elementsArray[j].getAttribute('id');
                        if (typeof (itemId) == 'undefined' || itemId == '') return console.warn('One element has no ID');
                        if (!splittedArray.exists(itemId)) {
                            bootstrapui.enableForAll(elementsArray[j], attributes[k].name);
                        }
                    }
                }
            }
        }
    },
    remoteBind: function (selector, url, obj, extraObj, serverflter, eventName, callbackFn) {
        var element = $(selector)[0];
        elementAttribute = element.attributes;
        for (var i = 0; i < elementAttribute.length; i++) {
            var elementAttributeSpilitted = elementAttribute[i].name.split("-")[0];
            if (elementAttributeSpilitted == 'rf') {
                bootstrapui.remoteBindForAll(element, url, obj, extraObj, serverflter, eventName, callbackFn, elementAttribute[i].name);
            }
        }
    },
    remotebindings: {
        ddl: function (ctrl, url, obj, extraObj, serverFilterFn, eventName, callbackFn) {
            var controlValue = $(ctrl).val();
            if (typeof (serverFilterFn) == 'undefined') {
                api.actionCall(url, "GET", obj, function (data) {
                    var dataobj = [];
                    for (var i = 0; i < data.length; i++) {
                        dataobj[i] = {
                            id: data[i]["ValueText"],
                            text: data[i]["DisplayText"]
                        };
                    }
                    $(ctrl).select2({ data: dataobj });
                    $(ctrl).val(controlValue);
                });
            }
            else {
                $(ctrl).select2({
                    ajax: {
                        url: url,
                        delay: 500,
                        data: function (params) {
                            return {
                                searchString: params.term, // search term
                                page: 1
                            };
                        },
                        processResults: function (data, params) {
                            var result = {
                                results: [],
                                "pagination": {
                                    "more": false
                                }
                            };
                            for (var i = 0; i < data.length; i++) {
                                result.results[i] = {
                                    id: data[i]["ValueText"],
                                    text: data[i]["DisplayText"]
                                };
                            }
                            return result;
                        }
                    },

                });
                if (eventName != null || callbackFn != null) {
                    $(ctrl).bind(eventName, callbackFn);
                }
            }

        },
        mddl: function (ctrl, url, obj, extraObj, serverFilterFn, eventName, callbackFn) {
            var controlValue = $(ctrl).val();
            $(ctrl).empty();
            if (typeof (serverFilterFn) == 'undefined') {
                api.actionCall(url, "GET", obj, function (data) {
                    var dataobj = [];
                    for (var i = 0; i < data.length; i++) {
                        dataobj[i] = {
                            id: data[i]["ValueText"],
                            text: data[i]["DisplayText"]
                        };
                    }
                    $(ctrl).select2({ data: dataobj });
                });
            }
            else {
                $(ctrl).select2({
                    ajax: {
                        url: url,
                        data: function (params) {
                            return {
                                searchString: params.term, // search term
                                page: 1
                            };
                        },
                        processResults: function (data, params) {
                            var result = {
                                results: [],
                                "pagination": {
                                    "more": false
                                }
                            };
                            for (var i = 0; i < data.length; i++) {
                                result.results[i] = {
                                    id: data[i]["ValueText"],
                                    text: data[i]["DisplayText"]
                                };
                            }
                            return result;
                        }
                    },

                });
                if (eventName != null || callbackFn != null) {
                    $(ctrl).bind(eventName, callbackFn);
                }
            }
        }
    },
}