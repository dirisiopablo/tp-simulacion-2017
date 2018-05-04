(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("./searchcursor"),require("../dialog/dialog")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./searchcursor","../dialog/dialog"],e):e(CodeMirror)})(function(e){function t(a,c){"string"==typeof a?a=RegExp(a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),c?"gi":"g"):a.global||(a=RegExp(a.source,a.ignoreCase?"gi":"g"));return{token:function(b){a.lastIndex=b.pos;var d=
a.exec(b.string);if(d&&d.index==b.pos)return b.pos+=d[0].length,"searching";d?b.pos=d.index:b.skipToEnd()}}}function u(){this.overlay=this.posFrom=this.posTo=this.lastQuery=this.query=null}function g(a){return a.state.search||(a.state.search=new u)}function h(a){return"string"==typeof a&&a==a.toLowerCase()}function k(a,c,b){return a.getSearchCursor(c,b,h(c))}function l(a,c,b,d,e){a.openDialog?a.openDialog(c,e,{value:d,selectValueOnOpen:!0}):e(prompt(b,d))}function v(a,c,b,d){if(a.openConfirm)a.openConfirm(c,
d);else if(confirm(b))d[0]()}function p(a){var c=a.match(/^\/(.*)\/([a-z]*)$/);if(c)try{a=RegExp(c[1],-1==c[2].indexOf("i")?"":"i")}catch(b){}if("string"==typeof a?""==a:a.test(""))a=/x^/;return a}function m(a,c){var b=g(a);if(b.query)return q(a,c);var d=a.getSelection()||b.lastQuery||"";l(a,w,"Search for:",d,function(d){a.operation(function(){d&&!b.query&&(b.query=p(d),a.removeOverlay(b.overlay,h(b.query)),b.overlay=t(b.query,h(b.query)),a.addOverlay(b.overlay),a.showMatchesOnScrollbar&&(b.annotate&&
(b.annotate.clear(),b.annotate=null),b.annotate=a.showMatchesOnScrollbar(b.query,h(b.query))),b.posFrom=b.posTo=a.getCursor(),q(a,c))})})}function q(a,c){a.operation(function(){var b=g(a),d=k(a,b.query,c?b.posFrom:b.posTo);if(d.find(c)||(d=k(a,b.query,c?e.Pos(a.lastLine()):e.Pos(a.firstLine(),0)),d.find(c)))a.setSelection(d.from(),d.to()),a.scrollIntoView({from:d.from(),to:d.to()}),b.posFrom=d.from(),b.posTo=d.to()})}function n(a){return a.operation(function(){var c=g(a);if(c.lastQuery=c.query)return c.query=
null,a.removeOverlay(c.overlay),c.annotate&&(c.annotate.clear(),c.annotate=null),!0})}function r(a,c){if(!a.getOption("readOnly")){var b=a.getSelection()||g(a).lastQuery;l(a,x,"Replace:",b,function(b){b&&(b=p(b),l(a,y,"Replace with:","",function(e){if(c)a.operation(function(){for(var c=k(a,b);c.findNext();)if("string"!=typeof b){var f=a.getRange(c.from(),c.to()).match(b);c.replace(e.replace(/\$(\d)/g,function(a,b){return f[b]}))}else c.replace(e)});else{n(a);var f=k(a,b,a.getCursor()),g=function(){var c=
f.from(),e;!(e=f.findNext())&&(f=k(a,b),!(e=f.findNext())||c&&f.from().line==c.line&&f.from().ch==c.ch)||(a.setSelection(f.from(),f.to()),a.scrollIntoView({from:f.from(),to:f.to()}),v(a,z,"Replace?",[function(){h(e)},g]))},h=function(a){f.replace("string"==typeof b?e:e.replace(/\$(\d)/g,function(b,c){return a[c]}));g()};g()}}))})}}var w='Search: <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">(Use /re/ syntax for regexp search)</span>',
x='Replace: <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">(Use /re/ syntax for regexp search)</span>',y='With: <input type="text" style="width: 10em" class="CodeMirror-search-field"/>',z="Replace? <button>Yes</button> <button>No</button> <button>Stop</button>";e.commands.find=function(a){n(a);m(a)};e.commands.findNext=m;e.commands.findPrev=function(a){m(a,!0)};e.commands.clearSearch=n;e.commands.replace=r;e.commands.replaceAll=
function(a){r(a,!0)}});
