// Beginning of RapidFire Development
// RapidFire version 1.0.0


//*************************************************
//string of Application Configuration
//*************************************************
var config = {
    configure: function (themeKey) { //talk about parms?

        rf.ui.menu.loadMenu();

        $(document).on('ready', function () {
            rf.config.themeKey = themeKey;
            ui.render();
            route.start();
        });

        //$.blockUI.defaults.css = {
        //    padding: 0,
        //    margin: 0,
        //    width: '30%',
        //    top: '40%',
        //    left: '35%',
        //    textAlign: 'center',
        //    cursor: 'wait',
        //};

        //$.blockUI({ message: $('#throbber') });
        //$(document).ajaxStart($.blockUI({ message: $('#throbber') })).ajaxStop($.unblockUI).ajaxComplete(function () {
        //$(document).ajaxStart(function () {
        //    $.blockUI({ message: '<div><svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-square" style="background: none;"><g transform="translate(20 20)"><rect x="-15" y="-15" width="30" height="30" fill="#3be8b0" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.4s" repeatCount="indefinite"/></rect></g><g transform="translate(50 20)"><rect x="-15" y="-15" width="30" height="30" fill="#1aafd0" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.3s" repeatCount="indefinite"/></rect></g><g transform="translate(80 20)"><rect x="-15" y="-15" width="30" height="30" fill="#6a67ce" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.2s" repeatCount="indefinite"/></rect></g><g transform="translate(20 50)"><rect x="-15" y="-15" width="30" height="30" fill="#1aafd0" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.3s" repeatCount="indefinite"/></rect></g><g transform="translate(50 50)"><rect x="-15" y="-15" width="30" height="30" fill="#6a67ce" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.2s" repeatCount="indefinite"/></rect></g><g transform="translate(80 50)"><rect x="-15" y="-15" width="30" height="30" fill="#ffb900" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.1s" repeatCount="indefinite"/></rect></g><g transform="translate(20 80)"><rect x="-15" y="-15" width="30" height="30" fill="#6a67ce" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.2s" repeatCount="indefinite"/></rect></g><g transform="translate(50 80)"><rect x="-15" y="-15" width="30" height="30" fill="#ffb900" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.1s" repeatCount="indefinite"/></rect></g><g transform="translate(80 80)"><rect x="-15" y="-15" width="30" height="30" fill="#fc636b" transform="scale(0.899806 0.899806)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="0s" repeatCount="indefinite"/></rect></g></svg></div>' });
        //}).ajaxStop($.unblockUI);
        //$(document).ajaxComplete(function (event, xhr, settings) {
        //    $.unblockUI();
        //});
    },
    setToolbarFloating: function () {

        var navbar = $("#sticky-tool-bar")[0];
        if (navbar !== null && typeof (navbar) !== 'undefined') {
            var sticky = navbar.offsetTop;

            rf.page.onscroll(function () {
                if (window.pageYOffset >= 5) {
                    navbar.classList.add("sticky");
                    //$('#sticky-tool-bar').css('width', '100%');
                } else {
                    navbar.classList.remove("sticky");
                }
            });
            rf.page.onscroll(function () {
                if (window.pageYOffset >= sticky) {
                    navbar.classList.add("sticky");
                    $('#sticky-tool-bar').css('width', '100%').css('z-index','10');
                } else {
                    navbar.classList.remove("sticky");
                    $('#sticky-tool-bar').css('width', '100%');
                }
            });

            var permission = config.toolbarPermission.split(',');
            if (permission[2] == '0') {
                $('#TBbtnReset').attr("disabled", "disabled").attr('data-skin', 'brand').attr('data-toggle', 'kt-tooltip').attr('data-placement', 'top').attr('data-original-title', 'This is title'); //.attr('data-toggle', 'kt-tooltip').attr('data-placement', 'bottom').attr('data-original-title', 'This is a hover text.');
                //$('#TBbtnReset').attr('title', 'This is a hover text.');
            }
            if (permission[2] == '0')
                $('#TBbtnDelete').attr("disabled", "disabled").attr('data-skin', 'brand').attr('data-toggle', 'kt-tooltip').attr('data-placement', 'top').attr('data-original-title', 'This is title');
            if (permission[3] == '0') {
                $('#TBbtnSave').attr("disabled", "disabled");
                $('#TBbtnGroup').attr("disabled", "disabled");
                //$('#TBbtnSaveAndNext').attr("disabled", "disabled");
                //$('#TBbtnSaveAndExit').attr("disabled", "disabled");
            }
            KTApp.initTooltips();
        }
    },

    rootUrl: "",
    themeKey: "bootstrapui",
    format: "dd-MMM-yyyy",
    pageTags: [""],
    detailsControls: ['[rf-data-details]'],
    control: ['input[rf-tb]', 'input[rf-tp]', 'input[rf-dtp]', 'select[rf-ddl]', 'select[rf-mddl]', 'textarea'],
    controlsArray: ["input[rf-tb]", "input[rf-ntb]", 'input[rf-tp]', 'input[rf-dtp]', "input[type=number]", 'select[rf-mddl]', "select[rf-ddl]", "div[rf-cbx]",'input[rf-cbx]', "div[rf-rdo]"],
    toolbarPermission: "0,0,0,0",
    menuJson: [],
    switch: function (themeKey) {
        RF.config.themeKey = themeKey;
        //ui.render();
    }
};
//*************************************************
//Ending of Application Configuration
//*************************************************

//*************************************************
//Starting of Route
//*************************************************
//var isExternal = false;
var refferer = '';  ///?????????????????? what is this baba?
var route = {
    start: function () {
        $(document).ready(function () {
            //route.navigate(document);
        });

        window.onpopstate = function (event) {
            var isExternal = cookie.get("isExternal"), lastRoute = cookie.get("lastRoute");
            if (isExternal.includes('true')) {
                if (lastRoute != '') if (document.location.href.includes(lastRoute)) window.location.reload();
            }
            if (!document.location.href.includes('#')) {
                route.loadToUrl(document.location.href);
            }
        };
    },
    redirect: function (url, target) {
        var url = document.createElement('a');
        url.href = url;
        if (target) url.target = target;
        url.click();

    },
    back: function () {
        var url = document.createElement('a');
        url.href = document.referrer;
        url.click();
    },
    navigate: function (selector) {
        $(selector || document).find("a").off('click');
        $(selector || document).find("a").click(function (event) {
            event.preventDefault();
            var targetAction = event.target;
            var parentLink = $(targetAction).is('a') ? $(targetAction) : $(targetAction).parent('a');
            var rfRouteAttr = $(parentLink).attr('rf-route');
            var currentRouteUrl = $(parentLink[0]).attr("href");

            if (currentRouteUrl.includes('#')) {
                history.replaceState(null, null, null);
                return;
            }

            if (typeof (rfRouteAttr) != 'undefined') {
                event.preventDefault();
                if (rfRouteAttr == '') window.history.pushState(rfRouteAttr, null, currentRouteUrl);
                route.loadToUrl(currentRouteUrl, rfRouteAttr);

                //{
                //    window.history.pushState(rfRouteAttr, null, currentRouteUrl);
                //}
                //else {
                //    window.history.pushState(rfRouteAttr, null, '');
                //}
                //cookie.set("lastRoute", currentRouteUrl); cookie.set("isExternal", "");
            }
            else {
                if (tool.isValidURL(currentRouteUrl)) {
                    event.preventDefault();
                    window.open(currentRouteUrl, '_blank');
                }
                else {
                    //event.preventDefault();
                    //window.open(currentRouteUrl, '_blank');
                    var actionLink = document.createElement('a');
                    actionLink.href = currentRouteUrl;
                    actionLink.click();
                }
            }
        });
    },
    loadToUrl: function (currentRouteUrl, routeParam) {
        $.ajax({
            url: currentRouteUrl,
            type: "GET",
            beforeSend: function (xhr) { xhr.setRequestHeader('X-SPA', 'YES'); },
            success: function (response, status, xhr) {
                if (routeParam !== '' && typeof (routeParam) != 'undefined') {
                    $("#" + routeParam).html(response);
                    ui.render("#" + routeParam);
                    //route.navigate("#" + routeParam);

                    //var component = $("#main").find('[rf-component="' + routeParam + '"]');
                    //component.html(response);
                    //ui.render(component);
                    //route.navigate(component);
                }
                else {
                    var base = $("[rf-content-base]");
                    base.html(response);
                    ui.render(base);
                    // route.navigate(base);
                }
            }
        });
    }
};
//*************************************************
//Ending of Route
//*************************************************

