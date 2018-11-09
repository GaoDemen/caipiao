(function(a){a.fn.zclip=function(c){if(typeof c=="object"&&!c.length){var b=a.extend({path:"ZeroClipboard.swf",copy:null,beforeCopy:null,afterCopy:null,clickAfter:true,setHandCursor:true,setCSSEffects:true},c);return this.each(function(){var e=a(this);if(e.is(":visible")&&(typeof b.copy=="string"||a.isFunction(b.copy))){ZeroClipboard.setMoviePath(b.path);var d=new ZeroClipboard.Client();if(a.isFunction(b.copy)){e.bind("zClip_copy",b.copy)}if(a.isFunction(b.beforeCopy)){e.bind("zClip_beforeCopy",b.beforeCopy)}if(a.isFunction(b.afterCopy)){e.bind("zClip_afterCopy",b.afterCopy)}d.setHandCursor(b.setHandCursor);d.setCSSEffects(b.setCSSEffects);d.addEventListener("mouseOver",function(f){e.trigger("mouseenter")});d.addEventListener("mouseOut",function(f){e.trigger("mouseleave")});d.addEventListener("mouseDown",function(f){e.trigger("mousedown");if(!a.isFunction(b.copy)){d.setText(b.copy)}else{d.setText(e.triggerHandler("zClip_copy"))}if(a.isFunction(b.beforeCopy)){e.trigger("zClip_beforeCopy")}});d.addEventListener("complete",function(f,g){if(a.isFunction(b.afterCopy)){e.trigger("zClip_afterCopy")}else{if(g.length>500){g=g.substr(0,500)+"...\n\n("+(g.length-500)+" characters not shown)"}e.removeClass("hover");alert("Copied text to clipboard:\n\n "+g)}if(b.clickAfter){e.trigger("click")}});d.glue(e[0],e.parent()[0]);a(window).bind("load resize",function(){d.reposition()})}})}else{if(typeof c=="string"){return this.each(function(){var f=a(this);c=c.toLowerCase();var e=f.data("zclipId");var d=a("#"+e+".zclip");if(c=="remove"){d.remove();f.removeClass("active hover")}else{if(c=="hide"){d.hide();f.removeClass("active hover")}else{if(c=="show"){d.show()}}}})}}}})(jQuery);var ZeroClipboard={version:"1.0.7",clients:{},moviePath:"ZeroClipboard.swf",nextId:1,$:function(a){if(typeof(a)=="string"){a=document.getElementById(a)}if(!a.addClass){a.hide=function(){this.style.display="none"};a.show=function(){this.style.display=""};a.addClass=function(b){this.removeClass(b);this.className+=" "+b};a.removeClass=function(d){var e=this.className.split(/\s+/);var b=-1;for(var c=0;c<e.length;c++){if(e[c]==d){b=c;c=e.length}}if(b>-1){e.splice(b,1);this.className=e.join(" ")}return this};a.hasClass=function(b){return !!this.className.match(new RegExp("\\s*"+b+"\\s*"))}}return a},setMoviePath:function(a){this.moviePath=a},dispatch:function(d,b,c){var a=this.clients[d];if(a){a.receiveEvent(b,c)}},register:function(b,a){this.clients[b]=a},getDOMObjectPosition:function(c,a){var b={left:0,top:0,width:c.width?c.width:c.offsetWidth,height:c.height?c.height:c.offsetHeight};if(c&&(c!=a)){b.left+=c.offsetLeft;b.top+=c.offsetTop}return b},Client:function(a){this.handlers={};this.id=ZeroClipboard.nextId++;this.movieId="ZeroClipboardMovie_"+this.id;ZeroClipboard.register(this.id,this);if(a){this.glue(a)}}};ZeroClipboard.Client.prototype={id:0,ready:false,movie:null,clipText:"",handCursorEnabled:true,cssEffects:true,handlers:null,glue:function(d,b,e){this.domElement=ZeroClipboard.$(d);var f=99;if(this.domElement.style.zIndex){f=parseInt(this.domElement.style.zIndex,10)+1}if(typeof(b)=="string"){b=ZeroClipboard.$(b)}else{if(typeof(b)=="undefined"){b=document.getElementsByTagName("body")[0]}}var c=ZeroClipboard.getDOMObjectPosition(this.domElement,b);this.div=document.createElement("div");this.div.className="zclip";this.div.id="zclip-"+this.movieId;$(this.domElement).data("zclipId","zclip-"+this.movieId);var a=this.div.style;a.position="absolute";a.left=""+c.left+"px";a.top=""+c.top+"px";a.width=""+c.width+"px";a.height=""+c.height+"px";a.zIndex=f;if(typeof(e)=="object"){for(addedStyle in e){a[addedStyle]=e[addedStyle]}}b.appendChild(this.div);this.div.innerHTML=this.getHTML(c.width,c.height)},getHTML:function(d,a){var c="";var b="id="+this.id+"&width="+d+"&height="+a;if(navigator.userAgent.match(/MSIE/)){var e=location.href.match(/^https/i)?"https://":"http://";c+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+e+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+d+'" height="'+a+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+b+'"/><param name="wmode" value="transparent"/></object>'}else{c+='<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+d+'" height="'+a+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+b+'" wmode="transparent" />'}return c},hide:function(){if(this.div){this.div.style.left="-2000px"}},show:function(){this.reposition()},destroy:function(){if(this.domElement&&this.div){this.hide();this.div.innerHTML="";var a=document.getElementsByTagName("body")[0];try{a.removeChild(this.div)}catch(b){}this.domElement=null;this.div=null}},reposition:function(c){if(c){this.domElement=ZeroClipboard.$(c);if(!this.domElement){this.hide()}}if(this.domElement&&this.div){var b=ZeroClipboard.getDOMObjectPosition(this.domElement);var a=this.div.style;a.left=""+b.left+"px";a.top=""+b.top+"px"}},setText:function(a){this.clipText=a;if(this.ready){this.movie.setText(a)}},addEventListener:function(a,b){a=a.toString().toLowerCase().replace(/^on/,"");if(!this.handlers[a]){this.handlers[a]=[]}this.handlers[a].push(b)},setHandCursor:function(a){this.handCursorEnabled=a;if(this.ready){this.movie.setHandCursor(a)}},setCSSEffects:function(a){this.cssEffects=!!a},receiveEvent:function(d,f){d=d.toString().toLowerCase().replace(/^on/,"");switch(d){case"load":this.movie=document.getElementById(this.movieId);if(!this.movie){var c=this;setTimeout(function(){c.receiveEvent("load",null)},1);return}if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){var c=this;setTimeout(function(){c.receiveEvent("load",null)},100);this.ready=true;return}this.ready=true;try{this.movie.setText(this.clipText)}catch(h){}try{this.movie.setHandCursor(this.handCursorEnabled)}catch(h){}break;case"mouseover":if(this.domElement&&this.cssEffects){this.domElement.addClass("hover");if(this.recoverActive){this.domElement.addClass("active")}}break;case"mouseout":if(this.domElement&&this.cssEffects){this.recoverActive=false;if(this.domElement.hasClass("active")){this.domElement.removeClass("active");this.recoverActive=true}this.domElement.removeClass("hover")}break;case"mousedown":if(this.domElement&&this.cssEffects){this.domElement.addClass("active")}break;case"mouseup":if(this.domElement&&this.cssEffects){this.domElement.removeClass("active");this.recoverActive=false}break}if(this.handlers[d]){for(var b=0,a=this.handlers[d].length;b<a;b++){var g=this.handlers[d][b];if(typeof(g)=="function"){g(this,f)}else{if((typeof(g)=="object")&&(g.length==2)){g[0][g[1]](this,f)}else{if(typeof(g)=="string"){window[g](this,f)}}}}}}};
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$(1Z).1Y(s(){$(\'.b-X,.Y-1X\').E(\'a\').C(s(){m($(F).1i(\'J\')){$(F).1k(\'J\')}I{$(F).1o(\'J\')}});$(\'.b-16\').E(\'a.b-1t\').C(s(){$(F).1w(\'14.b-16\').1v(\'14.b-X\').E(\'a\').1o(\'J\')});$(\'.b-16\').E(\'a.b-1W\').C(s(){$(F).1w(\'14.b-16\').1v(\'14.b-X\').E(\'a\').1k(\'J\')});g f=[],17=\'\';g w=s(a,b){g Q=[],11=(a.o>b.o)?a:b,1f=(a.o>b.o)?b:a;r(g i=0;i<11.o;i++){g 1g=24;r(g j=0;j<1f.o;j++){m(11[i]==1f[j])1g=1D}m(1g)Q.q(11[i])}y Q};g 1r=s(d){g Q=[],i=d.o;26(i--){m(d[i]!=d[i+1]){Q.q(d[i])}}y Q};g D=s(H){$(\'.1N-1j\').1F();$(\'#f\').1b(\'\').1b(H.1l().1P(\' \'));$(\'.1c-V\').E(\'b.1O\').1u(H.o);$(\'.1c-V\').E(\'b.1U\').1u(H.o*2)};g G=s(1s){g H=[];$(\'#\'+1s+\'-V\').E(\'a\').1n(s(j,1x){m($(F).1i(\'J\')){H.q($(F).1y(\'H-1j\'))}});y H};$(\'.1C-1t\').C(s(){g a=[],b,1S,17=[];$(\'.b-X\').1n(s(i,e){b=[];$(\'.b-X\').1J(i).E(\'a\').1n(s(j,1x){m($(F).1i(\'J\')){b.q($(F).1y(\'H-1j\'))}});a.q(b)});r(g i=0;i<a[0].o;i++){r(g j=0;j<a[1].o;j++){r(g k=0;k<a[2].o;k++){17.q(a[0][i]+\'\'+a[1][j]+\'\'+a[2][k])}}};f=17;D(f);y f});$(\'.1C-x\').C(s(){g i=0,v=f.o,t=[],1d=[];r(i;i<v;i++){g a=f[i].l(0,1),b=f[i].l(1,1),c=f[i].l(2,1);m((a!=b)&&(a!=c)&&(b!=c)){t.q(a+\'\'+b+\'\'+c);t.q(a+\'\'+c+\'\'+b);t.q(b+\'\'+a+\'\'+c);t.q(b+\'\'+c+\'\'+a);t.q(c+\'\'+a+\'\'+b);t.q(c+\'\'+b+\'\'+a)}m((a==b)&&(a!=c)){t.q(a+\'\'+b+\'\'+c);t.q(c+\'\'+a+\'\'+b);t.q(b+\'\'+c+\'\'+a)}m((a==c)&&(a!=b)){t.q(a+\'\'+c+\'\'+b);t.q(b+\'\'+a+\'\'+c);t.q(c+\'\'+b+\'\'+a)}m((b==c)&&(b!=a)){t.q(b+\'\'+c+\'\'+a);t.q(a+\'\'+c+\'\'+b);t.q(b+\'\'+a+\'\'+c)}};t=t.1l();1d=1r(t);D(1d);y f=1d.1l()});$(\'#j-1B\').C(s(){g i=0,1m=G(\'j-1B\'),O,v=f.o,12=[],t=[];r(i;i<v;i++){g a=f[i].l(0,1),b=f[i].l(1,1),c=f[i].l(2,1);m((a>=b)&&(b>=c)){O=a-c}I m((a>=c)&&(c>=b)){O=a-b}I m((b>=a)&&(a>=c)){O=b-c}I m((b>=c)&&(c>=a)){O=b-a}I m((c>=a)&&(a>=b)){O=c-b}I m((c>=b)&&(b>=a)){O=c-a}r(g j=0;j<1m.o;j++){m(O==1m[j]){t.q(f[i])}}};12=w(f,t);D(12);y f=12});$(\'#j-1A\').C(s(){g i=0,1e=G(\'j-1A\'),2a,v=f.o,S=[];r(i;i<v;i++){g H=\'\';r(g j=0;j<3;j++){H=f[i].l(j,1);r(g k=0;k<1e.o;k++){m(f[i].l(j,1)==1e[k]){m(f[i].l(0,1)==f[i].l(1,1)&&f[i].l(1,1)==f[i].l(2,1)){S.q(f[i])}I{S.q(f[i])}}}}};D(w(S,f));y f=w(S,f)});$(\'#j-1z\').C(s(){g i=0,L=G(\'j-1z\'),v=f.o,P=[];m(!L)y 1D;r(i;i<v;i++){g a=f[i].l(0,1),b=f[i].l(1,1),c=f[i].l(2,1);m((a==b)&&(b==c)){r(g j=0;j<L.o;j++){m(L[j]==\'2\'){P.q(f[i])}}}I m((a==b)||(a==c)||(b==c)){r(g j=0;j<L.o;j++){m(L[j]==\'0\'){P.q(f[i])}}}I m((a!=b)&&(a!=c)){r(g j=0;j<L.o;j++){m(L[j]==\'1\'){P.q(f[i])}}}};D(w(P,f));y f=w(P,f)});$(\'#j-1p\').C(s(){g j=0,T=G(\'j-1p\'),v=f.o,15=[];r(j;j<T.o;j++){g B=p(T[j].l(0,1)),A=p(T[j].l(1,1)),K=p(T[j].l(2,1));r(g i=0;i<v;i++){g a=p(f[i].l(0,1)),b=p(f[i].l(1,1)),c=p(f[i].l(2,1));m(((a%3)==B)&&((b%3)==A)&&((c%3)==K)){15.q(f[i])}}}D(w(15,f));y f=w(15,f)});$(\'#j-1q\').C(s(){g i=0,18=G(\'j-1q\'),v=f.o,19=[];r(g i=0;i<18.o;i++){g B=p(18[i].l(0,1)),A=p(18[i].l(1,1));r(g j=0;j<v;j++){g a=p(f[j].l(0,1)),b=p(f[j].l(1,1)),c=p(f[j].l(2,1));m(((a==B)&&(b==B))||((a==B)&&(c==B))||((b==B)&&(c==B))||((a==A)&&(b==A))||((a==A)&&(c==A))||((b==A)&&(c==A))){19.q(f[j])}}};D(w(19,f));y f=w(19,f)});$(\'#j-1I\').C(s(){g j=0,M=G(\'j-1I\'),v=f.o,N=[];r(j;j<M.o;j++){r(g i=0;i<v;i++){g a=p(f[i].l(0,1)),b=p(f[i].l(1,1)),c=p(f[i].l(2,1));m(M[j]==(a+b+c)){N.q(f[i])}}};D(w(N,f));y f=w(N,f)});$(\'#j-1M\').C(s(){g j=0,M=G(\'j-1M\'),v=f.o,N=[];r(j;j<M.o;j++){r(g i=0;i<v;i++){g a=p(f[i].l(0,1)),b=p(f[i].l(1,1)),c=p(f[i].l(2,1));m((a+b+c)%3==M[j]||(a+b+c)%3==M[j]||(a+b+c)%3==M[j]){N.q(f[i])}}};D(w(N,f));y f=w(N,f)});$(\'#j-1L\').C(s(){g j=0,W=G(\'j-1L\'),v=f.o,Z=[];r(j;j<W.o;j++){g B=p(W[j].l(0,1)),A=p(W[j].l(1,1)),K=p(W[j].l(2,1));r(g i=0;i<v;i++){g a=p(f[i].l(0,1)),b=p(f[i].l(1,1)),c=p(f[i].l(2,1));m(((a%2)==B)&&((b%2)==A)&&((c%2)==K)){Z.q(f[i])}}};D(w(Z,f));y f=w(Z,f)});$(\'#j-1K\').C(s(){g j=0,U=G(\'j-1K\'),v=f.o,13=[];r(j;j<U.o;j++){g B=p(U[j].l(0,1)),A=p(U[j].l(1,1)),K=p(U[j].l(2,1));r(g i=0;i<v;i++){g a=p(f[i].l(0,1)),b=p(f[i].l(1,1)),c=p(f[i].l(2,1)),k=0;m(B==4){m(a<5){k=k+1}}m(B==5){m(a>4){k=k+1}}m(A==4){m(b<5){k=k+1}}m(A==5){m(b>4){k=k+1}}m(K==4){m(c<5){k=k+1}}m(K==5){m(c>4){k=k+1}}m(k==3){13.q(f[i])}}};D(w(13,f));y f=w(13,f)});$(\'#j-1E\').C(s(){g j=0,R=G(\'j-1E\'),v=f.o,10=[],z=[2,3,5,7],h=[4,6,8,9];g 1a=s(u){g a=1;r(g i=0;i<z.o;i++){m(u==z[i]){y a=0}I m(u==h[i]){y a=1}}y a};r(j;j<R.o;j++){g B=p(R[j].l(0,1)),A=p(R[j].l(1,1)),K=p(R[j].l(2,1));r(g i=0;i<v;i++){g a=p(f[i].l(0,1)),b=p(f[i].l(1,1)),c=p(f[i].l(2,1));m(1a(a)==B&&1a(b)==A&&1a(c)==K){10.q(f[i])}}};D(w(10,f));y f=w(10,f)});$(\'.Y-1h\').E(\'1H\').C(s(29){g i=$(F).2b();$(F).28(\'27\').E(\'1H\').1k(\'J\');$(F).1o(\'J\');$(\'.Y-1G\').E(\'.1h-V\').1F();$(\'.Y-1G\').E(\'.1h-V\').1J(i).1T()});$(".1c-1Q").1R({22:\'1V/23.25\',1c:s(){y $(\'#f\').1b()},21:s(){20(\'复制成功!\\n\'+$(\'#f\').1b())}})});',62,136,'|||||||||||||||dallData|var|||||substr|if||length|parseInt|push|for|function|delData||len|diff_array||return||_b|_a|click|htmlBox|find|this|aFun|data|else|active|_c|zxVal|hzVal|hzData|kdNum|zxData|diff|zhlVal|xdData|dVal|dxVal|box|joVal|content|fun|joData|zhlData|attr1|kdData|dxData|div|dData|control|codeBall|zhVal|zhData|zhUnm|val|copy|zuData|xdVal|attr2|flag|tag|hasClass|num|removeClass|sort|kdVal|each|addClass|012|zh|diff_same|dom|all|html|prev|parent|el|attr|zx|xd|kd|input|false|zhl|hide|center|li|hz|eq|dx|jo|hz3|code|allbet|join|btn|zclip|bLength|show|price|js|clear|list|ready|document|alert|afterCopy|path|ZeroClipboard|true|swf|while|ul|parents|event|xdNum|index'.split('|'),0,{}))