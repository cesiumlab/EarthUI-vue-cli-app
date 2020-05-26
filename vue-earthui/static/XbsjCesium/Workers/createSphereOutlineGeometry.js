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
define(["./when-4ca4e419","./Check-430b3551","./Math-c0afb7aa","./Cartesian2-0cd32dae","./defineProperties-24e785e9","./Transforms-1f147cce","./RuntimeError-443472b0","./WebGLConstants-2ddfa2f9","./ComponentDatatype-adb4702b","./GeometryAttribute-ebf6a4c7","./GeometryAttributes-614c63f8","./IndexDatatype-a78bfe07","./GeometryOffsetAttribute-daefb9ce","./EllipsoidOutlineGeometry-5ac8b4fb"],function(n,e,i,a,t,r,s,o,d,l,c,u,p,f){"use strict";function m(e){var i=n.defaultValue(e.radius,1),t={radii:new a.Cartesian3(i,i,i),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,subdivisions:e.subdivisions};this._ellipsoidGeometry=new f.EllipsoidOutlineGeometry(t),this._workerName="createSphereOutlineGeometry"}m.packedLength=f.EllipsoidOutlineGeometry.packedLength,m.pack=function(e,i,t){return f.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,t)};var y=new f.EllipsoidOutlineGeometry,G={radius:void 0,radii:new a.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return m.unpack=function(e,i,t){var r=f.EllipsoidOutlineGeometry.unpack(e,i,y);return G.stackPartitions=r._stackPartitions,G.slicePartitions=r._slicePartitions,G.subdivisions=r._subdivisions,n.defined(t)?(a.Cartesian3.clone(r._radii,G.radii),t._ellipsoidGeometry=new f.EllipsoidOutlineGeometry(G),t):(G.radius=r._radii.x,new m(G))},m.createGeometry=function(e){return f.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(e,i){return n.defined(i)&&(e=m.unpack(e,i)),m.createGeometry(e)}});
