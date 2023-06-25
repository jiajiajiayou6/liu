layui.define(["jquery"], function (exports) {
    let $ = layui.jquery;
    $("body").append($("<h1>123</h1>"))
    let data = {
        msg: "Hello",
        fun: function () {
            return "123456789"
        },
    }
    exports("myMod", "<h1>123</h1>");
});
