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
define(["./when-4ca4e419","./Check-430b3551","./Math-c0afb7aa","./Cartesian2-0cd32dae","./defineProperties-24e785e9","./Transforms-1f147cce","./RuntimeError-443472b0","./WebGLConstants-2ddfa2f9","./ComponentDatatype-adb4702b","./GeometryAttribute-ebf6a4c7","./GeometryAttributes-614c63f8","./GeometryOffsetAttribute-daefb9ce"],function(c,e,t,d,a,p,n,i,y,b,C,l){"use strict";var A=new d.Cartesian3;function u(e){var t=(e=c.defaultValue(e,c.defaultValue.EMPTY_OBJECT)).minimum,a=e.maximum;this._min=d.Cartesian3.clone(t),this._max=d.Cartesian3.clone(a),this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxOutlineGeometry"}u.fromDimensions=function(e){var t=(e=c.defaultValue(e,c.defaultValue.EMPTY_OBJECT)).dimensions,a=d.Cartesian3.multiplyByScalar(t,.5,new d.Cartesian3);return new u({minimum:d.Cartesian3.negate(a,new d.Cartesian3),maximum:a,offsetAttribute:e.offsetAttribute})},u.fromAxisAlignedBoundingBox=function(e){return new u({minimum:e.minimum,maximum:e.maximum})},u.packedLength=2*d.Cartesian3.packedLength+1,u.pack=function(e,t,a){return a=c.defaultValue(a,0),d.Cartesian3.pack(e._min,t,a),d.Cartesian3.pack(e._max,t,a+d.Cartesian3.packedLength),t[a+2*d.Cartesian3.packedLength]=c.defaultValue(e._offsetAttribute,-1),t};var m=new d.Cartesian3,o=new d.Cartesian3,s={minimum:m,maximum:o,offsetAttribute:void 0};return u.unpack=function(e,t,a){t=c.defaultValue(t,0);var n=d.Cartesian3.unpack(e,t,m),i=d.Cartesian3.unpack(e,t+d.Cartesian3.packedLength,o),r=e[t+2*d.Cartesian3.packedLength];return c.defined(a)?(a._min=d.Cartesian3.clone(n,a._min),a._max=d.Cartesian3.clone(i,a._max),a._offsetAttribute=-1===r?void 0:r,a):(s.offsetAttribute=-1===r?void 0:r,new u(s))},u.createGeometry=function(e){var t=e._min,a=e._max;if(!d.Cartesian3.equals(t,a)){var n=new C.GeometryAttributes,i=new Uint16Array(24),r=new Float64Array(24);r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=a.x,r[4]=t.y,r[5]=t.z,r[6]=a.x,r[7]=a.y,r[8]=t.z,r[9]=t.x,r[10]=a.y,r[11]=t.z,r[12]=t.x,r[13]=t.y,r[14]=a.z,r[15]=a.x,r[16]=t.y,r[17]=a.z,r[18]=a.x,r[19]=a.y,r[20]=a.z,r[21]=t.x,r[22]=a.y,r[23]=a.z,n.position=new b.GeometryAttribute({componentDatatype:y.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r}),i[0]=4,i[1]=5,i[2]=5,i[3]=6,i[4]=6,i[5]=7,i[6]=7,i[7]=4,i[8]=0,i[9]=1,i[10]=1,i[11]=2,i[12]=2,i[13]=3,i[14]=3,i[15]=0,i[16]=0,i[17]=4,i[18]=1,i[19]=5,i[20]=2,i[21]=6,i[22]=3,i[23]=7;var u=d.Cartesian3.subtract(a,t,A),m=.5*d.Cartesian3.magnitude(u);if(c.defined(e._offsetAttribute)){var o=r.length,s=new Uint8Array(o/3),f=e._offsetAttribute===l.GeometryOffsetAttribute.NONE?0:1;l.arrayFill(s,f),n.applyOffset=new b.GeometryAttribute({componentDatatype:y.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:s})}return new b.Geometry({attributes:n,indices:i,primitiveType:b.PrimitiveType.LINES,boundingSphere:new p.BoundingSphere(d.Cartesian3.ZERO,m),offsetAttribute:e._offsetAttribute})}},function(e,t){return c.defined(t)&&(e=u.unpack(e,t)),u.createGeometry(e)}});
