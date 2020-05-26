/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["./when-4ca4e419","./Check-430b3551","./Math-c0afb7aa","./Cartesian2-0cd32dae","./defineProperties-24e785e9","./AttributeCompression-424ccc06","./createTaskProcessorWorker"],function(e,a,v,y,r,A,t){"use strict";var M=32767,R=new y.Cartographic,x=new y.Cartesian3,D=new y.Rectangle,E=new y.Ellipsoid,F={min:void 0,max:void 0};return t(function(e,a){var r=new Uint16Array(e.positions);!function(e){e=new Float64Array(e);var a=0;F.min=e[a++],F.max=e[a++],y.Rectangle.unpack(e,a,D),a+=y.Rectangle.packedLength,y.Ellipsoid.unpack(e,a,E)}(e.packedBuffer);var t=D,n=E,i=F.min,s=F.max,o=r.length/3,c=r.subarray(0,o),u=r.subarray(o,2*o),p=r.subarray(2*o,3*o);A.AttributeCompression.zigZagDeltaDecode(c,u,p);for(var h=new Float64Array(r.length),l=0;l<o;++l){var f=c[l],d=u[l],m=p[l],C=v.CesiumMath.lerp(t.west,t.east,f/M),g=v.CesiumMath.lerp(t.south,t.north,d/M),b=v.CesiumMath.lerp(i,s,m/M),w=y.Cartographic.fromRadians(C,g,b,R),k=n.cartographicToCartesian(w,x);y.Cartesian3.pack(k,h,3*l)}return a.push(h.buffer),{positions:h.buffer}})});
