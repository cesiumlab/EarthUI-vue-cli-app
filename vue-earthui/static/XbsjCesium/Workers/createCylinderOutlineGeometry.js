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
define(["./when-4ca4e419","./Check-430b3551","./Math-c0afb7aa","./Cartesian2-0cd32dae","./defineProperties-24e785e9","./Transforms-1f147cce","./RuntimeError-443472b0","./WebGLConstants-2ddfa2f9","./ComponentDatatype-adb4702b","./GeometryAttribute-ebf6a4c7","./GeometryAttributes-614c63f8","./IndexDatatype-a78bfe07","./GeometryOffsetAttribute-daefb9ce","./CylinderGeometryLibrary-e40ba316"],function(h,e,t,v,i,A,a,r,R,G,O,V,C,L){"use strict";var g=new v.Cartesian2;function f(e){var t=(e=h.defaultValue(e,h.defaultValue.EMPTY_OBJECT)).length,i=e.topRadius,a=e.bottomRadius,r=h.defaultValue(e.slices,128),n=Math.max(h.defaultValue(e.numberOfVerticalLines,16),0);this._length=t,this._topRadius=i,this._bottomRadius=a,this._slices=r,this._numberOfVerticalLines=n,this._offsetAttribute=e.offsetAttribute,this._workerName="createCylinderOutlineGeometry"}f.packedLength=6,f.pack=function(e,t,i){return i=h.defaultValue(i,0),t[i++]=e._length,t[i++]=e._topRadius,t[i++]=e._bottomRadius,t[i++]=e._slices,t[i++]=e._numberOfVerticalLines,t[i]=h.defaultValue(e._offsetAttribute,-1),t};var d={length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};return f.unpack=function(e,t,i){t=h.defaultValue(t,0);var a=e[t++],r=e[t++],n=e[t++],o=e[t++],u=e[t++],s=e[t];return h.defined(i)?(i._length=a,i._topRadius=r,i._bottomRadius=n,i._slices=o,i._numberOfVerticalLines=u,i._offsetAttribute=-1===s?void 0:s,i):(d.length=a,d.topRadius=r,d.bottomRadius=n,d.slices=o,d.numberOfVerticalLines=u,d.offsetAttribute=-1===s?void 0:s,new f(d))},f.createGeometry=function(e){var t=e._length,i=e._topRadius,a=e._bottomRadius,r=e._slices,n=e._numberOfVerticalLines;if(!(t<=0||i<0||a<0||0===i&&0===a)){var o,u=2*r,s=L.CylinderGeometryLibrary.computePositions(t,i,a,r,!1),f=2*r;if(0<n){var d=Math.min(n,r);o=Math.round(r/d),f+=d}var b,l=V.IndexDatatype.createTypedArray(u,2*f),c=0;for(b=0;b<r-1;b++)l[c++]=b,l[c++]=b+1,l[c++]=b+r,l[c++]=b+1+r;if(l[c++]=r-1,l[c++]=0,l[c++]=r+r-1,l[c++]=r,0<n)for(b=0;b<r;b+=o)l[c++]=b,l[c++]=b+r;var m=new O.GeometryAttributes;m.position=new G.GeometryAttribute({componentDatatype:R.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:s}),g.x=.5*t,g.y=Math.max(a,i);var p=new A.BoundingSphere(v.Cartesian3.ZERO,v.Cartesian2.magnitude(g));if(h.defined(e._offsetAttribute)){t=s.length;var y=new Uint8Array(t/3),_=e._offsetAttribute===C.GeometryOffsetAttribute.NONE?0:1;C.arrayFill(y,_),m.applyOffset=new G.GeometryAttribute({componentDatatype:R.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:y})}return new G.Geometry({attributes:m,indices:l,primitiveType:G.PrimitiveType.LINES,boundingSphere:p,offsetAttribute:e._offsetAttribute})}},function(e,t){return h.defined(t)&&(e=f.unpack(e,t)),f.createGeometry(e)}});
