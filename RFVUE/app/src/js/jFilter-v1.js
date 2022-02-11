
function jFilter(filterBase, caption, tag) {
    this.filterBase = '#' + filterBase;
    this.base = 'j-Filter-Base-Panel';
    this.caption = caption;
    this.tag = tag;

    this.init();
}

jFilter.prototype.init = function () {
    var html = '<div class="row" style="font-weight: 500;">' +
        '    <div class="col-md-3" style="padding-right: 0;">' +
        '        <div class="card-style">' +
        '            <div class="md-card-content j-filter-caption">' +
        '                <span id="jfilterCaption" style="color:#c20123; font-size:36px;padding-bottom:5px;"></span>' +
        '                <span id="jfilterTag" style="font-size: 12px;"></span>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '    <div class="col-md-9">' +
        '        <div class="card-style">' +
        '            <div class="md-card-content" style="padding:8px;">' +
        '                <div class="row">' +
        '                    <div class="col-md-10" style="line-height:12px;">' +
        '                        <span style="color:#c20123; font-size:16px;padding-bottom:0px;">Selected Filters</span><br />' +
        '                        <div style="height:3px;"></div>' +
        '                        <span id="jfilterSelectedText" style="font-size:12px;line-height: 14px;">' +
        '                            <snap class="display-text-bold">No filters selected. Click filter icon and select appropriate filters.</snap>' +
        '                        </span>' +
        '                    </div>' +
        '                    <div class="col-md-2" style="text-align: -webkit-right;">' +
        '                        <div class="j-grid-dropdown123">' +
        '                            <div class="search-circle"><img onclick="toggleFilter(event)" class="dropbtn" style="width:32px;" src="../Images/search.png" /></div>' +
        '                            <div id="j-Filter-DropDown-Content" class="j-grid-dropdown-content" style="">' +
        '                                <div class="row" style="padding-right: 5px;">' +
        '                                    <div style="width:100%">' +
        '                                        <span style="font-weight: bold;margin-left: 16px;font-size: 13px;">Select Filters</span>' +
        '                                        <img class="j-filter-close-icon" style="width: 22px;float:right;" src="../Images/cancel.png" onclick="toggleFilter(event)" />' +
        '                                    </div>' +
        '                                    <div class="col-md-12 j-filter-base" id="j-Filter-Base-Panel">' +
        '                                    </div>' +
        '                                    <div style="padding-right:15px;padding-top:8px;width:100%;">' +
        '                                        <div class="col-md-3" style="float:left">' +
        '                                            <span id="jfClose" onclick="toggleFilter(event)" class="j-filter-bottom-base">Close</span>' +
        '                                        </div>' +
        '                                        <div class="col-md-9" style="text-align:right;padding-right:0;float:left;">' +
        '                                            <span id="jfClear" class="j-filter-bottom-base" onclick="clearFilter(event)">Clear Filters</span>&nbsp;&nbsp;' +
        '                                            <span id="jfSearch" class="j-filter-bottom-base" style="margin-right: -3px;" onclick="onSearchClick(event)">Search</span>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                </div>' +
        '                            </div>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';


    //$(this.filterBase).html(html);
    //$('#jfilterCaption').html(this.caption);
    //$('#jfilterTag').html(this.tag);
    //var count = 0;
    $('.width-dynamic').on('input', function () {
        var inputWidth = $(this).textWidth();
        $(this).css({
            width: inputWidth + 55
        });
        //count++;
        //console.log(count);
    }).trigger('input');
}

jFilter.prototype.setCaption = function (caption) {
    this.caption = caption;
    $('#jfilterCaption').html(this.caption);
}

jFilter.prototype.addEmpty = function () {
    var html = '<div style="height:5px;"></div>';
    $('#' + this.base).append(html);
}

jFilter.prototype.addText = function (items, className) {
    for (var i = 0; i < items.length; i++) {
        var html = '<div class="' + className + '"><label class="j-grid-label">' + splitUpper(items[i]) + '</label><input id="' + items[i] +
            '" class="k-textbox" style="width: 100%;min-width: 100%;" /></div>';
        $('#' + this.base).append(html);
    }
}

jFilter.prototype.addTextNumeric = function (items, className) { //type
    for (var i = 0; i < items.length; i++) {
        var html = '<div class="' + className + '"><label class="j-grid-label">' + splitUpper(items[i]) + '</label><input id="' + items[i] +
            '" class="k-textbox" style="width: 100%;min-width: 100%;" /></div>';
        $('#' + this.base).append(html);
    }
}

jFilter.prototype.addDate = function (items, className) {
    for (var i = 0; i < items.length; i++) {
        var html = '<div class="' + className + '"><label class="j-grid-label">' + splitUpper(items[i]) + '</label><input id="' +
            items[i] + '" style="width: 100%;min-width: 100%;" /></div>';
        $('#' + this.base).append(html);
        $("#" + items[i]).kendoDatePicker({
            format: "dd-MMM-yyyy"
        });
    }
}