//*************************************************
//string of security
//*************************************************
var security = {
    userRole_x: {
        roleType: function (spinnerOnly = false) {
            rf.api.actionCall('/UserRole/GetRoleTypeList', 'POST', {}, function (data) {
                if (data.length > 0) {
                    html = '';
                    if (spinnerOnly == true) {
                        html = '<option value=0>Select Role Type</option>';
                    }
                    data.forEach(function (item) {
                        selected = spinnerOnly == false ? RoleInfo.RoleType == item.ValueText ? 'selected' : '' : '';
                        html += '<option ' + selected + ' value="' + item.ValueText + '">' + item.DisplayText + '</option>';
                    });
                    $("#roleType").html(html);
                    if (spinnerOnly == false) {
                        security.userRole_x.dropdownImage('#roleType', '#roleImage');
                    }
                }
            }, "#roleType");
            if (spinnerOnly == true) {
                $('body').off("change", '#roleType');
                $('body').on("change", '#roleType', function () {
                    rf.security.userRole_x.roleList();
                });
            }
        },
        dropdownImage: function (dropdownSelecetor, imageSelector) { //changeImg
            $('body').off("change", dropdownSelecetor);
            $('body').on("change", dropdownSelecetor, function () {
                $(imageSelector).attr('src', '/Images/' + $(dropdownSelecetor + ' option:selected').text() + '.png');
            });
            $(imageSelector).attr('src', '/Images/' + $(dropdownSelecetor + ' option:selected').text() + '.png');
        },
        roleSpinner: function () {
            rf.api.actionCall('/UserRole/GetRoleSpinner', 'POST', {}, function (data) {
                if (data.length > 0) {
                    html = '<option value="">Select Role</option>';
                    data.forEach(function (item) {
                        html += '<option value="' + item.ValueText + '">' + item.DisplayText + '</option>';
                    });
                    $("#roleSpinner").html(html);
                }
            }, "#roleSpinner");
            $('body').off("change", '#roleSpinner');
            $('body').on("change", '#roleSpinner', function () {
                rf.security.userRole_x.userList();
            });
        },
        userList: function (pageNo = 1) {
            var SearchText = $('#userSearch').val();
            var GroupId = $('#roleSpinner').val();
            rf.api.actionCall('/UserRole/GetUserList', 'POST', { PageSize: 16, PageNo: pageNo, SearchText: SearchText, GroupId: GroupId }, function (data) {
                html = '';
                totalRecord = 0;
                if (data.length > 0) {
                    data.forEach(function (item) {
                        var ex = SelectedUser.find(x => x.UserId == item.Id);
                        selected = ex != null ? 'selected' : '';
                        html += '<div userId=' + item.Id + ' appUserId=' + item.AppUserId + ' class="rf-steper-user-item animate-zoomIn ' + item.IsActive + ' ' + selected + '"';
                        html += '><img alt="Image" class="rf-steper-user-img" src="/IMAGES/' + item.Gender + '.png">'
                            + '<h4>' + item.Name + '</h4>'
                            + '<h6>' + item.Designation + '</h6>'
                            + '</div>';
                    });
                    totalRecord = data[0].TotalRecord;
                }
                else {
                    html += html += security.userRole_x.getNoData('No User Found', 'UserRole/UserInfoWizard', 'Add User');
                }
                $("#userList").html(html);
                $("#userListHolder #lblTotalRecord").text(totalRecord);
                $('#userListHolder #light-pagination').pagination({
                    items: totalRecord / 16,
                    cssStyle: 'light-theme',
                    currentPage: pageNo,
                    onPageClick: function (pageNumber, e) {
                        security.userRole_x.userList(pageNumber);
                    }
                });
            }, "#userList");
            $('body').off("input", '#userSearch');
            $('body').on("input", '#userSearch', function () {
                rf.security.userRole_x.userList();
            });
            $('body').off("click", '.rf-steper-user-item.uActive');
            $('body').on("click", '.rf-steper-user-item.uActive', function () {
                $(this).toggleClass("selected");
                var mid = $(this).attr('userId');
                if ($(this).hasClass('selected')) {
                    SelectedUser.push({ UserId: mid, AppUserId: $(this).attr('appUserId') });
                }
                else {
                    var ind = SelectedUser.findIndex(x => x.UserId == mid);
                    SelectedUser.splice(ind, 1);
                }
            });
            $('body').off("click", '.UserRoleAllReset');
            $('body').on("click", '.UserRoleAllReset', function () {
                var ct = $(this).text();
                if (ct == 'Select all') {
                    $('.rf-steper-user-item').addClass('selected');
                    $('.rf-steper-user-item.uInactive').removeClass('selected');
                    $(".rf-steper-user-item.selected").each(function () {
                        var mid = $(this).attr('userId');
                        if (SelectedUser.findIndex(x => x.UserId == mid) > -1) {
                            SelectedUser.push({ UserId: mid, AppUserId: $(this).attr('appUserId') });
                        }
                    });
                }
                else {
                    $(".rf-steper-user-item.selected").each(function () {
                        var mid = $(this).attr('userId');
                        var ind = SelectedUser.findIndex(x => x.UserId == mid);
                        SelectedUser.splice(ind, 1);
                    });
                    $('.rf-steper-user-item').removeClass('selected');
                }
            });
            $('body').off("click", '.add-btn');
            $('body').on("click", '.add-btn', function () {
                var new_window = window.open($(this).attr('path'));
                //new_window.onbeforeunload = function () { rf.security.userRole_x.userList(); }
            });
        },
        roleList: function (pageNo = 1) {
            var SearchText = $('#roleSearch').val();
            var RoleType = $('#roleType').val();
            rf.api.actionCall('/UserRole/GetRoleList', 'POST', { PageSize: 16, PageNo: pageNo, SearchText: SearchText, RoleType: RoleType }, function (data) {
                html = '';
                totalRecord = 0;
                if (data.length > 0) {
                    data.forEach(function (item) {
                        var ex = SelectedRole.find(x => x.RoleId == item.Id);
                        selected = ex != null ? 'selected' : '';
                        html += '<div roleId=' + item.Id + ' class="rf-steper-user-item animate-zoomIn ' + item.IsActive + ' ' + selected + '"';
                        html += '><img alt="Image" class="rf-steper-user-img" src="/IMAGES/' + item.RoleType + '.png">'
                            + '<h4>' + item.Name + '</h4>'
                            + '<h6>' + item.RoleType + '</h6>'
                            + '</div>';
                    });
                    totalRecord = data[0].TotalRecord;
                }
                else {
                    html += security.userRole_x.getNoData('No Role Found','UserRole/RoleInfoWizard','Add Role');
                }

                $("#roleList").html(html);
                $("#roleListHolder #lblTotalRecord").text(totalRecord);
                $('#roleListHolder #light-pagination').pagination({
                    items: totalRecord / 16,
                    cssStyle: 'light-theme',
                    currentPage: pageNo,
                    onPageClick: function (pageNumber, e) {
                        security.userRole_x.roleList(pageNumber);
                    }
                });
            }, "#roleList");
            $('body').off("input", '#roleSearch');
            $('body').on("input", '#roleSearch', function () {
                rf.security.userRole_x.roleList();
            });
            $('body').off("click", '.rf-steper-user-item.uActive');
            $('body').on("click", '.rf-steper-user-item.uActive', function () {
                $(this).toggleClass("selected");
                var mid = $(this).attr('roleId');
                if ($(this).hasClass('selected')) {
                    SelectedRole.push({ roleId: mid });
                    api.actionCall('/UserRole/GetRoleWiseAppPermission', 'POST', { RoleId: mid }, function (data) {
                        if (data.length > 0) {
                            data.forEach(function (item) {
                                SelectedAppPermission.push(item);
                            });
                        }
                    }, 'no-loader', false);
                    api.actionCall('/UserRole/GetRoleWiseGEO', 'POST', { RoleId: mid }, function (data) {
                        if (data.length > 0) {
                            data.forEach(function (item) {
                                SelectedGeo.push(item);
                            });
                        }
                    }, 'no-loader', false);
                }
                else {
                    var ind = SelectedRole.findIndex(x => x.RoleId == mid);
                    SelectedRole.splice(ind, 1);
                    SelectedAppPermission = SelectedAppPermission.filter(x => x.RoleId != mid);
                    SelectedGeo = SelectedGeo.filter(x => x.RoleId != mid);
                }
                security.userRole_x.uiList();
                rfgeo.refresh();
            });
            $('body').off("click", '.UserRoleAllReset');
            $('body').on("click", '.UserRoleAllReset', function () {
                var ct = $(this).text();
                if (ct == 'Select all') {
                    $('.rf-steper-user-item').addClass('selected');
                    $('.rf-steper-user-item.uInactive').removeClass('selected');
                    $(".rf-steper-user-item.selected").each(function () {
                        var mid = $(this).attr('roleId');
                        if (SelectedRole.findIndex(x => x.RoleId == mid) > -1) {
                            SelectedRole.push({ RoleId: mid });
                        }
                    });
                }
                else {
                    $(".rf-steper-user-item.selected").each(function () {
                        var mid = $(this).attr('userId');
                        var ind = SelectedRole.findIndex(x => x.RoleId == mid);
                        SelectedRole.splice(ind, 1);
                    });
                    $('.rf-steper-user-item').removeClass('selected');
                }
            });
            $('body').off("click", '.add-btn');
            $('body').on("click", '.add-btn', function () {
                var new_window = window.open($(this).attr('path'));
                //new_window.onbeforeunload = function () { rf.security.userRole_x.roleList(); }
            });
        },
        uiList: function (pageNo = 1) {
            var Id = [];
            $('.jtree-check.checked').each(function () {
                Id.push($(this).closest('li').attr('id'));
            });
            rf.api.actionCall('/UserRole/GetAppResourceList', 'POST', { PageSize: 12, PageNo: pageNo, Id: Id }, function (data) {
                html = '';
                totalRecord = 0;
                if (data.length > 0) {
                    data.forEach(function (item) {
                        selected = SelectedAppPermission.find(x => x.AppResourceId == item.AppResourceId);
                        var sc = '', sr = '', su = '', sd = '';
                        if (selected) {
                            sc = SelectedAppPermission.find(x => x.AppResourceId == item.AppResourceId && x.vCreate == true) == null ? '' : 'selected';
                            sr = SelectedAppPermission.find(x => x.AppResourceId == item.AppResourceId && x.vRead == true) == null ? '' : 'selected';
                            su = SelectedAppPermission.find(x => x.AppResourceId == item.AppResourceId && x.vUpdate == true) == null ? '' : 'selected';
                            sd = SelectedAppPermission.find(x => x.AppResourceId == item.AppResourceId && x.vDelete == true) == null ? '' : 'selected';
                        }
                        html += '<div class="rf-steper-ui-item animate-zoomIn">'
                            + '<div class="rf-steper-ui-badge ' + item.DisplayName.charAt(0).toUpperCase() + '">' + item.DisplayName.charAt(0).toUpperCase() + '</div>'
                            + '<div class="rf-steper-ui-title">' + item.DisplayName.toUpperCase() + '</div>'
                            + '<div class="rf-steper-ui-crud">';
                        if (item.IsModel == "0") {
                            html += '<div AppResourceId=' + item.AppResourceId + ' ParentId=' + item.ParentId + ' permissiontype="r" class="rf-steper-ui-crud-item only-r ' + sr + ' ">R</div>';
                        }
                        else {
                            html += '<div AppResourceId=' + item.AppResourceId + ' ParentId=' + item.ParentId + ' permissiontype="c" class="rf-steper-ui-crud-item ' + sc + '">C</div>'
                                + '<div AppResourceId=' + item.AppResourceId + ' ParentId=' + item.ParentId + ' permissiontype="r" class="rf-steper-ui-crud-item ' + sr + ' ">R</div>'
                                + '<div AppResourceId=' + item.AppResourceId + ' ParentId=' + item.ParentId + ' permissiontype="u" class="rf-steper-ui-crud-item ' + su + '">U</div>'
                                + '<div AppResourceId=' + item.AppResourceId + ' ParentId=' + item.ParentId + ' permissiontype="d" class="rf-steper-ui-crud-item ' + sd + '">D</div>';
                        }
                        html += '</div>'
                            + '</div>';
                    });
                    totalRecord = data[0].TotalRecord;
                }
                else {
                    html += security.userRole_x.getNoData('No App Resource Found', '#', '');
                }
                $("#uiList").html(html);
                $("#uiListHolder #lblTotalRecord").text(totalRecord);
                $('#uiListHolder #light-pagination').pagination({
                    items: totalRecord / 12,
                    cssStyle: 'light-theme',
                    currentPage: pageNo,
                    onPageClick: function (pageNumber, e) {
                        security.userRole_x.uiList(pageNumber);
                    }
                });
                security.userRole_x.updateUIController();

            }, "#uiList");
            $('body').off("click", '.rf-steper-ui-crud-item');
            $('body').on("click", '.rf-steper-ui-crud-item', function () {
                security.userRole_x.selectUI($(this));
            });
            $('body').off("click", '.rf-steper-ui-cruda > div');
            $('body').on("click", '.rf-steper-ui-cruda > div', function () {
                $(this).toggleClass("selected");
                var pt = $(this).attr('permissiontype');
                var ps = $(this).hasClass('selected');
                if (pt == "all") {
                    $('.rf-steper-ui-crud-item').each(function () {
                        security.userRole_x.selectUI($(this), ps);
                    });
                }
                else {
                    $('.rf-steper-ui-crud-item[permissiontype="' + pt + '"]').each(function () {
                        security.userRole_x.selectUI($(this), ps);
                    });
                }
                security.userRole_x.updateUIController();
            });
            $('body').off("click", '.search-bubble');
            $('body').on("click", '.search-bubble', function () {
                $(this).next().toggle();
            });
        },
        selectUI: function (t, psa = null) { //SelectUI
            var ps = false;
            if (psa != null) {
                $(t).removeClass("selected");
                if (psa) {
                    $(t).addClass("selected");
                }
                ps = psa;
            }
            else {
                $(t).toggleClass("selected");
                ps = $(t).hasClass('selected');
            }

            var id = $(t).attr('AppResourceId');
            var pid = $(t).attr('ParentId');
            var pt = $(t).attr('permissiontype');

            var exitem = SelectedAppPermission.filter(x => x.AppResourceId == id && (ps == false || (ps == true && x.RoleId == null)));
            switch (pt) {
                case "c":
                    if (exitem.length > 0) { exitem.forEach(function (item) { item.vCreate = ps; }); }
                    else { SelectedAppPermission.push({ AppResourceId: id, ParentId: pid, vCreate: ps, vRead: false, vUpdate: false, vDelete: false }); }
                    break;
                case "r":
                    if (exitem.length > 0) { exitem.forEach(function (item) { item.vRead = ps; }); }
                    else { SelectedAppPermission.push({ AppResourceId: id, ParentId: pid, vCreate: false, vRead: ps, vUpdate: false, vDelete: false }); }
                    break;
                case "u":
                    if (exitem.length > 0) { exitem.forEach(function (item) { item.vUpdate = ps; }); }
                    else { SelectedAppPermission.push({ AppResourceId: id, ParentId: pid, vCreate: false, vRead: false, vUpdate: ps, vDelete: false }); }
                    break;
                case "d":
                    if (exitem.length > 0) { exitem.forEach(function (item) { item.vDelete = ps; }); }
                    else { SelectedAppPermission.push({ AppResourceId: id, ParentId: pid, vCreate: false, vRead: false, vUpdate: false, vDelete: ps }); }
                    break;
            }
            SelectedAppPermission = SelectedAppPermission.filter(x => x.vCreate == true || x.vRead == true || x.vUpdate == true || x.vDelete == true);
            security.userRole_x.updateUIController();
        },
        updateUIController: function () { // RefreshUIAllBtn
            $('.rf-steper-ui-cruda > div').removeClass('selected');
            if ($('.rf-steper-ui-crud-item').length == $('.rf-steper-ui-crud-item.selected').length) {
                $('.rf-steper-ui-cruda > div').addClass('selected');
            }
            else {
                if ($('.rf-steper-ui-crud-item[permissiontype="c"]').length == $('.rf-steper-ui-crud-item.selected[permissiontype="c"]').length) {
                    $('.rf-steper-ui-cruda > div[permissiontype="c"]').addClass('selected');
                }
                if ($('.rf-steper-ui-crud-item[permissiontype="r"]').length == $('.rf-steper-ui-crud-item.selected[permissiontype="r"]').length) {
                    $('.rf-steper-ui-cruda > div[permissiontype="r"]').addClass('selected');
                }
                if ($('.rf-steper-ui-crud-item[permissiontype="u"]').length == $('.rf-steper-ui-crud-item.selected[permissiontype="u"]').length) {
                    $('.rf-steper-ui-cruda > div[permissiontype="u"]').addClass('selected');
                }
                if ($('.rf-steper-ui-crud-item[permissiontype="d"]').length == $('.rf-steper-ui-crud-item.selected[permissiontype="d"]').length) {
                    $('.rf-steper-ui-cruda > div[permissiontype="d"]').addClass('selected');
                }
            }
        },
        roleReview: function () {
            $('#rvRoleName').html($('[name="Name"]').val());
            $('#rvRoleType').html($('[name="RoleType"] option:selected').text());
            $('#rvStatus').html($('[name="IsActive"]').is(":checked") ? "Active" : "Inactive");
            $('#rvMember').html(SelectedUser.length);
            SelectedAppPermission = SelectedAppPermission.filter(x => x.vCreate == true || x.vRead == true || x.vUpdate == true || x.vDelete == true);
            $('#rvUI').html(SelectedAppPermission.length);
            SelectedGeo = rfgeo.GetSelectedGeo();//comes from plugin**************
            $('#rvGeoDistrict').html(Array.from(new Set(SelectedGeo.map(x => x.DistrictCode))).length);
            $('#rvGeoUpazila').html(Array.from(new Set(SelectedGeo.map(x => x.UpazilaCode))).length);
            $('#rvGeoUnion').html(Array.from(new Set(SelectedGeo.map(x => x.UnionCode))).length);
            $('#rvGeoVillage').html(Array.from(new Set(SelectedGeo.map(x => x.VillageCode))).length);
            $('#rvGeoCenter').html(Array.from(new Set(SelectedGeo.map(x => x.CenterCode))).length);
        },
        userReview: function () {
            $('#rvFullName').html($('[name="FullName"]').val());
            $('#rvUsername').html($('[name="Username"]').val());
            $('#rvEmail').html($('[name="Email"]').val());
            $('#rvPhoneNumber').html($('[name="PhoneNumber"]').val());
            $('#rvGender').html($('[name="Gender"] option:selected').text());
            $('#rvStatus').html($('[name="IsActive"]').is(":checked") ? "Active" : "Inactive");
            $('#rvRole').html(SelectedRole.length);
            SelectedAppPermission = SelectedAppPermission.filter(x => x.vCreate == true || x.vRead == true || x.vUpdate == true || x.vDelete == true);
            $('#rvUI').html(Array.from(new Set(SelectedAppPermission.map(x => x.AppResourceId))).length);
            var xSelectedGeo = rfgeo.GetSelectedGeo();//comes from plugin**************
            $('#rvGeoDistrict').html(Array.from(new Set(xSelectedGeo.map(x => x.DistrictCode))).length);
            $('#rvGeoUpazila').html(Array.from(new Set(xSelectedGeo.map(x => x.UpazilaCode))).length);
            $('#rvGeoUnion').html(Array.from(new Set(xSelectedGeo.map(x => x.UnionCode))).length);
            $('#rvGeoVillage').html(Array.from(new Set(xSelectedGeo.map(x => x.VillageCode))).length);
            $('#rvGeoCenter').html(Array.from(new Set(xSelectedGeo.map(x => x.CenterCode))).length);
        },
        getPopupList: function (e, t, i) {
            if ($(e).text() == "0") return;
            var pp = $(e).offset();
            $('.PopUp .popup-header').html(t);
            $('.PopUp .popup-container').html('');
            $('.PopUp').css({ top: pp.top + 42, left: pp.left - 82, position: 'absolute' });
            $('.PopUp').hide();
            $('.PopUp').show();
            rf.api.actionCall('/UserRole/GetPopupList', 'POST', { Id: i, Title: t }, function (data) {
                totalData = 0;
                totalData = data.length;
                if (totalData > 0) {
                    html = '<table>';
                    data.forEach(function (item) {
                        html += '<tr>' + item.Name + '</tr>';
                    });
                    html += '</table>';
                    $('.PopUp .popup-container').html(html);
                    totalData = totalData > 5 ? 5 : totalData;
                    $('.PopUp .popup-container').slimScroll({
                        height: (totalData * 19) + 15 + 'px',
                        color: '#366cf3',
                        size: '3px'
                    });
                }
            }, '.PopUp .popup-container');
        },
        getNoData: function (message, path, Txt) {
            return '<div class="rf-stepper-noRecords animate-zoomIn"><image src="/Images/not-found.png"/><div>'+message+'</div><button type="button" path="/'+path+'" class="add-btn btn btn-outline-hover-info btn-sm">'+Txt+'</button></div>';
        }

    }
};
//*************************************************
//end of security
//*************************************************


