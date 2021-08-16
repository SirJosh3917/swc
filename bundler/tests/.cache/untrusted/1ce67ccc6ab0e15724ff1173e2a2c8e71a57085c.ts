// Loaded from https://cdn.esm.sh/v45/ipaddr.js@2.0.0/es2015/ipaddr.js


/* esm.sh - esbuild bundle(ipaddr.js@2.0.0) es2015 production */
var k=Object.create;var P=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var M=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty;var A=u=>P(u,"__esModule",{value:!0});var O=(u,a)=>()=>(a||u((a={exports:{}}).exports,a),a.exports);var D=(u,a,p)=>{if(a&&typeof a=="object"||typeof a=="function")for(let c of C(a))!S.call(u,c)&&c!=="default"&&P(u,c,{get:()=>a[c],enumerable:!(p=z(a,c))||p.enumerable});return u},j=u=>D(A(P(u!=null?k(M(u)):{},"default",u&&u.__esModule&&"default"in u?{get:()=>u.default,enumerable:!0}:{value:u,enumerable:!0})),u);var b=O((g,w)=>{(function(u){"use strict";let a="(0?\\d+|0x[a-f0-9]+)",p={fourOctet:new RegExp(`^${a}\\.${a}\\.${a}\\.${a}$`,"i"),threeOctet:new RegExp(`^${a}\\.${a}\\.${a}$`,"i"),twoOctet:new RegExp(`^${a}\\.${a}$`,"i"),longValue:new RegExp(`^${a}$`,"i")},c=new RegExp("^0[0-7]+$","i"),E=new RegExp("^0x[a-f0-9]+$","i"),d="%[0-9a-z]{1,}",I="(?:[0-9a-f]+::?)+",h={zoneIndex:new RegExp(d,"i"),native:new RegExp(`^(::)?(${I})?([0-9a-f]+)?(::)?(${d})?$`,"i"),deprecatedTransitional:new RegExp(`^(?:::)(${a}\\.${a}\\.${a}\\.${a}(${d})?)$`,"i"),transitional:new RegExp(`^((?:${I})|(?:::)(?:${I})?)${a}\\.${a}\\.${a}\\.${a}(${d})?$`,"i")};function x(t,e){if(t.indexOf("::")!==t.lastIndexOf("::"))return null;let n=0,r=-1,i=(t.match(h.zoneIndex)||[])[0],o,f;for(i&&(i=i.substring(1),t=t.replace(/%.+$/,""));(r=t.indexOf(":",r+1))>=0;)n++;if(t.substr(0,2)==="::"&&n--,t.substr(-2,2)==="::"&&n--,n>e)return null;for(f=e-n,o=":";f--;)o+="0:";return t=t.replace("::",o),t[0]===":"&&(t=t.slice(1)),t[t.length-1]===":"&&(t=t.slice(0,-1)),e=function(){let m=t.split(":"),$=[];for(let v=0;v<m.length;v++)$.push(parseInt(m[v],16));return $}(),{parts:e,zoneId:i}}function y(t,e,n,r){if(t.length!==e.length)throw new Error("ipaddr: cannot match CIDR for objects with different lengths");let i=0,o;for(;r>0;){if(o=n-r,o<0&&(o=0),t[i]>>o!=e[i]>>o)return!1;r-=n,i+=1}return!0}function l(t){if(E.test(t))return parseInt(t,16);if(t[0]==="0"&&!isNaN(parseInt(t[1],10))){if(c.test(t))return parseInt(t,8);throw new Error(`ipaddr: cannot parse ${t} as octal`)}return parseInt(t,10)}function R(t,e){for(;t.length<e;)t=`0${t}`;return t}let s={};s.IPv4=function(){function t(e){if(e.length!==4)throw new Error("ipaddr: ipv4 octet count should be 4");let n,r;for(n=0;n<e.length;n++)if(r=e[n],!(0<=r&&r<=255))throw new Error("ipaddr: ipv4 octet should fit in 8 bits");this.octets=e}return t.prototype.SpecialRanges={unspecified:[[new t([0,0,0,0]),8]],broadcast:[[new t([255,255,255,255]),32]],multicast:[[new t([224,0,0,0]),4]],linkLocal:[[new t([169,254,0,0]),16]],loopback:[[new t([127,0,0,0]),8]],carrierGradeNat:[[new t([100,64,0,0]),10]],private:[[new t([10,0,0,0]),8],[new t([172,16,0,0]),12],[new t([192,168,0,0]),16]],reserved:[[new t([192,0,0,0]),24],[new t([192,0,2,0]),24],[new t([192,88,99,0]),24],[new t([198,51,100,0]),24],[new t([203,0,113,0]),24],[new t([240,0,0,0]),4]]},t.prototype.kind=function(){return"ipv4"},t.prototype.match=function(e,n){let r;if(n===void 0&&(r=e,e=r[0],n=r[1]),e.kind()!=="ipv4")throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");return y(this.octets,e.octets,8,n)},t.prototype.prefixLengthFromSubnetMask=function(){let e=0,n=!1,r={0:8,128:7,192:6,224:5,240:4,248:3,252:2,254:1,255:0},i,o,f;for(i=3;i>=0;i-=1)if(o=this.octets[i],o in r){if(f=r[o],n&&f!==0)return null;f!==8&&(n=!0),e+=f}else return null;return 32-e},t.prototype.range=function(){return s.subnetMatch(this,this.SpecialRanges)},t.prototype.toByteArray=function(){return this.octets.slice(0)},t.prototype.toIPv4MappedAddress=function(){return s.IPv6.parse(`::ffff:${this.toString()}`)},t.prototype.toNormalizedString=function(){return this.toString()},t.prototype.toString=function(){return this.octets.join(".")},t}(),s.IPv4.broadcastAddressFromCIDR=function(t){try{let e=this.parseCIDR(t),n=e[0].toByteArray(),r=this.subnetMaskFromPrefixLength(e[1]).toByteArray(),i=[],o=0;for(;o<4;)i.push(parseInt(n[o],10)|parseInt(r[o],10)^255),o++;return new this(i)}catch(e){throw new Error("ipaddr: the address does not have IPv4 CIDR format")}},s.IPv4.isIPv4=function(t){return this.parser(t)!==null},s.IPv4.isValid=function(t){try{return new this(this.parser(t)),!0}catch(e){return!1}},s.IPv4.isValidFourPartDecimal=function(t){return!!(s.IPv4.isValid(t)&&t.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/))},s.IPv4.networkAddressFromCIDR=function(t){let e,n,r,i,o;try{for(e=this.parseCIDR(t),r=e[0].toByteArray(),o=this.subnetMaskFromPrefixLength(e[1]).toByteArray(),i=[],n=0;n<4;)i.push(parseInt(r[n],10)&parseInt(o[n],10)),n++;return new this(i)}catch(f){throw new Error("ipaddr: the address does not have IPv4 CIDR format")}},s.IPv4.parse=function(t){let e=this.parser(t);if(e===null)throw new Error("ipaddr: string is not formatted like an IPv4 Address");return new this(e)},s.IPv4.parseCIDR=function(t){let e;if(e=t.match(/^(.+)\/(\d+)$/)){let n=parseInt(e[2]);if(n>=0&&n<=32){let r=[this.parse(e[1]),n];return Object.defineProperty(r,"toString",{value:function(){return this.join("/")}}),r}}throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range")},s.IPv4.parser=function(t){let e,n,r;if(e=t.match(p.fourOctet))return function(){let i=e.slice(1,6),o=[];for(let f=0;f<i.length;f++)n=i[f],o.push(l(n));return o}();if(e=t.match(p.longValue)){if(r=l(e[1]),r>4294967295||r<0)throw new Error("ipaddr: address outside defined range");return function(){let i=[],o;for(o=0;o<=24;o+=8)i.push(r>>o&255);return i}().reverse()}else return(e=t.match(p.twoOctet))?function(){let i=e.slice(1,4),o=[];if(r=l(i[1]),r>16777215||r<0)throw new Error("ipaddr: address outside defined range");return o.push(l(i[0])),o.push(r>>16&255),o.push(r>>8&255),o.push(r&255),o}():(e=t.match(p.threeOctet))?function(){let i=e.slice(1,5),o=[];if(r=l(i[2]),r>65535||r<0)throw new Error("ipaddr: address outside defined range");return o.push(l(i[0])),o.push(l(i[1])),o.push(r>>8&255),o.push(r&255),o}():null},s.IPv4.subnetMaskFromPrefixLength=function(t){if(t=parseInt(t),t<0||t>32)throw new Error("ipaddr: invalid IPv4 prefix length");let e=[0,0,0,0],n=0,r=Math.floor(t/8);for(;n<r;)e[n]=255,n++;return r<4&&(e[r]=Math.pow(2,t%8)-1<<8-t%8),new this(e)},s.IPv6=function(){function t(e,n){let r,i;if(e.length===16)for(this.parts=[],r=0;r<=14;r+=2)this.parts.push(e[r]<<8|e[r+1]);else if(e.length===8)this.parts=e;else throw new Error("ipaddr: ipv6 part count should be 8 or 16");for(r=0;r<this.parts.length;r++)if(i=this.parts[r],!(0<=i&&i<=65535))throw new Error("ipaddr: ipv6 part should fit in 16 bits");n&&(this.zoneId=n)}return t.prototype.SpecialRanges={unspecified:[new t([0,0,0,0,0,0,0,0]),128],linkLocal:[new t([65152,0,0,0,0,0,0,0]),10],multicast:[new t([65280,0,0,0,0,0,0,0]),8],loopback:[new t([0,0,0,0,0,0,0,1]),128],uniqueLocal:[new t([64512,0,0,0,0,0,0,0]),7],ipv4Mapped:[new t([0,0,0,0,0,65535,0,0]),96],rfc6145:[new t([0,0,0,0,65535,0,0,0]),96],rfc6052:[new t([100,65435,0,0,0,0,0,0]),96],"6to4":[new t([8194,0,0,0,0,0,0,0]),16],teredo:[new t([8193,0,0,0,0,0,0,0]),32],reserved:[[new t([8193,3512,0,0,0,0,0,0]),32]]},t.prototype.isIPv4MappedAddress=function(){return this.range()==="ipv4Mapped"},t.prototype.kind=function(){return"ipv6"},t.prototype.match=function(e,n){let r;if(n===void 0&&(r=e,e=r[0],n=r[1]),e.kind()!=="ipv6")throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");return y(this.parts,e.parts,16,n)},t.prototype.prefixLengthFromSubnetMask=function(){let e=0,n=!1,r={0:16,32768:15,49152:14,57344:13,61440:12,63488:11,64512:10,65024:9,65280:8,65408:7,65472:6,65504:5,65520:4,65528:3,65532:2,65534:1,65535:0},i,o;for(let f=7;f>=0;f-=1)if(i=this.parts[f],i in r){if(o=r[i],n&&o!==0)return null;o!==16&&(n=!0),e+=o}else return null;return 128-e},t.prototype.range=function(){return s.subnetMatch(this,this.SpecialRanges)},t.prototype.toByteArray=function(){let e,n=[],r=this.parts;for(let i=0;i<r.length;i++)e=r[i],n.push(e>>8),n.push(e&255);return n},t.prototype.toFixedLengthString=function(){let e=function(){let r=[];for(let i=0;i<this.parts.length;i++)r.push(R(this.parts[i].toString(16),4));return r}.call(this).join(":"),n="";return this.zoneId&&(n=`%${this.zoneId}`),e+n},t.prototype.toIPv4Address=function(){if(!this.isIPv4MappedAddress())throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");let e=this.parts.slice(-2),n=e[0],r=e[1];return new s.IPv4([n>>8,n&255,r>>8,r&255])},t.prototype.toNormalizedString=function(){let e=function(){let r=[];for(let i=0;i<this.parts.length;i++)r.push(this.parts[i].toString(16));return r}.call(this).join(":"),n="";return this.zoneId&&(n=`%${this.zoneId}`),e+n},t.prototype.toRFC5952String=function(){let e=/((^|:)(0(:|$)){2,})/g,n=this.toNormalizedString(),r=0,i=-1,o;for(;o=e.exec(n);)o[0].length>i&&(r=o.index,i=o[0].length);return i<0?n:`${n.substring(0,r)}::${n.substring(r+i)}`},t.prototype.toString=function(){return this.toNormalizedString().replace(/((^|:)(0(:|$))+)/,"::")},t}(),s.IPv6.isIPv6=function(t){return this.parser(t)!==null},s.IPv6.isValid=function(t){if(typeof t=="string"&&t.indexOf(":")===-1)return!1;try{let e=this.parser(t);return new this(e.parts,e.zoneId),!0}catch(e){return!1}},s.IPv6.parse=function(t){let e=this.parser(t);if(e.parts===null)throw new Error("ipaddr: string is not formatted like an IPv6 Address");return new this(e.parts,e.zoneId)},s.IPv6.parseCIDR=function(t){let e,n,r;if((n=t.match(/^(.+)\/(\d+)$/))&&(e=parseInt(n[2]),e>=0&&e<=128))return r=[this.parse(n[1]),e],Object.defineProperty(r,"toString",{value:function(){return this.join("/")}}),r;throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range")},s.IPv6.parser=function(t){let e,n,r,i,o,f;if(r=t.match(h.deprecatedTransitional))return this.parser(`::ffff:${r[1]}`);if(h.native.test(t))return x(t,8);if((r=t.match(h.transitional))&&(f=r[6]||"",e=x(r[1].slice(0,-1)+f,6),e.parts)){for(o=[parseInt(r[2]),parseInt(r[3]),parseInt(r[4]),parseInt(r[5])],n=0;n<o.length;n++)if(i=o[n],!(0<=i&&i<=255))return null;return e.parts.push(o[0]<<8|o[1]),e.parts.push(o[2]<<8|o[3]),{parts:e.parts,zoneId:e.zoneId}}return null},s.fromByteArray=function(t){let e=t.length;if(e===4)return new s.IPv4(t);if(e===16)return new s.IPv6(t);throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address")},s.isValid=function(t){return s.IPv6.isValid(t)||s.IPv4.isValid(t)},s.parse=function(t){if(s.IPv6.isValid(t))return s.IPv6.parse(t);if(s.IPv4.isValid(t))return s.IPv4.parse(t);throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format")},s.parseCIDR=function(t){try{return s.IPv6.parseCIDR(t)}catch(e){try{return s.IPv4.parseCIDR(t)}catch(n){throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format")}}},s.process=function(t){let e=this.parse(t);return e.kind()==="ipv6"&&e.isIPv4MappedAddress()?e.toIPv4Address():e},s.subnetMatch=function(t,e,n){let r,i,o,f;n==null&&(n="unicast");for(i in e)if(Object.prototype.hasOwnProperty.call(e,i)){for(o=e[i],o[0]&&!(o[0]instanceof Array)&&(o=[o]),r=0;r<o.length;r++)if(f=o[r],t.kind()===f[0].kind()&&t.match.apply(t,f))return i}return n},typeof w!="undefined"&&w.exports?w.exports=s:u.ipaddr=s})(g)});var V=j(b());var export_default=V.default;export{export_default as default};