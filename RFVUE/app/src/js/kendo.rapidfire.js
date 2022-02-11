var kendoui = {

    tb: function (ctrl) {
       // ctrl.className = 'k-textbox';
        ctrl.style.width = "100%"
    },
    ntb: function (ctrl) {
        ctrl.type = "number";
        ctrl.className = 'k-textbox';
        ctrl.style.width = "100%"
    },
    ucbx: function (ctrl) {
        var elementId = $(ctrl).attr('id');
        var elementText = $(ctrl).attr('rfc-text');
        $(ctrl).after('<label for="' + elementId + '" class="k-checkbox-label">' + (elementText || '') + '</label>')
    },
    dtp: function (ctrl) {
        $(ctrl).attr("disabled", false);
        $(ctrl).closest('span').addClass('k-picker-wrap')
        $(ctrl).parent('div').html(ctrl);
        $(ctrl).kendoDatePicker({
            format: rf.appConfig.format
        });
        $(ctrl).parent('div').closest('span').addClass("width-100");
        $(ctrl).attr("disabled", true);
    },
    ddl: function (ctrl) {
        var controlValue = $(ctrl).val();
        $(ctrl).kendoDropDownList({});
        $(ctrl).val(controlValue);
    },
    mddl: function (ctrl) {
        $(ctrl).parent('div').html(ctrl);
        $(ctrl).kendoMultiSelect({
            autoClose: false,
            dataTextField: "DisplayText",
            dataValueField: "ValueText"
        }).data("kendoMultiSelect");
    },
    urdo: function (ctrl) {
        $(ctrl).addClass('rf-radio-button');
    },
    tp: function (ctrl) {
        $(ctrl).kendoTimePicker({});
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
                return $(ctrl).data("kendoDropDownList").value();
            case 'rf-mddl':
                return $(ctrl).data("kendoMultiSelect").value().dss(',');
            case 'rf-cbx':
                var result = '';
                var itemId = ctrl.getAttribute('id');
                var checkboxItems = $(ctrl).find('[name=' + itemId + ']');
                for (var i = 0; i < checkboxItems.length; i++) {
                    if (checkboxItems[i].checked) {
                        result += ',' + $(checkboxItems[i]).val();
                    }
                }
                return result.substr(1);
            case 'rf-rdo':
                var itemId = ctrl.getAttribute('id');
                return $(ctrl).find('input[name=' + itemId + ']:checked').val();

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
                return $(ctrl).data("kendoDropDownList").value(value);
            case 'rf-mddl':
                return $('#' + $(ctrl).attr('id')).data("kendoMultiSelect").value(typeof (value) == "undefined" ? "" : value.split(','));
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
                return $(ctrl).data("kendoTimePicker").enable(false);
            case 'rf-dtp':
                return $(ctrl).data("kendoDatePicker").enable(false);
            case 'rf-ddl':
                return $(ctrl).data("kendoDropDownList").enable(false);
            case 'rf-mddl':
                return $(ctrl).data("kendoMultiSelect").enable(false);
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
                $(ctrl).data("kendoTimePicker").enable(true);
                $(ctrl).prop('disabled', true);
                return;
            case 'rf-dtp':
                $(ctrl).data("kendoDatePicker").enable(true);
                $(ctrl).prop('disabled', true);
                return;
            case 'rf-ddl':
                return $(ctrl).data("kendoDropDownList").enable(true);
            case 'rf-mddl':
                return $(ctrl).data("kendoMultiSelect").enable(true);
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
    remoteBindForAll: function (selector, url, obj, extraObj, attribute) {
        switch (attribute) {
            case "rf-ddl":
                kendoui.remotebindings.ddl(selector, url, obj, extraObj);
                return;
            case "rf-mddl":
                kendoui.remotebindings.mddl(selector, url, obj, extraObj);
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
                    return kendoui.getValueForAll(element, elementAttributes[j].name);
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
                    kendoui.setValueForAll(element,value, elementAttributes[j].name);
                }
            }
        }
    },
    mapper: {
        uiToModel: function (selector) {
            var result = {};
            var elements = $(selector);
            for (var i = 0; i < appConfig.controlsArray.length; i++) {
                var elementsArray = $(elements).find(appConfig.controlsArray[i]);
                for (var j = 0; j < elementsArray.length; j++) {
                    var itemId = elementsArray[j].getAttribute('id');
                    if (typeof (itemId) == 'undefined' || itemId == '') console.warn('One element has no ID');
                    result[itemId] = kendoui.get(elementsArray[j]);
                }
            }
            return result;
        },
        modelToUI: function (divId, values) {
            var keys = Object.keys(values);
            for (var i = 0; i < keys.length; i++) {
                kendoui.set(divId + " #" + keys[i], values[keys[i]]);
            }
        }
    },
    clear: function (selector, except) {
        var splittedArray = typeof (except)== 'undefined'?[]: except.split(',');
        var elements = $(selector);
        for (var i = 0; i < appConfig.controlsArray.length; i++) {
            var elementsArray = $(elements).find(appConfig.controlsArray[i]);
            for (var j = 0; j < elementsArray.length; j++) {
                var itemId = elementsArray[j].getAttribute('id');
                if (typeof (itemId) == 'undefined' || itemId == '') return console.warn('One element has no ID');
                if (!splittedArray.exists(itemId)) {
                    kendoui.set(selector + " #" + itemId, "");
                }
            }
        }
    },
    disable: function (selector, except) {
        var splittedArray = typeof (except) == 'undefined' ? [] : except.split(',');
        var elements = $(selector);
        for (var i = 0; i < appConfig.controlsArray.length; i++) {
            var elementsArray = $(elements).find(appConfig.controlsArray[i]);
            for (var j = 0; j < elementsArray.length; j++) {
                var attributes = elementsArray[j].attributes;
                for (var k = 0; k < attributes.length; k++) {
                    var attributeSplittedValue = attributes[k].name.split('-');
                    if (attributeSplittedValue[0]== 'rf') {
                        var itemId = elementsArray[j].getAttribute('id');
                        if (typeof (itemId) == 'undefined' || itemId == '') return console.warn('One element has no ID');
                        if (!splittedArray.exists(itemId)) {
                            kendoui.disableForAll(elementsArray[j], attributes[k].name);
                        }
                    }
                }
            }
        }
    },
    enable: function (selector, except) {
        var splittedArray = typeof (except) == 'undefined' ? [] : except.split(',');
        var elements = $(selector);
        for (var i = 0; i < appConfig.controlsArray.length; i++) {
            var elementsArray = $(elements).find(appConfig.controlsArray[i]);
            for (var j = 0; j < elementsArray.length; j++) {
                var attributes = elementsArray[j].attributes;
                for (var k = 0; k < attributes.length; k++) {
                    var attributeSplittedValue = attributes[k].name.split('-');
                    if (attributeSplittedValue[0] == 'rf') {
                        var itemId = elementsArray[j].getAttribute('id');
                        if (typeof (itemId) == 'undefined' || itemId == '') return console.warn('One element has no ID');
                        if (!splittedArray.exists(itemId)) {
                            kendoui.enableForAll(elementsArray[j], attributes[k].name);
                        }
                    }
                }
            }
        }
    },
    remoteBind: function (selector, url, obj, extraObj) {
        var element = $(selector)[0];
        elementAttribute = element.attributes;
        for (var i = 0; i < elementAttribute.length; i++) {
            var elementAttributeSpilitted = elementAttribute[i].name.split("-")[0];
            if (elementAttributeSpilitted == 'rf') {
                kendoui.remoteBindForAll(element, url, obj, extraObj,elementAttribute[i].name);
            }
        }
    },
    remotebindings: {
        ddl: function (ctrl, url, obj, extraObj) {
            var kendoDDLConfigure = {
                optionLabel: "Select ...",
                dataTextField: "DisplayText",
                dataValueField: "ValueText",
                autoBind: true,
                dataSource: {
                    serverFiltering: false,
                    transport: {
                        read: {
                            dataType: "json",
                            url: url,
                            method: "POST",
                            data: obj
                        }
                    }
                }
            };
            if (typeof (extraObj) != 'undefined') {
                var keys = Object.keys(extraObj);
                for (var i = 0; i < keys.length; i++) {
                    kendoDDLConfigure[keys[i]] = extraObj[keys[i]];
                }
            }
            $(ctrl).kendoDropDownList(kendoDDLConfigure);
        },
        mddl: function (ctrl, url, obj, extraObj) {
            rf.api.actionCall(url, 'POST', obj, function (data) {
                if (typeof (data) != 'undefined') {
                    var control = $(ctrl).data('kendoMultiSelect');
                    control.dataSource.data(data);
                }
            });
            
           
        }
    },
}