jFilter.prototype.addDropDownJson = function (items, className) {
    for (var i = 0; i < items.length; i++) {
        var html = '<div class="' + className + '"><label class="j-grid-label">' + splitUpper(items[i][0]) + '</label><input id="' +
            items[i][0] + '" style="width: 100%;" /></div">';
        $('#' + this.base).append(html);
        $("#" + items[i][0]).kendoDropDownList({
            dataTextField: "text",
            dataValueField: "value",
            dataSource: items[i][1],
            optionLabel: "SELECT"
        });
        $("#" + items[i][0]).data('kendoDropDownList').value(0);
    }
}

jFilter.prototype.addDropDownAction = function (items, className) {
    for (var i = 0; i < items.length; i++) {
        var html = '<div class="' + className + '"><label class="j-grid-label">' + splitUpper(items[i]) + '</label><input id="' +
            items[i] + '" style="width: 100%;margin-bottom: 3px;" /></div>';

        //var x = ''; if (items[i] == 'District') x = 'District'; else x = 'Upazila';

        $('#' + this.base).append(html);
        $("#" + items[i]).kendoDropDownList({
            optionLabel: "SELECT",
            dataTextField: "Text",
            dataValueField: "Value",
            filter: "contains",
            dataSource: { type: "JSON", transport: { read: { url: '/Filter/Get' + items[i] } } }, //  '@Url.Action("'+items[i][1]+'", "JGrid")' }
            height: '300'
            // template: "<div style=\"padding:5px;line-height:18px;font-size:12px; color:black;border-bottom-style:dotted; border-bottom-color:##2CAFBA; border-bottom-width:1px;  \"> #: data.DistrictName #</div>",
            // open: adjustDropDownWidth
        }).data("kendoDropDownList");
    }
}

jFilter.prototype.addDropDownCascade = function (item, cascadeFrom, actionName, json, filterField, className) {
    var jObj = {};


    var html = '<div class="' + className + '"><label class="j-grid-label">' + splitUpper(item) + '</label><input id="' +
        item + '" style="width: 100%;margin-bottom: 3px;" /></div>';
    $('#' + this.base).append(html);
    console.log(json);
    $("#" + item).kendoDropDownList({
        autoBind: false,
        cascadeFrom: cascadeFrom,
        optionLabel: "SELECT",
        dataTextField: "Text",
        dataValueField: "Value",
        filter: "startswith",
        dataSource: {
            type: "JSON",
            serverFiltering: true,
            transport: {
                read: {
                    url: actionName,
                    data: function (e) {
                        var inputValue = "";
                        for (var i = 0; i < json.length; i++) {
                            jObj[json[i][0]] = $("#" + json[i][1]).val();
                        }

                        if (e.filter.filters.length > 1) {
                            inputValue = this.data.arguments[0].filter.filters[1].value;
                        }
                        jObj[filterField] = inputValue;
                        return jObj; //eval(json);//{ DistrictCode: $("#District").val() ,UpazilaName:inputValue};
                    }
                }
            }
        },
        height: '300'//,
        // template: "<div style=\"padding:5px;line-height:18px;font-size:12px; color:black;border-bottom-style:dotted; border-bottom-color:##2CAFBA; border-bottom-width:1px;  \"> #: data.UpazilaName #</div>",
    }).data("kendoDropDownList");

}

jFilter.prototype.addMultiJson = function (items, className) {
    var html = '<div class="' + className + '"><label class="j-grid-label">' + splitUpper(items) + '</label><input id="' +
        items + '"  style="width: 100%;margin-bottom: 3px;" /></div>';
    $('#' + items).append(html);
    $("#multiselect").kendoMultiSelect({
        dataTextField: "ProductName",
        dataValueField: "ProductID",
        dataSource: {
            transport: {
                read: {
                    dataType: "jsonp",
                    url: "https://demos.telerik.com/kendo-ui/service/Products"
                }
            }
        }
    });
}

jFilter.prototype.addMultiAction = function (items, className) {
    $("#multiselect").kendoMultiSelect({
        dataTextField: "ProductName",
        dataValueField: "ProductID",
        dataSource: {
            transport: {
                read: {
                    dataType: "jsonp",
                    url: "https://demos.telerik.com/kendo-ui/service/Products"
                }
            }
        }
    });
}

var filterOnClick;
jFilter.prototype.onClick = function (fn) {
    filterOnClick = fn;
}

var firstShow = true;
jFilter.prototype.setFilter = function (data) {
    setTimeout(function () {
        appetizer.div.setJsonObjectToDiv(data, "j-Filter-Base-Panel");
        displayFilter();
        if (!firstShow) toggleFilter(event); firstShow = false;
    }, 1000);
}

function onSearchClick(event) {
    event.preventDefault();
    displayFilter();
    toggleFilter(event);
}