//*************************************************
//string of Page
//*************************************************
var page = {
    onscroll: function (callback) {
        window.addEventListener('scroll', callback);
    }
}
//*************************************************
//ending of Page
//*************************************************

//*************************************************
//string of Process
//*************************************************
var process = {
    delay: function (milisecond, callbackFn) {
        setTimeout(callbackFn, milisecond);
    },
};
//*************************************************
//string of Process
//*************************************************


//*************************************************
//Starting of UI
//*************************************************
var ui = {
    renderComplete: null,

    onRenderComplete: function (callbackFn) {
        this.renderComplete = callbackFn;
    },
    setHtml: function (selector, htmlContent) {
        $(selector).html(htmlContent);
        route.navigate($(selector));
    },
    htmlAppend: function (selector, htmlContent) {
        $(selector).append(htmlContent);
        route.navigate(htmlContent);
    },
    render: function (selector) {
        toastr.options = {
            "closeButton": true,
            "progressBar": true,
            "onclick": null,
        };
        ui.masterRender(selector || document);
    },
    loadTemplate: function (selector, callBackFn) {
        if ($('#rf-templates').length) {
            $('#rf-templates').load("/templates/rf-ui-templates.html", function (response, status, xhr) {
                if (status == "error") {
                    //if (ui.renderComplete != null) ui.renderComplete(); //? if load fails
                    //ui.renderComplete = null;
                    return;
                }
                ui.processRFTag(selector);
                callBackFn(selector);
            });
        } else {
            callBackFn(selector);
        }
    },
    menu: {
        loadMenu: function () {
            var actionLink = "/AppNavigator/LoadMenu";
            api.actionCall(actionLink, 'POST', {}, function (data, status) {
                if (status) {
                    config.menuJson = data.Data;
                    ui.processRFTag();
                }    
                else
                    ui.message.error(data.Data);
            });
        },
        renderMenuItem: function (itemData, isChild) {
            if (itemData.children.length > 0) {
                var $item = (isChild == false) ? $($("#rf-templates").find('#rf-nav-parent-li-template').html()) : $($("#rf-templates").find('#rf-nav-li-withchild-template').html());
                $item.find('#rf-menu-text').html(itemData.DisplayName);
                var subList = $($item.find('#rf-sub-nav'));
                $.each(itemData.children, function () {
                    subList.append(rf.ui.menu.renderMenuItem(this, true));
                });
            }
            else {
                var $item = (isChild == true) ? $($("#rf-templates").find('#rf-nav-child-li-template').html()) : $($("#rf-templates").find('#rf-nav-li-template').html());
                $item.find('#rf-menu-text').html(itemData.DisplayName);
                $item.find('#rf-nav-href').attr('href', itemData.Url);
            }
            return $item;
        },
    },
    processRFTag: function (selector) {

        //menu
        var $menu = $(selector || document).find('[rf-menu]');
        if ($menu != 'undefined') {
            $menu.append($("#rf-templates").find('#rf-menu-template').html());
            $rfnav = $menu.find('#rf-nav');
            $.each(rf.config.menuJson, function () {
                ui.htmlAppend($rfnav, rf.ui.menu.renderMenuItem(this, false));
                //$rfnav.append(
                //    rf.ui.menu.renderMenuItem(this, false)
                //);
            });
            KTLayout.initHeader(); // DOM has crated after page rander
        }
        //menu

        //setting
        var $settings = $(selector || document).find('[rf-settings]');

        

        //setting

        //Page
        var page = $(selector).find('div[rf-page]');
        if ($(page).attr("rf-page") == 'entry') $(page).prepend($("#rf-templates").find('#rf-page-entry-tamplate').html());
        if ($(page).attr("rf-page") == 'list') $(page).prepend($("#rf-templates").find('#rf-page-list-tamplate').html());
        var pageTitle = $(page).attr("rf-page-title");
        var pageTagline = $(page).attr("rf-page-tagline");
        $(selector).find('#rf-page-title').html(pageTitle);
        $(selector).find('#rf-page-tagline').html(pageTagline);
        //page

        //form

        //form

        //etc
        $(selector).find('div[rf-card]').each(function () {
            var card = $(this);
            var content = card.html();
            var title = $(card).attr("rf-card");
            card.empty();
            card.addClass('kt-container').addClass('kt-grid__item').addClass('kt-grid__item--fluid');
            card.css('display', 'block');

            $(card).append($("#rf-templates").find('#rf-card-tamplate').html());
            $(card).find('#rf-card-content').html(content);
            $(card).find('#rf-card-title').html(title);
            if (title == "") {
                $(card).find('.kt-portlet__head:first').css('display', 'none');
                //$(card).find('.kt-portlet:first').css('box-shadow', 'none').css('background-color', 'transparent');
                $(card).find('#rf-card-content:first').css('padding', '0px');
            }
        });
        $(selector).find('div[rf-tab]').each(function () {
            var tab = $(this);
            $(this).append('<div id="tab-masterBase"></div>');
            var base = $('#tab-masterBase');

            var tabTemplate = $("#rf-templates").find('#rf-tab-template').html();
            $(base).html(tabTemplate);

            var activeTabId;
            $(tab).find('switch > item').each(function () {
                var id = $(this).attr("id");
                var caption = $(this).attr("caption");
                var icon = $(this).attr("icon");
                var active = $(this).attr("active");

                var switchTemplate = $("#rf-templates").find('#rf-tab-switch-template').html();
                $(base).find('#rf-tab-switch-items').append(switchTemplate);
                if (typeof active != 'undefined') {
                    $('#rf-tab-switch-items > li > a').addClass('active');
                    activeTabId = id;
                }
                $(base).find('#rf-tab-switch-item-caption').attr('id', 'rf-tab-switch-item-caption-' + id);
                $(base).find('#rf-tab-switch-item-caption-' + id).html(caption);
                $(base).find('#rf-tab-switch-item-caption-' + id).parent().attr('href', '#' + id);

            });
            $('#rf-tab-switch-items > li').unwrap();

            $(tab).find('scene > item').each(function () {
                var id = $(this).attr('switch-item-id');
                //if (id == activeTabId) $('#' + id).addClass('active');
                var contentTemplate = $("#rf-templates").find('#rf-tab-content-template').html();
                $(base).find('#rf-tab-content-items').append(contentTemplate);
                $(base).find('#rf-tab-pane-id').attr('id', id);
                $(base).find('#rf-tab-content').attr('id', 'rf-tab-content-' + id);
                $(base).find('#rf-tab-content-' + id).html($(this).html());
                if (id == activeTabId) $(base).find('#rf-tab-content-' + id).closest('.tab-pane').addClass('active');
            });
            $('#rf-tab-content-items> .tab-pane').unwrap();

            $('switch').remove(); // base > switch
            $('scene').remove();

        });
        $(selector).find('div[rf-stepper]').each(function () {

            var stepper = $(this);
            $(this).append('<div id="stepper-masterBase"></div>');
            var base = $('#stepper-masterBase');

            var tabTemplate = $("#rf-templates").find('#rf-stepper-template').html();
            $(base).html(tabTemplate);

            var doneNav = false, doneCon = false;
            $(stepper).find('switch > item').each(function () {
                var id = $(this).attr("id");
                var caption = $(this).attr("caption");
                var icon = $(this).attr("icon");

                var switchTemplate = $("#rf-templates").find('#rf-stepper-switch-template').html();
                $(base).find('#rf-stepper-switch-items').append(switchTemplate);
                $(base).find('#rf-stepper-switch-icon').attr('id', 'rf-stepper-switch-icon-' + id);
                $(base).find('#rf-stepper-switch-icon-' + id).html('<i class="' + icon + '"></i>');
                $(base).find('#rf-stepper-switch-caption').attr('id', 'rf-stepper-switch-caption-' + id);
                $(base).find('#rf-stepper-switch-caption-' + id).html(caption);
                if (!doneNav) {
                    $(base).find('.kt-wizard-v1__nav-item').first().attr('data-ktwizard-state', 'current');
                    doneNav = true;
                }
            });
            $('#rf-stepper-switch-items > .kt-wizard-v1__nav-item').unwrap();

            var stepperContentId = 0;
            $(stepper).find('scene > item').each(function () {
                var id = stepperContentId++;
                var content = $(this).html();
                var contentTemplate = $("#rf-templates").find('#rf-stepper-content-template').html();
                $(base).find('#rf-stepper-content-items').append('<div id="rf-stepper-content-items-' + id + '"></div>');
                $(base).find('#rf-stepper-content-items-' + id).append(contentTemplate);
                $(base).find('#rf-stepper-content-items-' + id + ' > .kt-wizard-v1__content').html(content);
                if (!doneCon) {
                    $(base).find('#rf-stepper-content-items > .kt-wizard-v1__content').first().attr('data-ktwizard-state', 'current');
                    doneCon = true;
                }
                $('#rf-stepper-content-items-' + id + ' > .kt-wizard-v1__content').unwrap();
                //$(base).find('#rf-stepper-content-items').append(content);
            });
            //$('#rf-tab-content-items> .tab-pane').unwrap();

            $('switch').remove(); // base > switch
            $('scene').remove();
            //if (typeof KTWizard1 !== 'undefined') KTWizard1.init(); //----------imrose vai code coment by sajeeb
            //code added by sajeeb start
            wizard = new KTWizard('kt_wizard_v1');
            formEl = $('#kt_form');
            wizard.on('change', function (wizardObj) {
                setTimeout(function () {
                    KTUtil.scrollTop();
                }, 500);
            });
            $('[data-ktwizard-type="step"]').on('click', function () {
                if ($(this).attr("data-ktwizard-state") == 'current') return;
                var steps = wizard.steps;
                for (var i = 0; i < wizard.totalSteps; i++) {
                    if (this === steps[i]) {
                        wizard.goTo(i + 1);
                        break;
                    }
                }
            });
            //code added by sajeeb end
        });

        $(selector).find('div[rf-tree]').each(function () { //rf-tree="path/tree1"
            var tree = $(this);
            rf.api.actionCall('/UserRole/GetAppResourceList', 'POST', { IsMenu: 1 }, function (data) {
                tree.jtree({
                    data: data,
                    onCheck: function (checked, val) {
                        security.userRole_x.uiList();
                    }
                });
            });

        });
        $(selector).find('div[rf-geo]').each(function () { //rf-geo
            var geo = $(this);
            geo.jgeo({
                //set as default, if any addition or substruction modify it
                //chainData: { district: 'upazila', upazila: 'union', union: 'village', village: 'geocenter', geocenter: null }
            });
        });


    },
    masterRender: function (selector) {
        ui.loadTemplate(selector, function (callBackSelector) {
            for (var i = 0; i < config.control.length; i++) {
                var elements = $(callBackSelector || document).find(config.control[i]); //???
                ui.controlRender(elements);
            }
            route.navigate(callBackSelector || document);
            config.setToolbarFloating(); // should go ui
            if (ui.renderComplete != null) ui.renderComplete(); //? if load fails
            ui.renderComplete = null;
            $(selector || document).find('form[rf-form]').each(function () {
                $(this).removeData("validator").removeData("unobtrusiveValidation");    //remove the form validation
                $.validator.unobtrusive.parse($(this));
            });


        });
    },

    controlRender: function (elements) {
        //top tags
        for (var i = 0; i < elements.length; i++) {
            var elementAttr = elements[i].attributes;
            for (var j = 0; j < elementAttr.length; j++) {
                var attributeName = elementAttr[j].name.split('-');
                if (attributeName[0] === 'rf') {
                    eval(config.themeKey + '.' + attributeName[1] + '(elements[i])');
                    break;
                }
            }
        }
    },
    get: function (selector) {
        var value;
        eval('value = ' + (config.themeKey || 'kendoui') + '.get(selector)');
        return value;
    },
    set: function (selector, value) {
        eval((config.themeKey || 'kendoui') + '.set(selector,value)');
    },
    mapper: {
        uiToModelx: function (divId) {
            var value;
            eval('value = ' + (config.themeKey || 'kendoui') + '.mapper.uiToModelx(divId)');
            return value;
        },
        uiToModel: function (divId) {
            var value;
            eval('value = ' + (config.themeKey || 'kendoui') + '.mapper.uiToModel(divId)');
            return value;
        },
        //values as JSON
        modelToUI: function (divId, values) {
            console.log((config.themeKey || 'kendoui') + '.mapper.modelToUI(divId,values)');
            eval((config.themeKey || 'kendoui') + '.mapper.modelToUI(divId,values)');
        },
        toTable: function (selector, jsonData) {
            var keys = Object.keys(jsonData);
            var html = '<tr rf-details-row>';
            for (var i = 0; i < keys.length; i++) {
                html += '<td rf-data-model="' + keys[i] + '">' + jsonData[keys[i]] + '</td>'
            }
            html += '<td><button class="btn  btn-outline-danger btn-circle" onclick="$(this).closest(\'tr\').remove()">X</button></td>';
            html += '</tr>';
            $(selector).append(html);
        },
    },
    mapper1: {
        uiToModel: function (divId) {
            var value;
            eval('value = ' + (config.themeKey || 'kendoui') + '.mapper.uiToModel(divId)');
            return value;
        },
        //values as JSON
        modelToUI: function (divId, values) {
            console.log((config.themeKey || 'kendoui') + '.mapper.modelToUI(divId,values)');
            eval((config.themeKey || 'kendoui') + '.mapper.modelToUI(divId,values)');
        }
    },
    clear: function (divId, except) {
        eval('value = ' + (config.themeKey) + '.clear(divId,except)');
    },
    disable: function (divId, except) {
        eval('value = ' + (config.themeKey) + '.disable(divId,except)');
    },
    enable: function (divId, except) {
        eval('value = ' + (config.themeKey) + '.enable(divId,except)');
    },
    remoteBind: function (selector, url, obj, extraObj, serverflter, eventName, callbackFn) {
        eval((config.themeKey) + '.remoteBind(selector, url, obj,extraObj,serverflter, eventName, callbackFn)');
    },
    scrollable: function (selector) {          /////////////////////////?????????????????????????
        //$(selector).slimScroll({ height: height + 'px', size: '4px', zIndex: 0, padding: '0px' });

        $(selector).on('DOMMouseScroll mousewheel', function (ev) {
            var $this = $(this),
                scrollTop = this.scrollTop,
                scrollHeight = this.scrollHeight,
                height = $this.height(),
                delta = (ev.type == 'DOMMouseScroll' ?
                    ev.originalEvent.detail * -40 :
                    ev.originalEvent.wheelDelta),
                up = delta > 0;

            var prevent = function () {
                ev.stopPropagation();
                ev.preventDefault();
                ev.returnValue = false;
                return false;
            }

            if (!up && -delta > scrollHeight - height - scrollTop) {
                // Scrolling down, but this will take us past the bottom.
                $this.scrollTop(scrollHeight);
                return prevent();
            } else if (up && delta > scrollTop) {
                // Scrolling up, but this will take us past the top.
                $this.scrollTop(0);
                return prevent();
            }
        });
    },
    event: {
        change: function (selector, callbackFn) {
            $(selector).bind('change', callbackFn);
        },
        input: function (selector, callbackFn) {
            $(selector).bind('oninput', callbackFn);
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
        $('#' + divId).find(config.controlsArray.dss(',')).each(function (e) {
            if ($(this).prop('required') && $(this).siblings().not('.PK')) {
                var cVal = ui.get('#' + divId + ' #' + $(this).attr('id'));
                var elParent = $(this).parent();
                if (cVal == "" || cVal == null || cVal == 'undefined') {
                    if (isValid) isValid = false;
                    var errorObject = document.createElement('span');
                    errorObject.className = 'rf-bubble right rf-bubble--bottom--right';
                    elParent.append(errorObject);
                    errorObject.innerHTML = 'Required field';
                } else {
                    elParent.find('.rf-bubble').each(function () {
                        $(this).remove();
                    });
                }
            } else {
                if ($(this).is('div') == true && $(this).attr('required')) {
                    var cVal = ui.get('#' + divId + ' #' + $(this).attr('id'));
                    if (cVal == "" || cVal == null || cVal == 'undefined') {
                        if (isValid) isValid = false;
                        var errorObject = document.createElement('span');
                        errorObject.className = 'rf-bubble left-div rf-bubble--bottom';
                        $(this).append(errorObject);
                        errorObject.innerHTML = 'Required field';
                    } else {
                        $(this).find('.rf-bubble').each(function () {
                            $(this).remove();
                        });
                    }
                }
            }

        });
        if (!isValid) rf.ui.message.warning('Some field is required!');
        return isValid;
    },

}
//*************************************************
//Ending of UI
//*************************************************

//*************************************************
// Starting of DB
//*************************************************
var db = {
    saveComplete: {},
    onSaveComplete: function (modelName, callBackFn) {
        rf.db.saveComplete[modelName] = callBackFn;
    },

    savex: function (callbackFn) {   ////// REMOVE
        ui.message.showConfirm('Do you want to save', function (isConfirm) {
            if (isConfirm) {
                $('form[rf-form]').each(function () {
                    if ($(this).valid()) {
                        var model = $(this).attr("rf-form");
                        $.post('/control/Add/' + model, $('form').serialize(), function (data) {
                            ui.message.success('Posted using jQuery');
                            //callbackFn;
                            console.log(data);
                        });
                    }
                });
            }
        });
    },
    save: function (selector, callbackFn) { //step 2 -> rf:mapper + theme:mapper + server(wpr)

        ui.message.showConfirm('Do you want to save', function (isConfirm) {
            if (isConfirm) {
                $('form[rf-form]').each(function () {
                    var selectedForm = $(selector || this);
                    var actionLink = selectedForm.attr("rf-form-action");
                    var model = selectedForm.attr("rf-form");
                    var modelSplitted = model.split('/');
                    var url = '/control/add/' + (modelSplitted.length == 2 ? modelSplitted[1] : model);
                    if (selectedForm.valid()) {
                        //rereeeeeeeeeeeeeeee
                        api.actionCall(actionLink || url, 'POST', ui.mapper.uiToModel(selectedForm), function (data) {
                            ui.clear(selector);
                            rf.db.saveComplete[model](data);
                            if (callbackFn != null) callbackFn(data);
                            else ui.message.success("Your operation is completed successfully.");

                            //rf.db.saveComplete(data);
                        });
                    }
                });
            }
        });
    },

    savey: function (selector, callbackFn) {
        ui.message.showConfirm('Do you want to save', function (isConfirm) {
            if (isConfirm) {
                $('form[rf-form]').each(function () {
                    var selectedForm = $(selector || this);
                    var actionLink = selectedForm.attr("rf-form-action");
                    var model = selectedForm.attr("rf-form");
                    var modelSplitted = model.split('/');
                    //var url = '/control/add/' + (modelSplitted.length == 2 ? modelSplitted[1] : model);
                    var url = '/process/operation';

                    if (selectedForm.valid()) {
                        //rereeeeeeeeeeeeeeee
                        var postAbleData = rf.ui.mapper.uiToModel(selectedForm);
                        var dataToWebRequest = rf.db.toWebRequest(postAbleData, 'Add', model);

                        api.actionCall(actionLink || url, 'POST', dataToWebRequest, function (data,status) {
                            ui.clear(selector);
                            if(rf.db.saveComplete[model])
                            {
                                rf.db.saveComplete[model](data);
                            }
                            if (callbackFn != null) callbackFn(data,status);
                            else {
                                if(status){
                                    ui.message.success("Your operation is completed successfully.");
                                }
                                else{
                                    ui.message.success(data.Data);
                                }

                            }

                            //rf.db.saveComplete(data);
                        });
                    }
                });
            }
        });

    },
    deleteById: function (modelName, primaryKeyValue, callBackFn) {
        ui.message.showConfirm('Do you want to delete', function (isConfirm) {
            if (isConfirm) {
                var data = rf.db.toWebRequest(primaryKeyValue, "Delete", modelName);
                var url = '/process/operation';
                api.actionCall(url, 'POST', data, callBackFn);
            }
        });
    },
    delete: function (divIdOrApiPacket, controllerName, callbackFn) {   ////// wORK
        ui.message.showConfirm('Do you want to delete', function (isConfirm) {
            if (isConfirm) {
                var data = this.prepareDataAndUrl(divIdOrApiPacket, controllerName, 'delete');
                if (request) api.actionCall(data.url, 'POST', data.apiPacket, callbackFn);
            }
        });
    },
    get: function (divIdOrApiPacket, controllerName, callbackFn) {
        var data = this.prepareDataAndUrl(divIdOrApiPacket, controllerName, 'GetData');
        if (request) api.actionCall(data.url, 'POST', data.apiPacket, callbackFn);
    },
    prepareDataAndUrl: function (divIdOrApiPacket, controllerName, command) {  ////?????
        var data = { url: '', apiPacket: '', request: true }
        if (typeof divIdOrApiPacket == 'object') {
            data.apiPacket = divIdOrApiPacket;
        } else {
            data.apiPacket = api.getApiPacket(divIdOrApiPacket)
        }
        data.apiPacket.Command = command;

        if (controllerName != null && controllerName != 'undefined' && controllerName != "") {
            data.url = "/" + controllerName + "/Command";
        } else if (typeof divIdOrApiPacket == 'string' && controllerName == null || controllerName == 'undefined') {
            data.url = "/" + controllerName + "/Command";
        } else {
            request = false;
            console.error('Requiered controllerName as parameter in rf.db.save function!');
        }
        return data;
    },
    registerDefaultSave: function (overrideFunction) {
        var btnSave = $('#TBbtnSave');
        btnSave.removeAttr("onclick");
        btnSave.off("click");
        btnSave.on('click', function (e) {
            e.preventDefault();
            overrideFunction();
        });
    },
    toWebRequest: function (data, command, modelName) {
        if (data === null || typeof (data) === 'undefined') throw "data source is empty";
        if (command === null || typeof (command) === 'undefined') throw "command is empty";
        if ('undefined' === typeof (data)) throw "modelName is empty";
        return {
            Command: command,
            Data: JSON.stringify(data),
            ModelName: modelName
        };
    },
}
//*************************************************
// Ending of DB
//*************************************************


//*************************************************
// Starting of API
//*************************************************
var api = {
    actionCall: function (actionURL, type, jsonObject, callbackFn, loaderContainer = null, async = true) {
        $.ajax({
            url: actionURL,
            type: type,
            async: async,
            data: jsonObject,
            dataType: 'json',
            beforeSend: function () {
                //if (loaderContainer == null) {
                    //$.blockUI({ message: '<div><svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-square" style="background: none;"><g transform="translate(20 20)"><rect x="-15" y="-15" width="30" height="30" fill="#3be8b0" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.4s" repeatCount="indefinite"/></rect></g><g transform="translate(50 20)"><rect x="-15" y="-15" width="30" height="30" fill="#1aafd0" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.3s" repeatCount="indefinite"/></rect></g><g transform="translate(80 20)"><rect x="-15" y="-15" width="30" height="30" fill="#6a67ce" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.2s" repeatCount="indefinite"/></rect></g><g transform="translate(20 50)"><rect x="-15" y="-15" width="30" height="30" fill="#1aafd0" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.3s" repeatCount="indefinite"/></rect></g><g transform="translate(50 50)"><rect x="-15" y="-15" width="30" height="30" fill="#6a67ce" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.2s" repeatCount="indefinite"/></rect></g><g transform="translate(80 50)"><rect x="-15" y="-15" width="30" height="30" fill="#ffb900" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.1s" repeatCount="indefinite"/></rect></g><g transform="translate(20 80)"><rect x="-15" y="-15" width="30" height="30" fill="#6a67ce" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.2s" repeatCount="indefinite"/></rect></g><g transform="translate(50 80)"><rect x="-15" y="-15" width="30" height="30" fill="#ffb900" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.1s" repeatCount="indefinite"/></rect></g><g transform="translate(80 80)"><rect x="-15" y="-15" width="30" height="30" fill="#fc636b" transform="scale(0.899806 0.899806)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="0s" repeatCount="indefinite"/></rect></g></svg></div>' });
                    $.blockUI({ message: '<img src="/images/preloader.gif" />' });
                //} else if (loaderContainer != 'no-loader') {
                //    $(loaderContainer).css("position", "relative");
                //    $(loaderContainer).append('<div class="iloader" style="width: 100%;position: absolute;top: 0;left: 0;background: rgba(255, 255, 255, 0.6);height: 100%;cursor: wait;display: flex;align-items: center;opacity: 0.5;"><img src="/images/preloader.gif" /></div>');
                //}
            },
            success: function (response, status, jqXHR) {
                if (callbackFn != null || callbackFn != 'undefined') {
                    if (response != null && response.success == true) { callbackFn(response, true); }
                    else if (response != null && response.success == false) { callbackFn(response, false); }
                    else callbackFn(response, false);
                } else {
                    ui.message.success(response.Data);
                }
                $.unblockUI();
                $(loaderContainer + ' .iloader').remove();
            },
            error: function (jqXHR, status, error) {
                if (callbackFn != null || callbackFn != 'undefined') {
                    var err = jqXHR.responseText;
                    callbackFn(err, false);
                } else {
                    ui.message.error(response.Data);
                }
                $.unblockUI();
                $(loaderContainer + ' .iloader').remove();
            }
        });
    },
    getApiPacket: function (modelName, jsonObj) {
        if (divId != null && divId != "" && divId != 'undefined') {
            var packet = "";
            if (jsonObj != null && jsonObj != 'undefined') {
                packet = jsonObj
            } else {
                packet = rf.ui.mapper.uiToModel(modelName)
            }

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
        } else {
            console.error('Required div id as  parameter in getAPIPacket function');
            return 0
        }
    }
}
//*************************************************
// Ending of API
//*************************************************



var cookie = {
    set: function (cookieName, cookieValue, lifespanInDays, validDomain) {
        var domain_string = validDomain ? ("; domain=" + validDomain) : '';
        lifespanInDays = lifespanInDays ? lifespanInDays : 1;
        document.cookie =
            cookieName + "=" + encodeURIComponent(cookieValue) +
            "; max-age=" + 60 * 60 * 24 * lifespanInDays + "; path=/" + domain_string;
    },
    get: function (cookieName) {
        var cookie_string = document.cookie;
        if (cookie_string.length != 0) {
            var cookie_array = cookie_string.split('; ');
            for (i = 0; i < cookie_array.length; i++) {
                var cookie_value = cookie_array[i].match(cookieName + '=(.*)');
                if (cookie_value != null) {
                    return decodeURIComponent(cookie_value[1]);
                }
            }
        }
        return '';
    },
    delete: function (cookieName, validDomain) {
        var domain_string = validDomain ? ("; domain=" + validDomain) : '';
        document.cookie = cookieName + "=; max-age=0; path=/" + domain_string;
    }
}

var tool = {
    isValidURL: function (url) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\._)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(url);
    },
    //Get Datetime to Datetime duration

    duration: function (time) {
        var date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
            diff = (((new Date()).getTime() - date.getTime()) / 1000),
            day_diff = Math.floor(diff / 86400);

        if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
            return;

        return day_diff === 0 && (
            diff < 60 && "just now" ||
            diff < 120 && "1 minute ago" ||
            diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
            diff < 7200 && "1 hour ago" ||
            diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
            day_diff === 1 && "Yesterday" ||
            day_diff < 7 && day_diff + " days ago" ||
            day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
    }
}

