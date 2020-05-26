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
define(["exports","./when-4ca4e419","./Check-430b3551","./Math-c0afb7aa","./Cartesian2-0cd32dae","./defineProperties-24e785e9","./Transforms-1f147cce","./ComponentDatatype-adb4702b","./AttributeCompression-424ccc06"],function(t,y,e,f,b,i,v,s,x){"use strict";function r(t,e){this._ellipsoid=t,this._cameraPosition=new b.Cartesian3,this._cameraPositionInScaledSpace=new b.Cartesian3,this._distanceToLimbInScaledSpaceSquared=0,y.defined(e)&&(this.cameraPosition=e)}i.defineProperties(r.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},cameraPosition:{get:function(){return this._cameraPosition},set:function(t){var e=this._ellipsoid.transformPositionToScaledSpace(t,this._cameraPositionInScaledSpace),i=b.Cartesian3.magnitudeSquared(e)-1;b.Cartesian3.clone(t,this._cameraPosition),this._cameraPositionInScaledSpace=e,this._distanceToLimbInScaledSpaceSquared=i}}});var c=new b.Cartesian3;r.prototype.isPointVisible=function(t){return h(this._ellipsoid.transformPositionToScaledSpace(t,c),this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)},r.prototype.isScaledSpacePointVisible=function(t){return h(t,this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)};var n=new b.Cartesian3;r.prototype.isScaledSpacePointVisiblePossiblyUnderEllipsoid=function(t,e){var i,r,a=this._ellipsoid;return i=y.defined(e)&&e<0&&a.minimumRadius>-e?((r=n).x=this._cameraPosition.x/(a.radii.x+e),r.y=this._cameraPosition.y/(a.radii.y+e),r.z=this._cameraPosition.z/(a.radii.z+e),r.x*r.x+r.y*r.y+r.z*r.z-1):(r=this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared),h(t,r,i)},r.prototype.computeHorizonCullingPoint=function(t,e,i){return d(this._ellipsoid,t,e,i)};var o=b.Ellipsoid.clone(b.Ellipsoid.UNIT_SPHERE);r.prototype.computeHorizonCullingPointPossiblyUnderEllipsoid=function(t,e,i,r){return d(u(this._ellipsoid,i,o),t,e,r)},r.prototype.computeHorizonCullingPointFromVertices=function(t,e,i,r,a){return p(this._ellipsoid,t,e,i,r,a)},r.prototype.computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid=function(t,e,i,r,a,n){return p(u(this._ellipsoid,a,o),t,e,i,r,n)};var m=[];r.prototype.computeHorizonCullingPointFromRectangle=function(t,e,i){var r=b.Rectangle.subsample(t,e,0,m),a=v.BoundingSphere.fromPoints(r);if(!(b.Cartesian3.magnitude(a.center)<.1*e.minimumRadius))return this.computeHorizonCullingPoint(a.center,r,i)};var a=new b.Cartesian3;function u(t,e,i){if(y.defined(e)&&e<0&&t.minimumRadius>-e){var r=b.Cartesian3.fromElements(t.radii.x+e,t.radii.y+e,t.radii.z+e,a);t=b.Ellipsoid.fromCartesian3(r,i)}return t}function d(t,e,i,r){y.defined(r)||(r=new b.Cartesian3);for(var a=P(t,e),n=0,o=0,s=i.length;o<s;++o){var c=M(t,i[o],a);if(c<0)return;n=Math.max(n,c)}return g(a,n,r)}var l=new b.Cartesian3;function p(t,e,i,r,a,n){y.defined(n)||(n=new b.Cartesian3),r=y.defaultValue(r,3),a=y.defaultValue(a,b.Cartesian3.ZERO);for(var o=P(t,e),s=0,c=0,m=i.length;c<m;c+=r){l.x=i[c]+a.x,l.y=i[c+1]+a.y,l.z=i[c+2]+a.z;var u=M(t,l,o);if(u<0)return;s=Math.max(s,u)}return g(o,s,n)}function h(t,e,i){var r=e,a=i,n=b.Cartesian3.subtract(t,r,c),o=-b.Cartesian3.dot(n,r);return!(a<0?0<o:a<o&&o*o/b.Cartesian3.magnitudeSquared(n)>a)}var C=new b.Cartesian3,S=new b.Cartesian3;function M(t,e,i){var r=t.transformPositionToScaledSpace(e,C),a=b.Cartesian3.magnitudeSquared(r),n=Math.sqrt(a),o=b.Cartesian3.divideByScalar(r,n,S);a=Math.max(1,a);var s=1/(n=Math.max(1,n));return 1/(b.Cartesian3.dot(o,i)*s-b.Cartesian3.magnitude(b.Cartesian3.cross(o,i,o))*(Math.sqrt(a-1)*s))}function g(t,e,i){if(!(e<=0||e===1/0||e!=e))return b.Cartesian3.multiplyByScalar(t,e,i)}var T=new b.Cartesian3;function P(t,e){return b.Cartesian3.equals(e,b.Cartesian3.ZERO)?e:(t.transformPositionToScaledSpace(e,T),b.Cartesian3.normalize(T,T))}var z=y.freezeObject({NONE:0,BITS12:1}),E=new b.Cartesian3,N=new b.Cartesian3,I=new b.Cartesian2,B=new v.Matrix4,_=new v.Matrix4,w=Math.pow(2,12);function A(t,e,i,r,a,n){var o,s,c,m=z.NONE;if(y.defined(t)&&y.defined(e)&&y.defined(i)&&y.defined(r)){var u=t.minimum,d=t.maximum,l=b.Cartesian3.subtract(d,u,N),p=i-e;m=Math.max(b.Cartesian3.maximumComponent(l),p)<w-1?z.BITS12:z.NONE,o=t.center,s=v.Matrix4.inverseTransformation(r,new v.Matrix4);var h=b.Cartesian3.negate(u,E);v.Matrix4.multiply(v.Matrix4.fromTranslation(h,B),s,s);var f=E;f.x=1/l.x,f.y=1/l.y,f.z=1/l.z,v.Matrix4.multiply(v.Matrix4.fromScale(f,B),s,s),c=v.Matrix4.clone(r),v.Matrix4.setTranslation(c,b.Cartesian3.ZERO,c),r=v.Matrix4.clone(r,new v.Matrix4);var x=v.Matrix4.fromTranslation(u,B),C=v.Matrix4.fromScale(l,_),S=v.Matrix4.multiply(x,C,B);v.Matrix4.multiply(r,S,r),v.Matrix4.multiply(c,S,c)}this.quantization=m,this.minimumHeight=e,this.maximumHeight=i,this.center=o,this.toScaledENU=s,this.fromScaledENU=r,this.matrix=c,this.hasVertexNormals=a,this.hasWebMercatorT=y.defaultValue(n,!1)}A.prototype.encode=function(t,e,i,r,a,n,o){var s=r.x,c=r.y;if(this.quantization===z.BITS12){(i=v.Matrix4.multiplyByPoint(this.toScaledENU,i,E)).x=f.CesiumMath.clamp(i.x,0,1),i.y=f.CesiumMath.clamp(i.y,0,1),i.z=f.CesiumMath.clamp(i.z,0,1);var m=this.maximumHeight-this.minimumHeight,u=f.CesiumMath.clamp((a-this.minimumHeight)/m,0,1);b.Cartesian2.fromElements(i.x,i.y,I);var d=x.AttributeCompression.compressTextureCoordinates(I);b.Cartesian2.fromElements(i.z,u,I);var l=x.AttributeCompression.compressTextureCoordinates(I);b.Cartesian2.fromElements(s,c,I);var p=x.AttributeCompression.compressTextureCoordinates(I);if(t[e++]=d,t[e++]=l,t[e++]=p,this.hasWebMercatorT){b.Cartesian2.fromElements(o,0,I);var h=x.AttributeCompression.compressTextureCoordinates(I);t[e++]=h}}else b.Cartesian3.subtract(i,this.center,E),t[e++]=E.x,t[e++]=E.y,t[e++]=E.z,t[e++]=a,t[e++]=s,t[e++]=c,this.hasWebMercatorT&&(t[e++]=o);return this.hasVertexNormals&&(t[e++]=x.AttributeCompression.octPackFloat(n)),e},A.prototype.decodePosition=function(t,e,i){if(y.defined(i)||(i=new b.Cartesian3),e*=this.getStride(),this.quantization!==z.BITS12)return i.x=t[e],i.y=t[e+1],i.z=t[e+2],b.Cartesian3.add(i,this.center,i);var r=x.AttributeCompression.decompressTextureCoordinates(t[e],I);i.x=r.x,i.y=r.y;var a=x.AttributeCompression.decompressTextureCoordinates(t[e+1],I);return i.z=a.x,v.Matrix4.multiplyByPoint(this.fromScaledENU,i,i)},A.prototype.decodeTextureCoordinates=function(t,e,i){return y.defined(i)||(i=new b.Cartesian2),e*=this.getStride(),this.quantization===z.BITS12?x.AttributeCompression.decompressTextureCoordinates(t[e+2],i):b.Cartesian2.fromElements(t[e+4],t[e+5],i)},A.prototype.decodeHeight=function(t,e){return e*=this.getStride(),this.quantization!==z.BITS12?t[e+3]:x.AttributeCompression.decompressTextureCoordinates(t[e+1],I).y*(this.maximumHeight-this.minimumHeight)+this.minimumHeight},A.prototype.decodeWebMercatorT=function(t,e){return e*=this.getStride(),this.quantization===z.BITS12?x.AttributeCompression.decompressTextureCoordinates(t[e+3],I).x:t[e+6]},A.prototype.getOctEncodedNormal=function(t,e,i){var r=t[e=(e+1)*this.getStride()-1]/256,a=Math.floor(r),n=256*(r-a);return b.Cartesian2.fromElements(a,n,i)},A.prototype.getStride=function(){var t;switch(this.quantization){case z.BITS12:t=3;break;default:t=6}return this.hasWebMercatorT&&++t,this.hasVertexNormals&&++t,t};var q={position3DAndHeight:0,textureCoordAndEncodedNormals:1},H={compressed0:0,compressed1:1};A.prototype.getAttributes=function(t){var e,i=s.ComponentDatatype.FLOAT,r=s.ComponentDatatype.getSizeInBytes(i);if(this.quantization===z.NONE){var a=2;return this.hasWebMercatorT&&++a,this.hasVertexNormals&&++a,[{index:q.position3DAndHeight,vertexBuffer:t,componentDatatype:i,componentsPerAttribute:4,offsetInBytes:0,strideInBytes:e=(4+a)*r},{index:q.textureCoordAndEncodedNormals,vertexBuffer:t,componentDatatype:i,componentsPerAttribute:a,offsetInBytes:4*r,strideInBytes:e}]}var n=3,o=0;return(this.hasWebMercatorT||this.hasVertexNormals)&&++n,this.hasWebMercatorT&&this.hasVertexNormals?[{index:H.compressed0,vertexBuffer:t,componentDatatype:i,componentsPerAttribute:n,offsetInBytes:0,strideInBytes:e=(n+ ++o)*r},{index:H.compressed1,vertexBuffer:t,componentDatatype:i,componentsPerAttribute:o,offsetInBytes:n*r,strideInBytes:e}]:[{index:H.compressed0,vertexBuffer:t,componentDatatype:i,componentsPerAttribute:n}]},A.prototype.getAttributeLocations=function(){return this.quantization===z.NONE?q:H},A.clone=function(t,e){return y.defined(e)||(e=new A),e.quantization=t.quantization,e.minimumHeight=t.minimumHeight,e.maximumHeight=t.maximumHeight,e.center=b.Cartesian3.clone(t.center),e.toScaledENU=v.Matrix4.clone(t.toScaledENU),e.fromScaledENU=v.Matrix4.clone(t.fromScaledENU),e.matrix=v.Matrix4.clone(t.matrix),e.hasVertexNormals=t.hasVertexNormals,e.hasWebMercatorT=t.hasWebMercatorT,e},t.EllipsoidalOccluder=r,t.TerrainEncoding=A});
