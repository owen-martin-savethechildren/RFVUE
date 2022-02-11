/*!
 * jgeo v1.0
 * Written by Sajeeb Ashraf.
 */

! function (e) {
    e.fn.jgeo = function (s) {
        var t = e.extend({
            chainData: { district: 'upazila', upazila: 'union', union: 'village', village: 'centers', centers: null }
        }, s);
        let i = this;
        i.addClass("rf-steper-geo");
        for (var key in t.chainData) {
            i.append('<div class="geo-list animate-zoomIn ' + key + '">' +
                '<div class= "geo-list-header">' +
                '<img src="/Images/' + key + '.png" />' +
                '<div class="geo-header-text">' + key + '</div>' +
                '<div class="geo-selected-no">0</div></div>' +
                '<div class="geo-list-body"></div></div>');
        }


        function GetGeoList(bindTo, pGeoCode = null, pText = null) {
            rf.api.actionCall('/UserRole/Get' + bindTo + 'List', 'POST', { PGeoCode: pGeoCode }, function (data) {
                html = '';
                data.forEach(function (item) {
                    selected = '';
                    switch (bindTo) {
                        case 'district':
                            selected = SelectedGeo.findIndex(x => x.DistrictCode == item.DistrictCode) >= 0 ? 'selected' : ''; break;
                        case 'upazila':
                            selected = SelectedGeo.findIndex(x => x.DistrictCode == item.DistrictCode && x.UpazilaCode == item.UpazilaCode) >= 0 ? 'selected' : ''; break;
                        case 'union':
                            selected = SelectedGeo.findIndex(x => x.DistrictCode == item.DistrictCode && x.UpazilaCode == item.UpazilaCode && x.UnionCode == item.UnionCode) >= 0 ? 'selected' : ''; break;
                        case 'village':
                            selected = SelectedGeo.findIndex(x => x.DistrictCode == item.DistrictCode && x.UpazilaCode == item.UpazilaCode && x.UnionCode == item.UnionCode && x.VillageCode == item.VillageCode) >= 0 ? 'selected' : ''; break;
                        case 'centers':
                            selected = SelectedGeo.findIndex(x => x.DistrictCode == item.DistrictCode && x.UpazilaCode == item.UpazilaCode && x.UnionCode == item.UnionCode && x.VillageCode == item.VillageCode && x.CenterCode == item.CenterCode) >= 0 ? 'selected' : ''; break;
                    }
                    if (pText == null) {
                        html += '<div class="geo-item ' + selected + ' " BindAs='+bindTo+' DistrictCode=' + item.DistrictCode + ' UpazilaCode=' + item.UpazilaCode + ' UnionCode=' + item.UnionCode + ' VillageCode=' + item.VillageCode + ' CenterCode=' + item.CenterCode + ' GeoCode=' + item.GeoCode + '><div class="geo-item-text">' + item.Name + '</div></div>';
                    }
                    else {
                        html += '<div class="geo-item ' + selected + '" BindAs=' + bindTo +' DistrictCode=' + item.DistrictCode + ' UpazilaCode=' + item.UpazilaCode + ' UnionCode=' + item.UnionCode + ' VillageCode=' + item.VillageCode + ' CenterCode=' + item.CenterCode + ' GeoCode=' + item.GeoCode + '><div class="geo-item-text ws">' + item.Name + '</div><div class="geo-item-subtext">' + pText + '</div></div>';
                    }
                    if (selected === 'selected' && t.chainData[bindTo] != null) {
                        GetGeoList(t.chainData[bindTo], item.GeoCode, item.Name);
                    }
                });
                $('.' + bindTo + ' .geo-list-body').append(html);
                for (var key in t.chainData) {
                    $('.' + key + ' .geo-selected-no').html($('.' + key + ' .geo-list-body .geo-item.selected').length);
                }
                var scrollColor = $('.' + bindTo).css("border-left-color");
                var bodyHeight = $('.' + bindTo + ' .geo-list-body').css("height");
                $('.' + bindTo + ' .geo-list-body').slimScroll({ height: bodyHeight, color: scrollColor, size: '3px' });
            }, '.' + bindTo + ' .geo-list-body');
        }
        i.on("click", ".geo-item", function () {
            var k = $(this);
            $(k).toggleClass("selected");
            var cstate = $(k).hasClass('selected');
            var GeoCode = $(k).attr('GeoCode');
            var p = $(k).attr('BindAs');
            var sgeo = { DistrictCode: $(k).attr('DistrictCode'), UpazilaCode: $(k).attr('UpazilaCode'), UnionCode: $(k).attr('UnionCode'), VillageCode: $(k).attr('VillageCode'), CenterCode: $(k).attr('CenterCode') };
            if (!cstate) {
                switch (p) {
                    case 'district':
                        $('[DistrictCode=' + $(k).attr('DistrictCode') + ']').not(k).remove();
                        SelectedGeo = SelectedGeo.filter(x => x.DistrictCode != sgeo.DistrictCode);
                        break;
                    case 'upazila':
                        $('[DistrictCode=' + $(k).attr('DistrictCode') + '][UpazilaCode=' + $(k).attr('UpazilaCode') + ']').not(k).remove();
                        SelectedGeo = SelectedGeo.filter(x => x.DistrictCode != sgeo.DistrictCode || x.UpazilaCode != sgeo.UpazilaCode);
                        break;
                    case 'union':
                        $('[DistrictCode=' + $(k).attr('DistrictCode') + '][UpazilaCode=' + $(k).attr('UpazilaCode') + '][UnionCode=' + $(k).attr('UnionCode') + ']').not(k).remove();
                        SelectedGeo = SelectedGeo.filter(x => x.DistrictCode != sgeo.DistrictCode || x.UpazilaCode != sgeo.UpazilaCode || x.UnionCode != sgeo.UnionCode);
                        break;
                    case 'village':
                        $('[DistrictCode=' + $(k).attr('DistrictCode') + '][UpazilaCode=' + $(k).attr('UpazilaCode') + '][UnionCode=' + $(k).attr('UnionCode') + '][VillageCode=' + $(k).attr('VillageCode') + ']').not(k).remove();
                        SelectedGeo = SelectedGeo.filter(x => x.DistrictCode != sgeo.DistrictCode || x.UpazilaCode != sgeo.UpazilaCode || x.UnionCode != sgeo.UnionCode || x.VillageCode != sgeo.VillageCode);
                        break;
                    case 'geocenter':
                        SelectedGeo = SelectedGeo.filter(x => x.DistrictCode != sgeo.DistrictCode || x.UpazilaCode != sgeo.UpazilaCode || x.UnionCode != sgeo.UnionCode || x.VillageCode != sgeo.VillageCode || x.CenterCode != sgeo.CenterCode);
                        break;
                }
            }
            else if (t.chainData[p] != null) {
                SelectedGeo.push(sgeo);
                GetGeoList(t.chainData[p], GeoCode, $(k).find('.geo-item-text').text());
            }
            else {
                SelectedGeo.push(sgeo);
            }
            for (var key in t.chainData) {
                $('.' + key + ' .geo-selected-no').html($('.' + key + ' .geo-list-body .geo-item.selected').length);
            }
        });

        i.GetSelectedGeo=function() {
            for (var key in t.chainData) {
                if (t.chainData[key] == null && $('.' + key + ' .geo-list-body .geo-item.selected').length > 0) {
                    var r = [];
                    $('.' + key + ' .geo-list-body .geo-item.selected').each(function () {
                        r.push({ DistrictCode: $(this).attr('DistrictCode'), UpazilaCode: $(this).attr('UpazilaCode'), UnionCode: $(this).attr('UnionCode'), VillageCode: $(this).attr('VillageCode'), CenterCode: $(this).attr('CenterCode') });
                    });
                    return r;
                }
                else if ($('.' + t.chainData[key] + ' .geo-list-body .geo-item.selected').length == 0) {
                    return GetFilteredGeo(key);
                }
            }
        }
        function GetFilteredGeo(parent) {
            var r = [];
            $('.' + parent + ' .geo-list-body .geo-item.selected').each(function () { r.push($(this).attr('GeoCode')); });
            if (r.length == 0) return r;
            rf.api.actionCall('/UserRole/GetFilteredCenterList', 'POST', { PGeoCode: r }, function (data) { r = data; }, 'no-loader', false);
            return r;
        }
        i.refresh = function () {
            $('.geo-list-body').html('');
            GetGeoList(Object.keys(t.chainData)[0]);
        }
        GetGeoList(Object.keys(t.chainData)[0]);
        window['rfgeo'] = i;
    }
}(jQuery);