var toolbar = {
    attachRouteSearch: function (template, searchElement) {
        $(searchElement).html(toolbar.searchRouteTemplate());
        ui.scrollable(searchElement);
    },
    attachNotification: function (template, selector) {
        $(selector).html(template);
        ui.scrollable(selector);
    },
    attachApprovals: function (template, selector) {
        $(selector).html(template);
        ui.scrollable(selector);
    },//Get Notification Parameter
    searchRouteTemplate: function () {
        var searchRouteHtml = '<div class="kt-header__topbar-item kt-header__topbar-item--search dropdown" id="kt_quick_search_toggle">\n' +
            '                                <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px">\n' +
            '                                    <span class="kt-header__topbar-icon"><i class="flaticon2-search-1"></i></span>\n' +
            '                                </div>\n' +
            '                                <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-lg">\n' +
            '                                    <div class="kt-quick-search kt-quick-search--dropdown kt-quick-search--result-compact" id="kt_quick_search_dropdown">\n' +
            '                                        <form method="get" class="kt-quick-search__form" id="QuickSearchForm" style="background:#ffffff">\n' +
            '                                            <div class="input-group" style="padding: 0px;">\n' +
            '                                                <div class="input-group-prepend"><span class="input-group-text"><i class="flaticon2-search-1"></i></span></div>\n' +
            '                                                <input type="text" class="form-control kt-quick-search__input" placeholder="Search...">\n' +
            '                                                <div class="input-group-append"><span class="input-group-text"><i class="la la-close kt-quick-search__close"></i></span></div>\n' +
            '                                            </div>\n' +
            '                                        </form>\n' +
            '                                        <div class="kt-quick-search__wrapper kt-scroll" data-scroll="true" data-height="325" data-mobile-height="200">\n' +
            '\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                </div>\n' +
            '                            </div>';
        return searchRouteHtml;
    },
    setNotification: function () {
        rf.api.actionCall("/AppNavigator/Notification", 'GET', {}, function (data) {
            var ps = null;
            for (var i = 0; i < data.length; i++) {
                switch (data[i].NotificationType) {
                    case 1:
                        if ($("#topbar_notifications_logs").length) {
                            toolbar.pushNotificationItem("#topbar_notifications_logs", data[i].Logo, data[i].Text,
                                data[i].NotificationDuration, data[i].Url);
                            //ps = new PerfectScrollbar('#topbar_notifications_logs .kt-notification', {
                            //    wheelSpeed: 0.1,
                            //    wheelPropagation: true,
                            //    minScrollbarLength: 20
                            //});
                            //ps.update();
                        }
                        break;
                    case 2:
                        if ($("#topbar_notifications_notifications").length) {
                            toolbar.pushNotificationItem("#topbar_notifications_notifications", data[i].Logo, data[i].Text,
                                data[i].NotificationDuration, data[i].Url);
                            //ps = new PerfectScrollbar('#topbar_notifications_notifications .kt-notification', {
                            //    wheelSpeed: 0.05,
                            //    wheelPropagation: true,
                            //    minScrollbarLength: 20
                            //});
                            //ps.update();
                        }                       
                        break;
                    case 3:
                        if ($("#topbar_notifications_events").length) {
                            toolbar.pushNotificationItem("#topbar_notifications_events", data[i].Logo, data[i].Text,
                                data[i].NotificationDuration, data[i].Url);
                            //ps = new PerfectScrollbar('#topbar_notifications_events .kt-notification', {
                            //    minScrollbarLength: 20
                            //});
                            //ps.update();
                        }
                        break;
                    default:
                        break;
                }
            }
        });
    },
    setApproval: function () {
        rf.api.actionCall('/AppNavigator/Approvals', 'GET', {}, function (data) {
            for (var i = 0; i < data.length; i++) {
                $('#ApprovalItems').append(toolbar.getApprovalItemTemplate(data.text));
                var currentNotificationCount = parseInt($('#ApprovalCount').html() || 0) + 1;
                $('#ApprovalCount').html(currentNotificationCount);
            }
        });
    },
    pushNotificationItem: function (selector, iconClass, text, time, url) {
        var notificationItemTemplate = '<a href="' + (url || '') + '" class="kt-notification__item" style="padding:5px auto;">\n' +
            '                <div class="kt-notification__item-icon" style="width:10px">\n' +
            '                    <i class="' + (iconClass || 'flaticon2-line-chart kt-font-success') + '"></i>\n' +
            '                </div>\n' +
            '                <div class="kt-notification__item-details" style="">\n' +
            '                    <div class="kt-notification__item-title">\n' +
            '                        ' + text + '\n' +
            '                    </div>\n' +
            '                    <div class="kt-notification__item-time">\n' +
            '                        ' + (time || '') + '\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </a>';
        //var currentSelectorHtml = $(selector).html();
        //KTUtil.setHTML(selector, currentSelectorHtml+notificationItemTemplate)
        $(selector).find('.kt-notification').append(notificationItemTemplate);
        var currentNotificationCount = parseInt($('#NotificationCount').html()) + 1;
        $('#NotificationCount').html(currentNotificationCount);
    },
    getnotificationTemplate: function () {
        var notificationTemplate = '<div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px">\n' +
            '                                    <span class="kt-header__topbar-icon"><i class="flaticon2-bell-alarm-symbol"></i></span>\n' +
            '                                    <span class="kt-badge kt-badge--danger"></span>\n' +
            '                                </div>\n' +
            '                                <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl">\n' +
            '                                    <form>\n' +
            '                                        <!--begin: Head -->\n' +
            '                                        <div class="kt-head kt-head--skin-light kt-head--fit-x kt-head--fit-b" style="background-image: url(/lib/metronic/media/misc/bg-1.jpg);">\n' +
            '                                            <h3 class="kt-head__title">\n' +
            '                                                Notifications\n' +
            '                                                &nbsp;\n' +
            '                                                <span class="btn btn-label-primary btn-sm btn-bold btn-font-md" id="NotificationCount">0 new</span>\n' +
            '                                            </h3>\n' +
            '                                            <ul class="nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-tabs-line-brand  kt-notification-item-padding-x" role="tablist">\n' +
            '                                                <li class="nav-item">\n' +
            '                                                    <a class="nav-link" data-toggle="tab" href="#topbar_notifications_logs" role="tab" aria-selected="false">Logs</a>\n' +
            '                                                </li>\n' +
            '                                                <li class="nav-item">\n' +
            '                                                    <a class="nav-link active show" data-toggle="tab" href="#topbar_notifications_notifications" role="tab" aria-selected="true">Alerts</a>\n' +
            '                                                </li>\n' +
            '                                                <li class="nav-item">\n' +
            '                                                    <a class="nav-link" data-toggle="tab" href="#topbar_notifications_events" role="tab" aria-selected="false">Events</a>\n' +
            '                                                </li>\n' +
            '                                            </ul>\n' +
            '                                        </div>\n' +
            '                                        <!--end: Head -->\n' +
            '\n' +
            '                                        <div class="tab-content">\n' +
            '                                            <div class="tab-pane active show" id="topbar_notifications_notifications" role="tabpanel">\n' +
            '                                                <div class="kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll" data-scroll="true" data-height="300" data-mobile-height="200">\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                            <div class="tab-pane" id="topbar_notifications_events" role="tabpanel">\n' +
            '                                                <div class="kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll" data-scroll="true" data-height="300" data-mobile-height="200">\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                            <div class="tab-pane" id="topbar_notifications_logs" role="tabpanel">\n' +
            '                                                <div class="kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll" data-scroll="true" data-height="300" data-mobile-height="200">\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                    </form>\n' +
            '                                </div>';
        return notificationTemplate;
    },
    getApprovalItemTemplate: function (title, description) {
        var approvalItemTemplate = '<div class="kt-mycart__item">\n' +
            '            <div class="kt-mycart__container">\n' +
            '                <div class="kt-mycart__info">\n' +
            '                    <a href="#" class="kt-mycart__title">\n' +
            '                        ' + (title || 'No Title Set') + '                      \n' +
            '                    </a>\n' +
            '                    <span class="kt-mycart__desc">\n' +
            '                        Profile info, Timeline etc\n' +
            '                    </span>\n' +
            '\n' +
            '                    <div class="kt-mycart__action">\n' +
            '                       <div class="row">' +
            '                         <button data-toggle="hover" title="Approve" data-content="Approve" class="btn btn-outline-success btn-elevate btn-circle btn-icon btn-lg p-3"><i class="fa fa-check p-2"></i></button>' +
            '                         <button title="Reject" class="btn btn-outline-danger btn-elevate btn-circle btn-icon btn-lg p-3"><i class="fa fa-remove p-2"></i></button>' +
            '</div>' +
            '' +
            '                    </div>    \n' +
            '                </div>\n' +
            '                \n' +
            '                <a href="#" class="kt-mycart__pic">\n' +
            '                    <img src="https://keenthemes.com/metronic/themes/metronic/theme/default/demo9/dist/assets/media/products/product9.jpg" title="">\n' +
            '                </a>    \n' +
            '            </div>     \t\t\t \n' +
            '        </div>';
        return approvalItemTemplate;
    },
    getApprovalTemplate: function () {
        var approvalHtml = '<div class="kt-mycart">\n' +
            '                                            <div class="kt-mycart__head kt-head" style="background-image: url(/lib/metronic/media/misc/bg-1.jpg);">\n' +
            '                                                <div class="kt-mycart__info">\n' +
            '                                                    <span class="kt-mycart__icon"><i class="flaticon2-shopping-cart-1 kt-font-success"></i></span>\n' +
            '                                                    <h3 class="kt-mycart__title">Approvals</h3>\n' +
            '                                                </div>\n' +
            '                                                <div class="kt-mycart__button">\n' +
            '                                                    <button type="button" class="btn btn-success btn-sm" style=" "><span id="ApprovalCount"></span> Items</button>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                            <div id="ApprovalItems" class="kt-mycart__body kt-scroll" data-scroll="true" data-height="245" data-mobile-height="200">\n' +
            '                                                \n' +
            '                                                   \n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                            <div class="kt-mycart__footer">\n' +
            // '                                                <div class="kt-mycart__section">\n' +
            // '                                                    <div class="kt-mycart__subtitel">\n' +
            // '                                                        <span>Sub Total</span>\n' +
            // '                                                        <span>Taxes</span>\n' +
            // '                                                        <span>Total</span>\n' +
            // '                                                    </div>\n' +
            // '                                                    <div class="kt-mycart__prices">\n' +
            // '                                                        <span>$ 840.00</span>\n' +
            // '                                                        <span>$ 72.00</span>\n' +
            // '                                                        <span class="kt-font-brand">$ 912.00</span>\n' +
            // '                                                    </div>\n' +
            // '                                                </div>\n' +
            // '                                                <div class="kt-mycart__button kt-align-right">\n' +
            // '                                                    <button type="button" class="btn btn-primary btn-sm">Place Order</button>\n' +
            // '                                                </div>\n' +
            '                                            </div>\n' +
            '                                        </div>\n';
        return approvalHtml;
    }
};

