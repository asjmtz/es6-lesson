// var a = window;
// var Console = function() {
//     "use strict";
//     var b = !0;
//     try {
//         a.console.log("d[ o_0 ]b")
//     } catch (d) {
//         b = !1
//     }
//     var e = function() {
//     }, 
//     f = function(a) {
//         for (var b, d = [], e = 0; a.length > e; e++)
//             b = a[e], d.push("undefined" == typeof b ? "undefined" : c(b));
//         return d
//     }, 
//     g = e.prototype.methods = ["debug", "clear", "error", "info", "log", "warn", "dir", "props", "_raw", "group", "groupEnd", "dirxml", "table", "trace", "assert", "count", "markTimeline", "profile", "profileEnd", "time", "timeEnd", "timeStamp", "groupCollapsed"];
    
//     return g.forEach(function(b) {
//         e.prototype[b] = function() {
//             var c = [].slice.call(arguments), d = f(c);
//             k.postMessage("console", {
//                 method: "_raw" === b ? c.shift() : b,
//                 args: "_raw" === b ? d.slice(1) : d
//             }), 
//             a.console && ( 
//                 console[b] || ( b = "log" ), 
//                 a.console && "_raw" !== b && ("clear" !== b || "clear" === b && console.clear) && console[b].apply(console, c)
//             )
//         }
//     }), new e
// }()


(function ( win ) {

    var consoleMethods = [
        "debug", "clear", "error", "info", "log", 
        "warn", "dir", "props", "_raw", "group", "groupEnd", 
        "dirxml", "table", "trace", "assert", "count", "markTimeline", 
        "profile", "profileEnd", "time", "timeEnd", "timeStamp", "groupCollapsed"
    ];

    var Console = function () { }

    Console.prototype.methods = consoleMethods;

    consoleMethods.forEach( function( method ){
        var f = console;
        Console.prototype[method] = function(){
            // others;
            var args = [].slice.call( arguments )
            
            // 输出到页面
            // 如果是数组或对象形式的，还需要做其他处理
            // 数组： join()
            // 对象：
            //      1、将对象的 kv 分别取出，重组为数组形式 [ ' key: value ', 'key: value'  ]
            //      2、join()
            document.getElementById('console').innerHTML +=  '<br/>' + args;

            f[method].apply( f, args );
        }
    } )

    win.console = new Console();

})( window )

