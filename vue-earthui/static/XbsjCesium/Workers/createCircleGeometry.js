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
define(["./when-4ca4e419","./Check-430b3551","./Math-c0afb7aa","./Cartesian2-0cd32dae","./defineProperties-24e785e9","./Transforms-1f147cce","./RuntimeError-443472b0","./WebGLConstants-2ddfa2f9","./ComponentDatatype-adb4702b","./GeometryAttribute-ebf6a4c7","./GeometryAttributes-614c63f8","./AttributeCompression-424ccc06","./GeometryPipeline-27b4178f","./EncodedCartesian3-17533efe","./IndexDatatype-a78bfe07","./IntersectionTests-9618f995","./Plane-6d029ea4","./GeometryOffsetAttribute-daefb9ce","./VertexFormat-95f25802","./EllipseGeometryLibrary-13db6b5e","./GeometryInstance-50734731","./EllipseGeometry-3bc8a181"],function(o,e,t,a,i,r,n,s,l,d,m,c,u,p,y,_,h,G,x,f,g,v){"use strict";function E(e){var t=(e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT)).radius,i={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new v.EllipseGeometry(i),this._workerName="createCircleGeometry"}E.packedLength=v.EllipseGeometry.packedLength,E.pack=function(e,t,i){return v.EllipseGeometry.pack(e._ellipseGeometry,t,i)};var b=new v.EllipseGeometry({center:new a.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),w={center:new a.Cartesian3,radius:void 0,ellipsoid:a.Ellipsoid.clone(a.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new x.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return E.unpack=function(e,t,i){var r=v.EllipseGeometry.unpack(e,t,b);return w.center=a.Cartesian3.clone(r._center,w.center),w.ellipsoid=a.Ellipsoid.clone(r._ellipsoid,w.ellipsoid),w.height=r._height,w.extrudedHeight=r._extrudedHeight,w.granularity=r._granularity,w.vertexFormat=x.VertexFormat.clone(r._vertexFormat,w.vertexFormat),w.stRotation=r._stRotation,w.shadowVolume=r._shadowVolume,o.defined(i)?(w.semiMajorAxis=r._semiMajorAxis,w.semiMinorAxis=r._semiMinorAxis,i._ellipseGeometry=new v.EllipseGeometry(w),i):(w.radius=r._semiMajorAxis,new E(w))},E.createGeometry=function(e){return v.EllipseGeometry.createGeometry(e._ellipseGeometry)},E.createShadowVolume=function(e,t,i){var r=e._ellipseGeometry._granularity,o=e._ellipseGeometry._ellipsoid,a=t(r,o),n=i(r,o);return new E({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:o,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:a,height:n,vertexFormat:x.VertexFormat.POSITION_ONLY,shadowVolume:!0})},i.defineProperties(E.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(e,t){return o.defined(t)&&(e=E.unpack(e,t)),e._ellipseGeometry._center=a.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=a.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),E.createGeometry(e)}});