//*************************************************
//Starting of Plugins/Supportings/Third Parties Items
//*************************************************
///Search Bar Plugin With Events
var KTQuickSearch = function () {
    var t,
        e,
        a,
        n,
        o,
        i,
        l,
        r,
        s = "",
        d = !1,
        c = !1,
        u = !1,
        p = "kt-spinner kt-spinner--input kt-spinner--sm kt-spinner--brand kt-spinner--right",
        f = "kt-quick-search--has-result",
        g = function () {
            u = !1, KTUtil.removeClass(r, p), n && (a.value.length < 2 ? KTUtil.hide(n) : KTUtil.show(n, "flex"));
        },
        h = function () {
            l && !KTUtil.hasClass(i, "show") && ($(l).dropdown("toggle"), $(l).dropdown("update"));
        },
        m = function () {
            l && KTUtil.hasClass(i, "show") && $(l).dropdown("toggle");
        },
        v = function () {
            if (d && s === a.value) return g(), KTUtil.addClass(t, f), h(), void KTUtil.scrollUpdate(o);
            $('.kt-quick-search__wrapper').html('');
            var searchModel = [];
            var controls = $('a[rf-route]');
            for (i = 0; i < controls.length; i++) {
                var element = controls[i];
                searchModel.push({
                    "SearchId": i,
                    "logo": "",
                    "Title": $(element).text(),
                    "GroupTitle": "Menu",
                    "SearchUrl": $(element).attr("href")
                });

            }
            console.log(searchModel);
            s = a.value, KTUtil.removeClass(t, f), u =
                !0, KTUtil.addClass(r, p), n && KTUtil.hide(n), m(), setTimeout(function () {
                    $.ajax({
                        url: "/AppNavigator/QuickSearch",
                        data: {
                            Query: s,
                            QuickSearches: searchModel
                        },
                        dataType: "html",
                        type: "POST",
                        success: function (e) {
                            d = !0, g(), KTUtil.addClass(t, f), KTUtil.setHTML(o, e), h(), KTUtil.scrollUpdate(o);
                            rf.route.start();
                        },
                        error: function (e) {
                            d = !1, g(), KTUtil.addClass(t, f), KTUtil.setHTML(o,
                                '<span class="kt-quick-search__message">Connection error. Pleae try again later.</div>'),
                                h(), KTUtil.scrollUpdate(o);
                        }
                    });
                },
                    1e3);

        },
        b = function (e) {
            a.value = "", s = "", d = !1, KTUtil.hide(n), KTUtil.removeClass(t, f), m();
        },
        k = function () {
            if (a.value.length < 2) return g(), void m();
            1 !== u &&
                (c && clearTimeout(c), c = setTimeout(function () {
                    v();
                },
                    200));
        };
    return {
        init: function (s) {
            t = s, e = KTUtil.find(t, ".kt-quick-search__form"), a = KTUtil.find(t, ".kt-quick-search__input"), n =
                KTUtil.find(t, ".kt-quick-search__close"), o = KTUtil.find(t, ".kt-quick-search__wrapper"), i =
                KTUtil.find(t, ".dropdown-menu"), l = KTUtil.find(t, '[data-toggle="dropdown"]'), r =
                KTUtil.find(t, ".input-group"), KTUtil.addEvent(a, "keyup", k), KTUtil.addEvent(a, "focus", k),
                e.onkeypress = function (t) {
                    13 === (t.charCode || t.keyCode || 0) && t.preventDefault();
                }, KTUtil.addEvent(n, "click", b);
        }
    };
},
    KTQuickSearchInline = KTQuickSearch;
