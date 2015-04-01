/**
 * Created with IntelliJ IDEA.
 * User: 黄川
 * Date Time: 14-9-29下午5:12
 */
(function (win) {
    var _select = function select(select_box) {
        var that = this;
        var select_html = function (select) {
            var html = "";
            for (var i = 0; i < select.options.length; i++) {
                html += "<li  class='select-box-li'><a>" + select.options[i].innerText + "</a></li>";
            }
            return html;
        };
        var liOnclick = function (li) {
            for (var i = 0; i < li.length; i++) {
                li[i].onclick = function () {
                    that.span.innerText = this.innerText;
                    that.active(this);
                    that.ul.style.display = "none";
                };
            }
        };
        that.active = function (t) {
            for (var j = 0; j < that.li.length; j++) {
                if (t == that.li[j]) {
                    that.select.options[j].selected = true;
                    that.li[j].classList.add("active");
                } else {
                    that.li[j].classList.remove("active");
                }
            }
            if(that.select.getAttribute("onchange")){
                that.select.onchange();
            }
        }
        that.select = select_box.getElementsByTagName("select")[0];
        that.span = select_box.getElementsByTagName("span")[0];
        that.ul = select_box.getElementsByTagName("ul")[0];
        that.box_input = select_box.querySelector(".select-box-input");
        that.li = '';
        that.init = function () {
            that.span.innerText = that.select.options[0].innerText;
            that.ul.innerHTML = select_html(that.select);
            that.li = that.ul.getElementsByTagName("li");
            liOnclick(that.li);
        };
        that.box_input.onclick = function () {
            if (that.ul.style.display == "none") {
                that.ul.style.display = "block";
            } else {
                that.ul.style.display = "none";
            }
            if (that.select.getAttribute("onclick")) {
                that.select.onclick();
            }
        };
        that.init();

    }
    win._select = _select;
}(window));
window.addEventListener("load", function () {
    var select_box = document.querySelectorAll(".select-box-sub");
    var selectx = new Array();
    for (var i = 0; i < select_box.length; i++) {
        selectx[i] = new _select(select_box[i]);
        console.log(selectx[i])
    }
}, false);