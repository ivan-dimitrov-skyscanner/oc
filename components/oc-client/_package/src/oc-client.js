"use strict";var oc=oc||{};!function(e,r,n){oc.conf=oc.conf||{},oc.cmd=oc.cmd||[];var o,t="https://cdnjs.cloudflare.com/ajax/libs/",a=t+"jquery-ajaxtransport-xdomainrequest/1.0.3/jquery.xdomainrequest.min.js",c=t+"handlebars.js/3.0.1/handlebars.runtime.js",i=t+"jade/1.9.2/runtime.min.js",d=t+"jquery/1.11.2/jquery.min.js",u=oc.conf.retryInterval||5e3,f=oc.conf.pollingInterval||500,l=oc.conf.tag||"oc-component",s="Href parameter missing",m="Error getting compiled view: {0}",p="Error rendering component: {0}, error: {1}",v="Failed to retrieve the component. Retrying in {0} seconds...".replace("{0}",u/1e3),h='Error loading component: view engine "{0}" not supported',y="Loading...",g="Component '{0}' correctly rendered",j="Unrendered component found. Trying to retrieve it...",q=oc.conf.debug||!1,b=function(){},x=n.navigator.userAgent,w=!!x.match(/MSIE 8/),C=!!x.match(/MSIE 9/),E=!1,I=!1,U={error:function(e){return console.log(e)},info:function(e){return q?console.log(e):!1}};oc.require=function(r,o,t){"function"==typeof o&&(t=o,o=r,r=void 0),"string"==typeof r&&(r=[r]);var a=function(){var e=n;if("undefined"==typeof r)return!0;for(var o=0;o<r.length;o++)if(e=e[r[o]],!e)return!0;return!1},c=function(){var e=n;if("undefined"==typeof r)return void 0;for(var o=0;o<r.length;o++)if(e=e[r[o]],!e)return void 0;return e};a()?e.load(o,function(){t(c())}):t(c())};var M=function(e,r,n){var o=Math.floor(9999999999*Math.random());e.html(r.html),e.attr("id",o),e.attr("data-rendered",!0),e.attr("data-rendering",!1),e.attr("data-version",r.version),r.key&&e.attr("data-hash",r.key),n()};oc.build=function(e){if(!e.baseUrl)throw"baseUrl parameter is required";if(!e.name)throw"name parameter is required";var r=function(e){return e=e||"","/"!==e.slice(-1)&&(e+="/"),e},n=r(e.baseUrl)+r(e.name);if(e.version&&(n+=r(e.version)),e.parameters){n+="?";for(var o in e.parameters)e.parameters.hasOwnProperty(o)&&(n+=o+"="+e.parameters[o]+"&");n=n.slice(0,-1)}return w?'<div data-oc-component="true" href="'+n+'"></div>':"<"+l+' href="'+n+'"></'+l+">"},oc.ready=function(e){if(E)return e();if(I)oc.cmd.push(e);else{I=!0;var r=function(e){!w&&!C||o.IE_POLYFILL_LOADED?e():oc.require(a,e)},n=function(){E=!0,I=!1,e();for(var r=0;r<oc.cmd.length;r++)oc.cmd[r](oc);oc.cmd={push:function(e){e(oc)}}};oc.require("jQuery",d,function(e){o=e,r(n)})}},oc.render=function(e,r,n){oc.ready(function(){e.type.match(/jade|handlebars/g)?oc.require(["oc","components",e.key],e.src,function(o){o?"handlebars"===e.type?oc.require("Handlebars",c,function(e){var t=e.template(o,[]);n(null,t(r))}):"jade"===e.type&&oc.require("jade",i,function(e){n(null,o(r))}):n(m.replace("{0}",e.src))}):n(h.replace("{0}",e.type))})},oc.renderNestedComponent=function(e,r){oc.ready(function(){var n=e.attr("data-rendering"),o=e.attr("data-rendered"),t="boolean"==typeof n?n:"true"===n,a="boolean"==typeof o?o:"true"===o;t||a?setTimeout(r,f):(U.info(j),e.attr("data-rendering",!0),e.html('<div class="oc-loading">'+y+"</div>"),oc.renderByHref(e.attr("href"),function(n,o){return n||!o?(U.error(n),r()):void M(e,o,r)}))})},oc.renderByHref=function(e,r){oc.ready(function(){return""===e?r(p.replace("{1}",s)):void o.ajax({url:e,headers:{Accept:"application/vnd.oc.prerendered+json"},contentType:"text/plain",crossDomain:!0,async:!0,success:function(e){if("pre-rendered"===e.renderMode)oc.render(e.template,e.data,function(n,o){return n?r(p.replace("{0}",e.href).replace("{1}",n)):(U.info(g.replace("{0}",e.template.src)),void r(null,{html:o,key:e.template.key,version:e.version}))});else if("rendered"===e.renderMode){if(U.info(g.replace("{0}",e.href)),0===e.html.indexOf("<"+l)){var n=e.html.slice(e.html.indexOf(">")+1),o=n.slice(0,n.lastIndexOf("<"));e.html=o}r(null,{html:e.html,version:e.version})}},error:function(){U.error(v),setTimeout(function(){oc.renderByHref(e,r)},u)}})})},oc.renderUnloadedComponents=function(){oc.ready(function(){var e=w?"div[data-oc-component=true]":l,r=o(e+"[data-rendered!=true]"),n=function(e,r){oc.renderNestedComponent(o(e[r]),function(){r++,r<e.length?n(e,r):oc.renderUnloadedComponents()})};r.length>0&&n(r,0)})},oc.load=function(e,r,n){oc.ready(function(){if("function"!=typeof n&&(n=b),o(e)){o(e).html("<"+l+' href="'+r+'" />');var t=o(l,e);oc.renderNestedComponent(t,function(){n(t)})}})},oc.ready(oc.renderUnloadedComponents)}(head,document,window);