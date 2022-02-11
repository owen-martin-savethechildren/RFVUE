/*!
 * jtree v1.0
 * Written by Sajeeb Ashraf.
 */

! function (e) {
    e.fn.jtree = function (s) {
        var t = e.extend({
            data: [],
            checkedData: [],
            idColumn: "id",
            parentidColumn: "parentid",
            textColumn: "text",
            height: "176px",
            onClick: null,
            onCheck: null
        }, s);
        let i = this;
        i.addClass("jtree"), i.html('<div class="jtree-search"><input  class="jtree-search-box" type="text" placeholder="Search...."/></div><div class="jtree-body"></div>');
        var l = i.find(".jtree-search-box:first"),
            c = i.find(".jtree-body:first"),
            a = [];
        if (t.data.length > 0)
            for (var n in t.data[0]) a.push(n);
        var r = function (e, i = 0) {
            var c = 0 == i ? "" : 'style="display:none"',
                s = "";
            return 0 == e.length ? s : (s += "<ul>", e.filter(e => e[t.parentidColumn] == i).forEach(function (e) {
                for (var i = t.data.filter(i => i[t.parentidColumn] == e[t.idColumn]), l = i.length > 0 ? "jtree-icon-collaps" : "", n = t.checkedData.indexOf(e[t.idColumn]) > -1 ? "checked" : "", o = " ", d = 0, h = a.length; d < h; d++) o += a[d] + "=" + e[a[d]] + " ";
                s += "<li " + c + " iscollaps=true " + o + ">", s += '<div class="' + l + ' "><span class="jtree-check ' + n + '">&#x2714;</span>' + e[t.textColumn] + "</div>", s += r(i, e[t.idColumn]), s += "</li>"
            }), s += "</ul>")
        };

        function o(t, i) {
            var c = i ? "jtree-icon-expanded" : "jtree-icon-collaps",
                s = i ? "jtree-icon-collaps" : "jtree-icon-expanded",
                a = e(t).closest("ul").closest("li").first();
            if (a.length > 0) {
                a.attr("iscollaps", i);
                var l = a.find("div." + c + ":first");
                e(l).removeClass(c), e(l).addClass(s), o(a, i)
            }
        }
        return c.html(r(t.data)), c.slimScroll({
            height: t.height,
            color: "#def6fa",
            size: "3px"
        }), c.on("click", "li", function (s) {
            if (!e(s.target).hasClass("jtree-check")) {
                var l = "false" == e(this).attr("iscollaps"),
                    c = l ? "jtree-icon-expanded" : "jtree-icon-collaps",
                    a = l ? "jtree-icon-collaps" : "jtree-icon-expanded";
                e(this).children().children("li").css("display", l ? "none" : ""), e(this).attr("iscollaps", l);
                var n = e(this).find("div." + c + ":first");
                return e(n).removeClass(c), e(n).addClass(a), "function" === eval("typeof " + i.attr("id") + "_onClick") ? window[i.attr("id") + "_onClick"](!l, i.getCheckedVal(e(this).find(".jtree-check:first"))) : t.onClick && t.onClick.call(this, !l, i.getCheckedVal(e(this).find(".jtree-check:first"))), !1
            }
        }), c.on("click", "li .jtree-check", function () {
            var s = !e(this).hasClass("checked");
            s ? (e(this).addClass("checked"), e(this).closest("li").find(".jtree-check").addClass("checked")) : (e(this).removeClass("checked"), e(this).closest("li").find(".jtree-check").removeClass("checked")),
                function t(i, c) {
                    var s = e(i).closest("li").closest("ul").closest("li"),
                        a = s.find(".jtree-check").first();
                    a.length > 0 && (s.find(".jtree-check.checked").not(a).length > 0 ? e(a).addClass("checked") : c ? e(a).addClass("checked") : e(a).removeClass("checked"), t(s, c))
                }(this, s), "function" === eval("typeof " + i.attr("id") + "_onCheck") ? window[i.attr("id") + "_onCheck"](s, i.getCheckedVal(e(this))) : t.onCheck && t.onCheck.call(this, s, i.getCheckedVal(e(this)))
        }), l.on("input", function () {
            var i = e(this).val().toLowerCase();
            if (0 == i.length) {
                var s = c.find("li");
                e(s).css("color", "black"), e(s).attr("iscollaps", "true"), c.find("li[" + t.parentidColumn + '!="0"]').css("display", "none");
                var a = c.find("div.jtree-icon-expanded");
                return e(a).removeClass("jtree-icon-expanded"), e(a).addClass("jtree-icon-collaps"), void c.animate({
                    scrollTop: 0
                }, "fast")
            }
            c.find("li").each(function () {
                e(this).text().toLowerCase().search(i) > -1 ? (e(this).css("color", "#F44336"), this.scrollIntoView(!1), e(this).css("display", ""), o(e(this), !1)) : (0 != e(this).attr(t.parentidColumn) && e(this).css("display", "none"), o(e(this), !0), e(this).css("color", "#d2d2d2"))
            })
        }), i.getData = function () {
            return t.data
        }, i.getCheckedVal = function (t = null) {
            var i = [];
            return null == t ? (c.find(".checked").parent().parent().each(function () {
                for (var t = {}, c = 0, s = a.length; c < s; c++) t[a[c]] = e(this).attr(a[c]);
                i.push(t)
            }), i) : (t.parent().parent().each(function () {
                for (var t = {}, c = 0, s = a.length; c < s; c++) t[a[c]] = e(this).attr(a[c]);
                i.push(t)
            }), i)
        }, window[i.attr("id")] = i
    }
}(jQuery);