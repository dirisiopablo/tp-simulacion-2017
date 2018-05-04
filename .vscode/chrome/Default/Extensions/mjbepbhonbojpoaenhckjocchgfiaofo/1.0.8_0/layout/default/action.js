Registry.require(["crcrc","helper","layout/default/htmlutil","i18n","layout/default/layout_helper"],function(){var u=rea.FEATURES,q=Registry.get("crcrc").cr,h=Registry.get("crcrc").crc,z=Registry.get("helper"),r=Registry.get("layout/default/htmlutil"),l=Registry.get("i18n"),v=Registry.get("layout"),w=Registry.get("layout/default/layout_helper"),x=w.images;v.render(function(){var n={};w.addStyle();w.addFont();var v=function(c,a){var b=[];if(a.sub_menu_item){var d=h("table","actiontable","actiontable-"+
a.name);A(d,a.items);b.push(d)}else if(d=null,a.image?d=r.createImage(x.get(a.image),a.name,a.id,null,""):a.enabler&&(d=r.createImage(rea.extension.getURL(n.enabled?"/layout/default/images/button_ok.png":"/layout/default/images/cancel.png"),a.name,a.uuid,null,"")),d&&b.push(d),a.url||a.urls){for(var d=q("span",a.name,a.id,"urls"),e=a.urls||[a],f=0;f<e.length;f++){var g=e[f],y=document.createElement("span");y.textContent=g.name;var m=a.urls?y:c;m.url=g.url;m.newtab=g.newtab;m.addEventListener("click",
function(){D(this.url,this.newtab)});$(m).addClass("clickable");d.appendChild(y);f<e.length-1&&(g=document.createElement("span"),g.textContent=" | ",d.appendChild(g))}b.push(d)}else if(a.menucmd){var k=document.createElement("span");c.id=a.id;e=function(){E(this.id,function(){u.ACTIONMENU.CLOSE_ALLOWED&&window.close()})};c.addEventListener("click",e);$(c).addClass("clickable");k.textContent=a.name;a.accessKey&&(d=a.accessKey[0].toUpperCase(),F(d,e,c)?(e=RegExp(d,"i"),f=k.textContent.search(e),g=[],
-1==f&&(k.textContent+=" ("+d+")",f=k.textContent.search(e)),g.push({text:k.textContent.substr(0,f)}),g.push({text:k.textContent.substr(f,1),class:"underlined"}),g.push({text:k.textContent.substr(f+1)}),k.textContent="",g.forEach(function(d){var b=h("span",d.class||"",a.id,d);b.textContent=d.text;k.appendChild(b)})):console.warn("Registering keyboard shortcut for '"+a.name+"' failed"));b.push(k)}else if(a.button)d=h("span",a.display||"",a.name,a.id,"bu",!0),d.textContent=a.name,c.key=a.id,c.warning=
a.warning,c.reload=a.reload,c.data=a.data,c.addEventListener("click",function(){var a=!0;this.warning&&(a=G(this.warning));a&&H(this.key,{reload:this.reload,data:this.data})}),$(c).addClass("clickable"),b.push(d);else if(a.userscript||a.user_agent){var d=q("span",a.name,a.uuid,"ai"),p;a.uuid&&(f=null,f=a.blacklisted?"enabler_warning":a.enabled?a.contexter?"enabler_later":"enabler_enabled":"enabler_disabled",g=a.blacklisted?l.getMessage("This_script_is_blacklisted_"):a.enabled?l.getMessage("Enabled"):
l.getMessage("Disabled"),e=function(a){a&&a.button&2||a.button&1||a.ctrlKey?(window.open(rea.extension.getURL("options.html")+"#open="+this.key),a.stopPropagation()):I(this.uuid,"enabled",!this.oldvalue)},f=r.createEnabler(f,a.uuid,"enabled","enabled",g,e,0<a.position?10>a.position?" "+a.position:a.position:null),f.oldvalue=a.enabled,b.push(f),d.uuid=a.uuid,d.oldvalue=a.enabled,d.key=a.uuid,d.addEventListener("click",e),e=" clickable",a.blacklisted&&(e+=" crossedout",c.setAttribute("title",l.getMessage("This_script_is_blacklisted_"))),
$(c).addClass(e),e=[],a.nnew||a.system||!a.origin||(f=r.createImage(x.get("flag"),"",a.uuid,"issue",l.getMessage("Report_an_issue_to_the_script_hoster_"),function(){B(a.uuid,"hoster")}),e.push(f)),a.nnew||a.system||!a.support||(f=r.createImage(x.get("bug"),"",a.uuid,"bug",l.getMessage("Report_a_bug"),function(){B(a.uuid,"author")}),e.push(f)),e.length&&(p=h("div","actionbuttons",a.uuid,"actions"),e.forEach(function(a){p.appendChild(a)})));d.textContent=l.getTranslation(a,"name");b.push(d);p&&b.push(p)}else d=
q("span",a.name,a.id,"ai"),d.textContent=a.name,b.push(d);return b},A=function(c,a,b){for(var d in a){var e=a[d];if(!c)if(b[e.pos])e.items&&e.items.length&&$(b[e.pos]).show();else{console.warn("Warn(cAm): unknown pos "+e.pos);continue}var f=c||b[e.pos],g=f?q("tr",e.name,e.uuid||e.id,"outer"):null,h=v(g,e);if(h&&h.length)for(f.appendChild(g),d=0;f=h[d];d++){var m=d==h.length-1?3-d:0,k=q("td","actiontd",e.name,e.uuid||e.id,d);0<m&&k.setAttribute("colspan",m);f&&k.appendChild(f);g.appendChild(k)}}},
C=function(c,a){var b=document.getElementById("action"),d=b.parentNode;d.removeChild(b);b=q("span");b.setAttribute("id","action");d.appendChild(b);var e=h("table","actionlayout","actionlayout");b.appendChild(e);b=h("tr","actionpostr","hor");d=h("td","actionpostd","hor_west");b.appendChild(d);e.appendChild(b);var f=h("table","actionregion","top"),g=h("table","actionregion","right"),l,m=h("table","actionregion","left"),k=h("table","actionregion","bottom");if(2<Math.min(n.action_menu_columns,u.ACTIONMENU.COLUMNS)){l=
h("table","actionregion","center");var p=h("td","actionpostd","hor_center"),e=h("td","actionpostd","hor_east");p.appendChild(l);b.appendChild(p);b.appendChild(e)}else 1<Math.min(n.action_menu_columns,u.ACTIONMENU.COLUMNS)?(l=g,e=h("td","actionpostd","hor_east"),b.appendChild(e)):l=e=m;$([l,g]).hide();d.appendChild(f);e.appendChild(g);d.appendChild(m);d.appendChild(k);A(null,c,{top:f,left:m,center:l,right:g,bottom:k})},D=function(c,a){try{var b=function(){a&&u.ACTIONMENU.CLOSE_ALLOWED&&window.close()};
a?sendMessage({method:"newTab",url:c},b):rea.tabs.getSelected(null,function(d){rea.tabs.sendMessage(d.id,{method:"loadUrl",url:c,newtab:a},b)})}catch(d){console.warn("lU:",d)}},G=function(c){var a=confirm(c.msg),b={};a&&c.ok?b=c.ok:!a&&c.cancel&&(b=c.cancel);if(c.ok||c.cancel)a=!0;b.url&&sendMessage({method:"newTab",url:b.url},function(a){});return a},B=function(c,a,b){try{sendMessage({method:"reportAnIssue",uuid:c,to:a},function(a){b&&b()})}catch(d){console.warn("raI:",d)}},H=function(c,a){try{sendMessage({method:"buttonPress",
name:c,data:a.data},function(b){a.reload&&window.location.reload()})}catch(b){console.warn("rSU:",b)}},t={},J=function(c,a,b){document.body.addEventListener("keydown",function(a){if(!(a.altKey||a.ctrlKey||a.shiftKey))for(var b in t)if(t.hasOwnProperty(b)){var c=t[b];c&&a.keyCode==c.key&&c.cb.apply(c.elem||window,[])}},!1)},F=function(c,a,b){c=c.charCodeAt(0);if(t[c])return console.log("MenuCmdKeyListener: ...failed!"),!1;t[c]={key:c,cb:a,elem:b};return!0},E=function(c,a){try{sendMessage({method:"execMenuCmd",
id:c},function(b){a&&a()})}catch(b){console.warn("Error(eMC):",b)}},I=function(c,a,b){try{c={method:"modifyScriptOptions",uuid:c},a&&""!=a&&(c[a]=b),document.getElementById("action").textContent=l.getMessage("Please_wait___"),sendMessage(c,function(a){a&&(a.i18n&&l.setLocale(a.i18n),a.items&&(a.options&&(n=z.assign(n,a.options)),C(a.items)))})}catch(d){console.warn("Error(mSo): "+d.message)}};rea.extension.onMessage.addListener(function(c,a,b){"updateActions"==c.method?window.location.reload():console.log("onMessage: Unknown method '"+
c.method+"'")});(function(c,a){sendMessage({method:"loadTree",referrer:c},function(b){b.options&&(n=z.assign(n,b.options));b.i18n&&l.setLocale(b.i18n);a(b.items)})})("actions",function(c){J();C(c)})})});
