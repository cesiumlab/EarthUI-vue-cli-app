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
define(["./when-4ca4e419","./Check-430b3551","./Math-c0afb7aa","./Cartesian2-0cd32dae","./defineProperties-24e785e9","./Transforms-1f147cce","./RuntimeError-443472b0","./WebGLConstants-2ddfa2f9","./ComponentDatatype-adb4702b","./GeometryAttribute-ebf6a4c7","./GeometryAttributes-614c63f8","./IndexDatatype-a78bfe07","./GeometryOffsetAttribute-daefb9ce","./VertexFormat-95f25802","./EllipsoidGeometry-dc57fb0d"],function(a,e,t,o,r,i,n,s,d,c,l,m,f,p,u){"use strict";function y(e){var t=a.defaultValue(e.radius,1),r={radii:new o.Cartesian3(t,t,t),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,vertexFormat:e.vertexFormat};this._ellipsoidGeometry=new u.EllipsoidGeometry(r),this._workerName="createSphereGeometry"}y.packedLength=u.EllipsoidGeometry.packedLength,y.pack=function(e,t,r){return u.EllipsoidGeometry.pack(e._ellipsoidGeometry,t,r)};var G=new u.EllipsoidGeometry,k={radius:void 0,radii:new o.Cartesian3,vertexFormat:new p.VertexFormat,stackPartitions:void 0,slicePartitions:void 0};return y.unpack=function(e,t,r){var i=u.EllipsoidGeometry.unpack(e,t,G);return k.vertexFormat=p.VertexFormat.clone(i._vertexFormat,k.vertexFormat),k.stackPartitions=i._stackPartitions,k.slicePartitions=i._slicePartitions,a.defined(r)?(o.Cartesian3.clone(i._radii,k.radii),r._ellipsoidGeometry=new u.EllipsoidGeometry(k),r):(k.radius=i._radii.x,new y(k))},y.createGeometry=function(e){return u.EllipsoidGeometry.createGeometry(e._ellipsoidGeometry)},function(e,t){return a.defined(t)&&(e=y.unpack(e,t)),y.createGeometry(e)}});
