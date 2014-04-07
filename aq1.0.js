var AQ;(function(){"use strict";function D(e){var t;t=typeof e;if(t==="number"){if(isNaN(e)){t="NaN"}}else if(t==="object"){if(e){if(e instanceof Array){t="array"}}else{t="null"}}return t}function P(e){if(e.stopPropagation){e.stopPropagation()}else{e.cancelBubble=true}e.preventDefault();return false}function H(e){var t;t=x;if(t&&typeof t==="function"){try{t(e+"\n")}catch(n){window.alert("AQ DEBUG: "+e+" ["+n.message+"]\n")}}}function B(e){var t,n,r;t="";if(e.search(".js")!==-1){n=e.lastIndexOf("/")+1;r=e.substr(n).replace(/^[\s\(\)]+|[\s\(\)]+$/g,"");if(r.split(":").length===3){r=r.substr(0,r.lastIndexOf(":"))}if(r!==""){t+="    "+r+"\n"}}return t}function j(e){var t,n,r,i;if(console&&console.log){console.log(e)}if(!e.split){return e}t=e.split("\n");r="";i=t.length;for(n=0;n<i;n+=1){r+=B(t[n])}return r}function F(e,t){var n;E=true;if(typeof e!=="string"||e.length<1){e="???"}e="AQ ERROR: "+e+"\n";if(T&&t){e+=j(t.stack)+"\n"}n=x;if(n&&typeof n==="function"){try{n(e)}catch(r){window.alert(e+" ["+t.message+"]\n")}}return AQ.ERROR}function I(e){try{throw new Error("AQ ERROR")}catch(t){return F(e,t)}}function q(e,t){var n,r,i,s,o;n=D(t);if(n==="undefined"||t===null||t===AQ.DEFAULT){return k}if(n!=="array"){return I(e+".fileTypes not an array")}r=t.length;if(r<1){return I(e+".fileTypes array empty")}s=[];for(i=0;i<r;i+=1){o=t[i];if(!o||typeof o!=="string"||o.length<1){return I(e+"Invalid .fileType entry @ "+i)}o=o.toLowerCase();if(k.indexOf(o)>=0){if(s.indexOf(o)<0){s.push(o)}}}if(s.length<1){return I(e+"No playable audio types listed")}return s}function R(e,t,n){var r,i;r=D(n);if(!n||r==="undefined"){return AQ.DONE}if(r!=="object"){return I(e+"params not an object")}i=n.path;r=D(i);if(r!=="undefined"){if(i===AQ.DEFAULT){i=u.path}else if(r!=="string"||i.length<1){return I(e+".path property not a valid string")}t.path=i}i=q(e,n.fileTypes);if(i===AQ.ERROR){return AQ.ERROR}if(i){t.fileTypes=i}i=n.autoplay;r=D(i);if(r!=="undefined"){if(i!==true&&i!==false){if(i===AQ.DEFAULT){i=u.autoplay}else if(i===null){i=false}else if(r==="number"){i=i!==0}else{return I(e+".autoplay property invalid")}}t.autoplay=i}i=n.lock;r=D(i);if(r!=="undefined"){if(i!==true&&i!==false){if(i===AQ.DEFAULT){i=u.lock}else if(i===null){i=false}else if(r==="number"){i=i!==0}else{return I(e+".lock property invalid")}}t.lock=i}i=n.volume;r=D(i);if(r!=="undefined"){if(i===AQ.DEFAULT){i=u.volume}else{if(r!=="number"){return I(e+".volume property not a number")}if(i>s){i=s}else if(i<0){i=0}}t.volume=i}i=n.loop;r=D(i);if(r!=="undefined"){if(i!==true&&i!==false){if(i===AQ.DEFAULT){i=u.loop}else if(i===null){i=false}else if(r==="number"){i=i!==0}else{return I(e+".loop property invalid")}}t.loop=i}i=n.start;r=D(i);if(r!=="undefined"){if(i===AQ.DEFAULT){i=u.start}else{if(r!=="number"){return I(e+".start property not a number")}i=Math.floor(i);if(i<0){i=0}}t.start=i}i=n.end;r=D(i);if(r!=="undefined"){if(i===AQ.DEFAULT){i=u.end}else{if(r!=="number"){return I(e+".end property not a number")}i=Math.floor(i);if(i<0){i=0}}t.end=i}i=n.onLoad;r=D(i);if(r!=="undefined"){if(i===AQ.DEFAULT){i=u.onLoad}else if(r!=="function"){return I(e+".onLoad property not a function")}t.onLoad=i}i=n.onPlay;r=D(i);if(r!=="undefined"){if(i===AQ.DEFAULT){i=u.onPlay}else if(r!=="function"){return I(e+".onPlay property not a function")}t.onPlay=i}i=n.onEnd;r=D(i);if(r!=="undefined"){if(i===AQ.DEFAULT){i=u.onEnd}else if(r!=="function"){return I(e+".onEnd property not a function")}t.onEnd=i}i=n.data;r=D(i);if(r!=="undefined"){if(i===AQ.DEFAULT){i=u.data}t.data=i}return AQ.DONE}function U(e){return{name:e,path:S,fileTypes:k,lock:u.loop,volume:u.volume,start:u.start,end:u.end,loop:u.loop,autoplay:u.autoplay,onLoad:u.onLoad,onPlay:u.onPlay,onEnd:u.onEnd,data:u.data}}var e="AQ";var t=1;var n=0;var r=6;var i=false;var s=1;var o=32;var u={path:"",filetypes:["ogg","mp3","wav"],autoplay:false,volume:.5,start:0,end:-1,loop:false,lock:false,onLoad:null,onPlay:null,onEnd:null,data:0};var a="bf_";var f="ch_";var l="EMPTY";var c="PRELOADING";var h="LOADING";var p="READY";var d="PLAYING";var v="PAUSED";var m=0;var g=1;var y=2;var b=3;var w=false;var E=false;var S="";var x=null;var T=false;var N=false;var C=false;var k=null;var L={ogg:{ok:false,type:'audio/ogg; codecs="vorbis"'},mp3:{ok:false,type:'audio/mpeg; codecs="mp3"'},wav:{ok:false,type:'audio/wav; codecs="1"'},aac:{ok:false,type:'audio/mp4; codecs="mp4a.40.2"'},webm:{ok:false,type:'audio/webm; codecs="vorbis"'},opus:{ok:false,type:'audio/ogg; codecs="opus"'}};var A=[];var O=0;var M=0;var _=null;var z={context:null,buffers:[],bufferID:0,stopChannel:function(e){var t,n;t="[AQ._web.stopChannel] ";if(E){return AQ.ERROR}if(i){H(t+e.id)}n=e.source;if(n&&n.playbackState!==b){if(e.thandle){window.clearTimeout(e.thandle)}if(n.stop!==undefined){n.stop(0)}else{n.noteOff(0)}e.status=p}return AQ.DONE},assignChannel:function(){var e;M+=1;e=f+M;return e},playBuffer:function(e,t){var n,r,s,o,u,a,f,l,c,h;n="[AQ._web.playBuffer] ";if(E){return AQ.ERROR}r=z.context;s=r.createBufferSource();if(!s){return I(n+"Invalid bufferSource")}s.buffer=e.audio;if(r.createGain!==undefined){o=r.createGain()}else{o=r.createGainNode()}if(!o){return I(n+"Invalid gainNode")}s.connect(o);o.connect(r.destination);o.gain.value=e.params.volume;if(t===undefined){t=0}u=e.audio.duration-t;a=Math.floor(u*1e3);if(!e.channel_id){e.channel_id=z.assignChannel()}f=e.channel_id;l={id:f,buffer:e,source:s,gainNode:o,startTime:r.currentTime-t,pauseTime:0,endTime:-1,status:d};l.thandle=window.setTimeout(function(){var e,t,r;e=A.length;for(t=0;t<e;t+=1){l=A[t];if(l.id===f){if(i){H(n+"Ending "+f+": "+c.pathname)}r=l.buffer;c=r.params;h=c.onEnd;if(h&&typeof h==="function"){if(i){H(n+"Calling user .onEnd on "+f+": "+c.pathname)}try{h({channel:r.channel_id,name:c.name,path:c.pathname,duration:r.duration,data:c.data})}catch(s){F(n+"User .onEnd failed on "+f+": "+c.pathname+" ["+s.message+"]",s)}}z.stopChannel(l);A.splice(t,1);if(c.loop){z.playBuffer(r,0)}return}}I(n+"Channel "+f+" not found")},a);A.push(l);if(s.start!==undefined){s.start(0,t,u)}else{s.noteGrainOn(0,t,u)}c=e.params;h=c.onPlay;if(h&&typeof h==="function"){if(i){H(n+"Calling user .onPlay for "+e.channel_id+": "+c.pathname)}try{h({channel:e.channel_id,name:c.name,path:c.pathname,duration:e.duration,data:c.data})}catch(p){F(n+"User .onPlay failed on "+e.channel_id+": "+c.pathname+" ["+p.message+"]",p)}}return f},load:function(e){var t,n,r,s,o,u;t="[AQ._web.load] ";if(E){return AQ.ERROR}n=z.buffers.length;for(r=0;r<n;r+=1){s=z.buffers[r];if(s.params.pathname===e.pathname){if(i){H(t+e.pathname+" found in "+s.id)}return s.channel_id}}z.bufferID+=1;o=a+z.bufferID;s={id:o,channel_id:z.assignChannel(),audio:null,duration:0,params:e};if(i){H(t+"Creating "+s.id+" for "+e.pathname)}u=new XMLHttpRequest;if(!u){return I(t+"XMLHttpRequest error")}u.open("GET",e.pathname,true);u.responseType="arraybuffer";u.onload=function(){if(i){H(t+"Loaded "+e.pathname+" into "+s.id)}z.context.decodeAudioData(u.response,function(n){var r;s.audio=n;s.duration=Math.floor(n.duration*1e3);z.buffers.push(s);if(i){H(t+"Decoded "+e.pathname+" in "+s.id+" ("+s.duration+" ms)")}r=e.onLoad;if(r&&typeof r==="function"){e.onLoad=null;if(i){H(t+"Calling user .onLoad for "+s.channel_id+": "+e.pathname)}try{r({channel:s.channel_id,name:e.name,path:e.pathname,duration:s.duration,data:e.data})}catch(o){F(t+"User .onLoad failed on "+s.channel_id+": "+e.pathname+" ["+o.message+"]",o)}}if(s.params.autoplay){if(i){H(t+"Autoplaying "+s.id+" :"+e.pathname)}z.playBuffer(s)}},function(){I(t+"Error loading "+e.pathname)})};try{u.send()}catch(f){return F(t+"XMLHttpRequest failed: "+e.pathname+" ["+f.message+"]",f)}return s.channel_id},play:function(e){var t,n,r,s;t="[AQ._web.play] ";if(E){return AQ.ERROR}n=z.buffers.length;for(r=0;r<n;r+=1){s=z.buffers[r];if(s.params.pathname===e.pathname){if(i){H(t+"Found "+e.pathname)}return z.playBuffer(s)}}if(i){H(t+e.pathname+" unavailable; loading")}e.autoplay=true;return z.load(e)},playChannel:function(e){var t,n,r,i;t="[AQ._web.playChannel] ";if(E){return AQ.ERROR}n=z.buffers.length;for(r=0;r<n;r+=1){i=z.buffers[r];if(i.channel_id===e){return z.playBuffer(i)}}return I(t+e+" not found")},pause:function(e){var t,n,r,s,o,u,a;t="[AQ._web.pause] ";if(E){return AQ.ERROR}n=A.length;for(r=0;r<n;r+=1){s=A[r];if(s.id===e){o=s.buffer;u=s.source;a=s.pauseTime;if(a>0&&s.status===v){A.splice(r,1);return z.playBuffer(o,a)}if(s.thandle){window.clearTimeout(s.thandle);s.thandle=null}if(u&&u.playbackState!==b){a=z.context.currentTime-s.startTime;a=a%o.audio.duration;s.pauseTime=a;s.status=v;if(u.stop!==undefined){u.stop(0)}else{u.noteOff(0)}}else{A.splice(r,1)}return e}}if(i){H(t+e+" not found")}return AQ.ERROR},stop:function(e){var t,n,r,s;t="[AQ._web.stop] ";if(E){return AQ.ERROR}n=A.length;for(r=0;r<n;r+=1){s=A[r];if(s.id===e){z.stopChannel(s);A.splice(r,1);return AQ.DONE}}if(i){H(t+e+" not found")}return AQ.ERROR},init:function(){if(E){return AQ.ERROR}z.buffers=[];z.bufferID=0;return AQ.WEB_AUDIO}};var W={onError:function(e){var t,n,r,i,s,o;t="[AQ._html.onError] ";n=e.currentTarget;r=n.getAttribute("data-channel");r=parseInt(r,10);i=A[r];s=e.target.error.code;switch(s){case 1:o="Playback aborted";break;case 2:o="Network failure";break;case 3:o="Source decode failed";break;case 4:o="Invalid source file";break;default:o="Unknown";break}I(t+o+" @ "+i.id+": "+i.params.pathname);return P(e)},onStalled:function(e){var t,n,r,s;t="[AQ._html.onStalled] ";if(i){n=e.currentTarget;r=n.getAttribute("data-channel");r=parseInt(r,10);s=A[r];H(t+s.id+": "+s.params.pathname)}return P(e)},startChannel:function(e,t){var n,r,s,o;n="[AQ._html.startChannel] ";if(E){return AQ.ERROR}if(i){H(n+"Playing "+e.id)}e.status=d;r=e.audio;o=D(t);if(o==="object"){s=t.volume;o=D(s);if(o!=="undefined"){e.params.volume=s;r.volume=s}s=t.loop;o=D(s);if(o!=="undefined"){e.params.loop=s;r.loop=s}s=t.onDone;o=D(s);if(o!=="undefined"){e.params.onDone=s}s=t.userData;o=D(s);if(o!=="undefined"){e.params.userData=s}s=t.lock;o=D(s);if(o!=="undefined"){e.params.lock=s}}r.play();return AQ.DONE},onLoad:function(e){var t,n,r,s,o,u,a;t="[AQ._html.onLoad] ";n=e.currentTarget;r=n.getAttribute("data-channel");r=parseInt(r,10);s=A[r];s.status=p;o=s.params;if(i){H(t+s.id+": "+o.pathname)}u=s.audio;u.removeEventListener("canplaythrough",W.onLoad,false);s.duration=Math.floor(u.duration*1e3);a=o.onLoad;if(a&&typeof a==="function"){o.onLoad=null;if(i){H(t+"Calling user .onLoad on "+s.id+": "+o.pathname)}try{a({channel:s.id,name:o.name,path:o.pathname,duration:s.duration,data:o.data})}catch(f){F(t+"User .onLoad failed on "+s.id+": "+o.pathname+" ["+f.message+"]",f);return P(e)}}if(o.autoplay){if(i){H(t+"Autoplaying "+s.id)}o.autoplay=false;W.startChannel(s,o)}return P(e)},onPlay:function(e){var t,n,r,s,o,u;t="[AQ._html.onPlay] ";n=e.currentTarget;r=n.getAttribute("data-channel");r=parseInt(r,10);s=A[r];o=s.params;if(i){H(t+s.id+": "+o.pathname+" ("+s.duration+"ms)")}u=o.onPlay;if(u&&typeof u==="function"){if(i){H(t+"Calling user .onPlay on "+s.id+": "+o.pathname)}try{u({channel:s.id,name:o.name,path:o.pathname,duration:s.duration,data:o.data})}catch(a){F(t+"User .onPlay failed on "+s.id+": "+o.pathname+" ["+a.message+"]",a)}}return P(e)},onEnd:function(e){var t,n,r,s,o,u;t="[AQ._html.onEnd] ";n=e.currentTarget;r=n.getAttribute("data-channel");r=parseInt(r,10);s=A[r];o=s.params;if(i){H(t+s.id+": "+o.pathname)}s.status=p;u=o.onEnd;if(u&&typeof u==="function"){if(i){H(t+"Calling user .onEnd on "+s.id+": "+o.pathname)}try{u({channel:s.id,name:o.name,path:o.pathname,duration:s.duration,data:o.data})}catch(a){F(t+"User .onEnd failed on "+s.id+": "+o.pathname+" ["+a.message+"]",a)}}return P(e)},loadChannel:function(e,t){var n,r;n="[AQ._html.loadChannel] ";if(E){return AQ.ERROR}e.params=t;e.status=h;r=e.audio;r.addEventListener("canplaythrough",W.onLoad,false);r.preload="auto";r.volume=t.volume;r.loop=t.loop;if(i){H(n+e.id+": "+t.pathname)}r.setAttribute("src",t.pathname);return AQ.DONE},load:function(e){var t,n,r,s;t="[AQ._html.load] ";if(E){return AQ.ERROR}for(n=0;n<O;n+=1){r=A[n];if(r.params.pathname===e.pathname&&r.status===p){if(i){H(t+r.id+" ready: "+e.pathname)}r.audio.currentTime=0;if(e.autoplay){W.startChannel(r,e)}return r.id}}for(n=0;n<o;n+=1){r=A[n];if(r.status===l){if(i){H(t+r.id+" available")}s=n+1;if(s>O){O=s}W.loadChannel(r,e);return r.id}}for(n=0;n<O;n+=1){r=A[n];if(!r.params.lock&&r.status===p){if(i){H(t+r.id+" hijacked: "+e.pathname)}r.audio.currentTime=0;W.loadChannel(r,e);return r.id}}if(i){H(t+"No channel available: "+e.pathname)}return AQ.ERROR},play:function(e){var t,n,r;t="[AQ._html.play] ";if(E){return AQ.ERROR}for(n=0;n<O;n+=1){r=A[n];if(r.params.pathname===e.pathname&&r.status===p){if(i){H(t+r.id+" ready: "+e.pathname)}r.audio.currentTime=0;W.startChannel(r,e);return r.id}}if(i){H(t+e.pathname+" unavailable; loading")}e.autoplay=true;return W.load(e)},playChannel:function(e){var t,n,r;t="[AQ._html.playChannel] ";if(E){return AQ.ERROR}for(n=0;n<O;n+=1){r=A[n];if(r.id===e){if(i){H(t+"Found "+e)}if(r.status!==p){return I(t+e+" not ready")}r.audio.currentTime=0;W.startChannel(r);return r.id}}return I(t+e+" not found")},pause:function(e){var t,n,r;t="[AQ._html.pause] ";if(E){return AQ.ERROR}for(n=0;n<O;n+=1){r=A[n];if(r.id===e){if(r.status===v){W.startChannel(r)}else if(r.status===d){r.status=v;r.audio.pause()}return e}}if(i){H(t+e+" not found")}return AQ.ERROR},stop:function(e){var t,n,r,s;t="[AQ._html.stop] ";if(E){return AQ.ERROR}for(n=0;n<O;n+=1){r=A[n];if(r.id===e){r.params.autoplay=false;s=r.status;if(s===d||s===v){r.status=p;r.audio.pause();r.audio.currentTime=0}return AQ.DONE}}if(i){H(t+e+" not found")}return AQ.ERROR},init:function(){var e,t,n;e="[AQ._html.init] ";if(E){return AQ.ERROR}A.length=o;for(t=0;t<o;t+=1){n=document.createElement("audio");if(!n){return I(e+"element init failed")}n.setAttribute("data-channel",t.toString());n.addEventListener("error",W.onError,false);n.addEventListener("stalled",W.onStalled,false);n.addEventListener("play",W.onPlay,false);n.addEventListener("ended",W.onEnd,false);document.body.appendChild(n);A[t]={id:f+(t+1),audio:n,duration:0,params:null,status:l}}return AQ.HTML5_AUDIO}};AQ={ERROR:"AQ.ERROR",DONE:"AQ.DONE",DEFAULT:"AQ.DEFAULT",HTML5_AUDIO:"AQ.HTML5_AUDIO",WEB_AUDIO:"AQ.WEB_AUDIO",init:function(s){var o,a,f,l,c,h,p,d,v,m,g;o="[AQ.init] ";a={engine:e,major:t,minor:n,revision:r,status:AQ.ERROR,fileTypes:[]};w=false;E=false;S=u.path;x=null;T=false;C=false;f=document.createElement("audio");l=f.canPlayType;if(!l){window.alert(o+"Audio codec testing not available\n");return a}k=[];for(c in L){if(L.hasOwnProperty(c)){h=L[c];p=f.canPlayType(h.type);if(p==="probably"){h.ok=true;k.push(c)}}}f=null;if(k.length<1){window.alert(o+"No common audio filetypes supported\n");return a}if(s){if(typeof s!=="object"){window.alert(o+"Invalid parameter\n");return a}d=s.onAlert;v=D(d);if(v!=="undefined"){if(d===null||d===AQ.DEFAULT){d=null}else if(v!=="function"){window.alert(o+".onAlert property not a function");return a}x=d}d=s.stack;v=D(d);if(v!=="undefined"){if(!d||d===AQ.DEFAULT){d=false}else if(d===true||v!=="number"){d=true}else{window.alert(o+".stack property not a boolean");return a}T=d}d=s.forceHTML5;v=D(d);if(v!=="undefined"){if(d!==true&&d!==false){if(d===AQ.DEFAULT){d=false}else if(v==="number"){d=d!==0}else{window.alert(o+".forceHTML5 property invalid");return a}}if(i){H("_forceHTML5 = "+d)}C=d}d=s.defaultPath;v=D(d);if(v!=="undefined"){if(d===null||d===AQ.DEFAULT){d=u.path}else if(v!=="string"){window.alert(o+".defaultPath property not a valid string");return a}S=d}d=q(o,s.defaultFileTypes);if(d===AQ.ERROR){return a}if(d){k=d}}A.length=0;O=0;M=0;z.context=null;N=false;if(!C){g=window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.oAudioContext||window.msAudioContext;if(g){z.context=new g;if(!z.context){window.alert(o+"AudioContext init failed");return a}N=true}}if(!N){if(!l){window.alert(o+"HTML5 Audio not supported");return a}_=W}else{_=z}m=_.init();if(m!==AQ.ERROR){w=true}if(i){H(o+"status = "+m)}a.status=AQ.DONE;a.fileTypes=k;return a},load:function(e,t){var n,r,s;if(!w){return AQ.ERROR}n="[AQ.load] ";if(!e||typeof e!=="string"||e.length<1){return I(n+"name parameter invalid")}r=U(e);if(R(n,r,t)===AQ.ERROR){return AQ.ERROR}r.pathname=r.path+r.name+"."+r.fileTypes[0];s=_.load(r);if(i){H(n+"Loaded "+r.pathname+", result = "+s)}return s},play:function(e,t){var n,r,s;if(!w){return AQ.ERROR}n="[AQ.play] ";if(!e||typeof e!=="string"||e.length<1){return I(n+"name parameter invalid")}r=U(e);if(R(n,r,t)===AQ.ERROR){return AQ.ERROR}r.pathname=r.path+r.name+"."+r.fileTypes[0];s=_.play(r);if(i){H(n+"Played "+r.pathname+", result = "+s)}return s},playChannel:function(e){var t,n;if(!w){return AQ.ERROR}t="[AQ.playChannel] ";if(!e||typeof e!=="string"||e.length<1){return I(t+"Invalid channel id")}n=_.playChannel(e);if(i){H(t+"Played "+e+", result = "+n)}return n},pause:function(e){var t,n;if(!w){return AQ.ERROR}t="[AQ.pause] ";if(!e||typeof e!=="string"||e.length<1){return I(t+"Invalid channel id")}n=_.pause(e);if(i){H(t+"Paused "+e+", result = "+n)}return n},stop:function(e){var t,n;if(!w){return AQ.ERROR}t="[AQ.stop] ";if(!e||typeof e!=="string"||e.length<1){return I(t+"Invalid channel id")}n=_.stop(e);if(i){H(t+"Stopped "+e+", result = "+n)}return n}}})()