$(document).on('ready', function () {
    rf.toolBar.attachRouteSearch(rf.toolBar.searchRouteTemplate(), '#kt_quick_search_toggle');
    rf.toolBar.attachNotification(rf.toolBar.getnotificationTemplate(), '#NotificationBar');
    rf.toolBar.setNotification();
    rf.toolBar.attachApprovals(rf.toolBar.getApprovalTemplate(), '#Approval');
    rf.toolBar.setApproval();
    KTUtil.ready(function () {
        KTUtil.get("kt_quick_search_dropdown") && KTQuickSearch().init(KTUtil.get("kt_quick_search_dropdown")),
            KTUtil.get("kt_quick_search_inline") && KTQuickSearchInline().init(KTUtil.get("kt_quick_search_inline")),
            KTUtil.get("kt_quick_search_offcanvas") &&
            KTQuickSearchOffcanvas().init(KTUtil.get("kt_quick_search_offcanvas"));
    });
    $('[data-toggle="popover"]').popover();
});


//*************************************************
//Starting of Plugins/Supportings/Third Parties Items
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
    config: config,
    route: route,
    ui: ui,
    db: db,
    api: api,
    cookie: cookie,
    tool: tool,
    toolBar: toolbar,
    page: page,
    process: process,
    security: security
};






