!function(a,b,c,d){var e,f={id:-1,name:"",jsNameSpace:""},g=a.Games,h={init:function(a){var b=this;g.setCurrentMessage(b),b.events()},events:function(){},show:function(a,b){var d=this;g.getCurrentGame();c("#"+a+"MSG").remove(),g.getCurrentGame().defConfig.mask.show(),d.render({container:"body",data:b,tmplObj:"#"+a+"Tmpl"})},render:function(a){var b=c(a.tmplObj).html(),d=doT.template(b),e=d(a.data);c(a.container).append(e)}},i=a.ExtendClass(h,d);i.defConfig=f,i.getInstance=function(a){return e||(e=new i(a))},a[b]=i}(gagame,"GameMessage",jQuery,gagame.Event);