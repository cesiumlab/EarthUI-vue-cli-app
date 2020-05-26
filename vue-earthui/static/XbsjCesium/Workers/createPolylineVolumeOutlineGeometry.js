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
define(["./when-4ca4e419","./Check-430b3551","./Math-c0afb7aa","./Cartesian2-0cd32dae","./defineProperties-24e785e9","./Transforms-1f147cce","./RuntimeError-443472b0","./WebGLConstants-2ddfa2f9","./ComponentDatatype-adb4702b","./GeometryAttribute-ebf6a4c7","./GeometryAttributes-614c63f8","./IndexDatatype-a78bfe07","./IntersectionTests-9618f995","./Plane-6d029ea4","./arrayRemoveDuplicates-0e267e0f","./BoundingRectangle-4654555a","./EllipsoidTangentPlane-6e29c6f6","./EllipsoidRhumbLine-aeb03c9a","./PolygonPipeline-d378df2d","./PolylineVolumeGeometryLibrary-85267466","./EllipsoidGeodesic-f0d5153e","./PolylinePipeline-1211a424"],function(d,e,t,c,i,y,a,n,h,f,g,m,r,o,l,s,p,u,v,E,P,_){"use strict";function k(e){var i=(e=d.defaultValue(e,d.defaultValue.EMPTY_OBJECT)).polylinePositions,a=e.shapePositions;this._positions=i,this._shape=a,this._ellipsoid=c.Ellipsoid.clone(d.defaultValue(e.ellipsoid,c.Ellipsoid.WGS84)),this._cornerType=d.defaultValue(e.cornerType,E.CornerType.ROUNDED),this._granularity=d.defaultValue(e.granularity,t.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";var n=1+i.length*c.Cartesian3.packedLength;n+=1+a.length*c.Cartesian2.packedLength,this.packedLength=n+c.Ellipsoid.packedLength+2}k.pack=function(e,i,a){var n;a=d.defaultValue(a,0);var t=e._positions,r=t.length;for(i[a++]=r,n=0;n<r;++n,a+=c.Cartesian3.packedLength)c.Cartesian3.pack(t[n],i,a);var o=e._shape;for(r=o.length,i[a++]=r,n=0;n<r;++n,a+=c.Cartesian2.packedLength)c.Cartesian2.pack(o[n],i,a);return c.Ellipsoid.pack(e._ellipsoid,i,a),a+=c.Ellipsoid.packedLength,i[a++]=e._cornerType,i[a]=e._granularity,i};var C=c.Ellipsoid.clone(c.Ellipsoid.UNIT_SPHERE),b={polylinePositions:void 0,shapePositions:void 0,ellipsoid:C,height:void 0,cornerType:void 0,granularity:void 0};k.unpack=function(e,i,a){var n;i=d.defaultValue(i,0);var t=e[i++],r=new Array(t);for(n=0;n<t;++n,i+=c.Cartesian3.packedLength)r[n]=c.Cartesian3.unpack(e,i);t=e[i++];var o=new Array(t);for(n=0;n<t;++n,i+=c.Cartesian2.packedLength)o[n]=c.Cartesian2.unpack(e,i);var l=c.Ellipsoid.unpack(e,i,C);i+=c.Ellipsoid.packedLength;var s=e[i++],p=e[i];return d.defined(a)?(a._positions=r,a._shape=o,a._ellipsoid=c.Ellipsoid.clone(l,a._ellipsoid),a._cornerType=s,a._granularity=p,a):(b.polylinePositions=r,b.shapePositions=o,b.cornerType=s,b.granularity=p,new k(b))};var L=new s.BoundingRectangle;return k.createGeometry=function(e){var i=e._positions,a=l.arrayRemoveDuplicates(i,c.Cartesian3.equalsEpsilon),n=e._shape;if(n=E.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(n),!(a.length<2||n.length<3)){v.PolygonPipeline.computeWindingOrder2D(n)===v.WindingOrder.CLOCKWISE&&n.reverse();var t=s.BoundingRectangle.fromPoints(n,L);return function(e,i){var a=new g.GeometryAttributes;a.position=new f.GeometryAttribute({componentDatatype:h.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e});var n,t,r=i.length,o=a.position.values.length/3,l=e.length/3/r,s=m.IndexDatatype.createTypedArray(o,2*r*(1+l)),p=0,d=(n=0)*r;for(t=0;t<r-1;t++)s[p++]=t+d,s[p++]=t+d+1;for(s[p++]=r-1+d,s[p++]=d,d=(n=l-1)*r,t=0;t<r-1;t++)s[p++]=t+d,s[p++]=t+d+1;for(s[p++]=r-1+d,s[p++]=d,n=0;n<l-1;n++){var c=r*n,u=c+r;for(t=0;t<r;t++)s[p++]=t+c,s[p++]=t+u}return new f.Geometry({attributes:a,indices:m.IndexDatatype.createTypedArray(o,s),boundingSphere:y.BoundingSphere.fromVertices(e),primitiveType:f.PrimitiveType.LINES})}(E.PolylineVolumeGeometryLibrary.computePositions(a,n,t,e,!1),n)}},function(e,i){return d.defined(i)&&(e=k.unpack(e,i)),e._ellipsoid=c.Ellipsoid.clone(e._ellipsoid),k.createGeometry(e)}});
