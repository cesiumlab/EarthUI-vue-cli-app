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
define(["./when-4ca4e419","./Check-430b3551","./Math-c0afb7aa","./Cartesian2-0cd32dae","./defineProperties-24e785e9","./Transforms-1f147cce","./RuntimeError-443472b0","./WebGLConstants-2ddfa2f9","./ComponentDatatype-adb4702b","./GeometryAttribute-ebf6a4c7","./GeometryAttributes-614c63f8","./AttributeCompression-424ccc06","./GeometryPipeline-27b4178f","./EncodedCartesian3-17533efe","./IndexDatatype-a78bfe07","./IntersectionTests-9618f995","./Plane-6d029ea4","./GeometryInstance-50734731","./arrayRemoveDuplicates-0e267e0f","./EllipsoidTangentPlane-6e29c6f6","./OrientedBoundingBox-963ed09f","./CoplanarPolygonGeometryLibrary-baedaca3","./ArcType-51c149e1","./EllipsoidRhumbLine-aeb03c9a","./PolygonPipeline-d378df2d","./PolygonGeometryLibrary-189cbefa"],function(a,e,t,l,r,p,n,o,s,u,d,i,m,y,f,c,g,b,h,P,G,v,L,C,T,E){"use strict";function k(e){for(var t=e.length,r=new Float64Array(3*t),n=f.IndexDatatype.createTypedArray(t,2*t),o=0,a=0,i=0;i<t;i++){var y=e[i];r[o++]=y.x,r[o++]=y.y,r[o++]=y.z,n[a++]=i,n[a++]=(i+1)%t}var c=new d.GeometryAttributes({position:new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r})});return new u.Geometry({attributes:c,indices:n,primitiveType:u.PrimitiveType.LINES})}function H(e){var t=(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).polygonHierarchy;this._polygonHierarchy=t,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=E.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+1}H.fromPositions=function(e){return new H({polygonHierarchy:{positions:(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).positions}})},H.pack=function(e,t,r){return r=a.defaultValue(r,0),t[r=E.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,r)]=e.packedLength,t};var w={polygonHierarchy:{}};return H.unpack=function(e,t,r){t=a.defaultValue(t,0);var n=E.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=n.startingIndex,delete n.startingIndex;var o=e[t];return a.defined(r)||(r=new H(w)),r._polygonHierarchy=n,r.packedLength=o,r},H.createGeometry=function(e){var t=e._polygonHierarchy,r=t.positions;if(!((r=h.arrayRemoveDuplicates(r,l.Cartesian3.equalsEpsilon,!0)).length<3)&&v.CoplanarPolygonGeometryLibrary.validOutline(r)){var n=E.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(t,!1);if(0!==n.length){for(var o=[],a=0;a<n.length;a++){var i=new b.GeometryInstance({geometry:k(n[a])});o.push(i)}var y=m.GeometryPipeline.combineInstances(o)[0],c=p.BoundingSphere.fromPoints(t.positions);return new u.Geometry({attributes:y.attributes,indices:y.indices,primitiveType:y.primitiveType,boundingSphere:c})}}},function(e,t){return a.defined(t)&&(e=H.unpack(e,t)),e._ellipsoid=l.Ellipsoid.clone(e._ellipsoid),H.createGeometry(e)}});