function displayFilter() {
    var filterHtml = '';
    $("#j-Filter-Base-Panel :input").each(function () {
        if ($(this).attr('data-role') == 'dropdownlist') {
            if ($(this).attr('data-role') !== 'undefined') {
                if ($("#" + $(this).attr('id')).data("kendoDropDownList").text().trim() !== '') {
                    if ($("#" + $(this).attr('id')).data("kendoDropDownList").text() !== 'SELECT') {
                        //filterHtml += '<span class="display-text-bold">' + splitUpper($(this).attr('id')) + ': </span><span class="display-text-green">' +
                        //    $("#" + $(this).attr('id')).data("kendoDropDownList").text() + '</span><span style="font-weight: bold"> || </span>';
                        filterHtml += splitUpper($(this).attr('id')) + ' : ' + $("#" + $(this).attr('id')).data("kendoDropDownList").text() + ' || ';
                    }
                }
            }
        }
        else {
            if ($(this).val() != '') {
                //filterHtml += '<span class="display-text-bold">' + splitUpper($(this).attr('id')) + ': </span><span class="display-text-green">' + $(this).val() +
                //    '</span><span style="font-weight: bold"> || </span>';
                filterHtml += splitUpper($(this).attr('id')) + ' : ' + $(this).val() + ' || ';
            }
        }
    });
    //$('#jfilterSelectedText').html('<span style="font-weight: bold"> || </span>' + filterHtml);
    var filterText = $('#jfilterSelectedText');
    filterText.addClass('width-dynamic');
    filterText.val(filterHtml);
    var inputWidth = $(filterText).textWidth();
    $(filterText).css({
        width: inputWidth + 55
    });

    $(filterText).on('click',function () {
        this.setSelectionRange(0, this.value.length);
    });


    var json = appetizer.div.getJsonObjectFromDiv('j-Filter-Base-Panel', '');
    filterOnClick(json);
    lastFilter = json;
}

function clearFilter(e) {
    e.preventDefault();
    $("#j-Filter-Base-Panel :input").each(function () {
        if ($(this).attr('data-role') == 'dropdownlist') {
            if ($(this).attr('data-role') !== 'undefined') {
                if ($("#" + $(this).attr('id')).data("kendoDropDownList").text().trim() !== '') {
                    if ($("#" + $(this).attr('id')).data("kendoDropDownList").text() !== 'SELECT') {
                        $("#" + $(this).attr('id')).data("kendoDropDownList").value(0);
                    }
                }
            }
        }
        else {
            $(this).val('');
        }
    });
}

var lastFilter;
function toggleFilter(event) {
    event.preventDefault();
    //if (lastFilter != null) {
    //    appetizer.div.setJsonObjectToDiv(lastFilter, "j-Filter-Base-Panel");
    //    displayFilter();
    //}
    $('#j-Filter-DropDown-Content').toggle();
    if (document.getElementById("j-Filter-DropDown-Content").style.display.includes('block')) {
        //lastFilter = appetizer.div.getJsonObjectFromDiv('j-Filter-Base-Panel', '');
        if (lastFilter != null) appetizer.div.setJsonObjectToDiv(lastFilter, "j-Filter-Base-Panel");
    }
}

var customLabelCaption = {};

function splitUpper(text) {
    var label = customLabelCaption[text];
    if (label == '' || label === undefined) return text.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
    else return label;
}

jFilter.prototype.setCustomLabel = function (value) {
    for (var i = 0; i < value.length; i++) {
        var tok = value[i].split(':');
        if (tok.length > 1) customLabelCaption[tok[0]] = tok[1];
    }
}

function adjustDropDownWidth(e) {
    var listContainer = e.sender.list.closest(".k-list-container");
    listContainer.width(listContainer.width() + kendo.support.scrollbar());
}


$.fn.textWidth = function (text, font) {
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
    $.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));
    return $.fn.textWidth.fakeEl.width();
};

function inputWidth(elem, minW, maxW) {
    elem = $(this);
    console.log(elem)
}

//recursive for action call dropdown

//window.onclick = function (event) {
//    if (!event.target.matches('.dropbtnx')) {
//        var dropdowns = document.getElementsByClassName("dropdown-contentx");
//        var i;
//        for (i = 0; i < dropdowns.length; i++) {
//            var openDropdown = dropdowns[i];
//            if (openDropdown.classList.contains('show')) {

//                var id = $(event.target).attr('id') === undefined ? '' : $(event.target).attr('id');

//                if (!id.includes('base')) {
//                    id = $(event.target.parentElement).closest('div').attr('id') === undefined ? '' : $(event.target.parentElement).closest('div').attr('id').attr('id');
//                    if (!id.includes('base') &&
//                        !$(event.target.parentElement).closest('div').hasClass('k-widget k-calendar'))
//                        openDropdown.classList.remove('show');
//                }
//            }
//        }
//    }
//}