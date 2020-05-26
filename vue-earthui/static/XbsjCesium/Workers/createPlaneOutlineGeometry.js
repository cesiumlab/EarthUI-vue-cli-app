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
define(["./when-4ca4e419","./Check-430b3551","./Math-c0afb7aa","./Cartesian2-0cd32dae","./defineProperties-24e785e9","./Transforms-1f147cce","./RuntimeError-443472b0","./WebGLConstants-2ddfa2f9","./ComponentDatatype-adb4702b","./GeometryAttribute-ebf6a4c7","./GeometryAttributes-614c63f8"],function(r,e,t,a,n,i,o,c,u,s,y){"use strict";function p(){this._workerName="createPlaneOutlineGeometry"}p.packedLength=0,p.pack=function(e,t){return t},p.unpack=function(e,t,n){return r.defined(n)?n:new p};var f=new a.Cartesian3(-.5,-.5,0),m=new a.Cartesian3(.5,.5,0);return p.createGeometry=function(){var e=new y.GeometryAttributes,t=new Uint16Array(8),n=new Float64Array(12);return n[0]=f.x,n[1]=f.y,n[2]=f.z,n[3]=m.x,n[4]=f.y,n[5]=f.z,n[6]=m.x,n[7]=m.y,n[8]=f.z,n[9]=f.x,n[10]=m.y,n[11]=f.z,e.position=new s.GeometryAttribute({componentDatatype:u.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n}),t[0]=0,t[1]=1,t[2]=1,t[3]=2,t[4]=2,t[5]=3,t[6]=3,t[7]=0,new s.Geometry({attributes:e,indices:t,primitiveType:s.PrimitiveType.LINES,boundingSphere:new i.BoundingSphere(a.Cartesian3.ZERO,Math.sqrt(2))})},function(e,t){return r.defined(t)&&(e=p.unpack(e,t)),p.createGeometry(e)}});
