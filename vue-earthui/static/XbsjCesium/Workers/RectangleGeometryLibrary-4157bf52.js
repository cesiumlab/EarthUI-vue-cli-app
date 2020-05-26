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
define(["exports","./when-4ca4e419","./Check-430b3551","./Math-c0afb7aa","./Cartesian2-0cd32dae","./Transforms-1f147cce","./GeometryAttribute-ebf6a4c7"],function(t,f,a,b,O,n,G){"use strict";var p=Math.cos,v=Math.sin,x=Math.sqrt,r={computePosition:function(t,a,n,r,e,o,s){var i=a.radiiSquared,g=t.nwCorner,c=t.boundingRectangle,h=g.latitude-t.granYCos*r+e*t.granXSin,u=p(h),C=v(h),l=i.z*C,S=g.longitude+r*t.granYSin+e*t.granXCos,d=u*p(S),w=u*v(S),M=i.x*d,X=i.y*w,Y=x(M*d+X*w+l*C);if(o.x=M/Y,o.y=X/Y,o.z=l/Y,n){var m=t.stNwCorner;f.defined(m)?(h=m.latitude-t.stGranYCos*r+e*t.stGranXSin,S=m.longitude+r*t.stGranYSin+e*t.stGranXCos,s.x=(S-t.stWest)*t.lonScalar,s.y=(h-t.stSouth)*t.latScalar):(s.x=(S-c.west)*t.lonScalar,s.y=(h-c.south)*t.latScalar)}}},R=new G.Matrix2,y=new O.Cartesian3,P=new O.Cartographic,W=new O.Cartesian3,_=new n.GeographicProjection;function T(t,a,n,r,e,o,s){var i=Math.cos(a),g=r*i,c=n*i,h=Math.sin(a),u=r*h,C=n*h;y=_.project(t,y),y=O.Cartesian3.subtract(y,W,y);var l=G.Matrix2.fromRotation(a,R);y=G.Matrix2.multiplyByVector(l,y,y),y=O.Cartesian3.add(y,W,y),o-=1,s-=1;var S=(t=_.unproject(y,t)).latitude,d=S+o*C,w=S-g*s,M=S-g*s+o*C,X=Math.max(S,d,w,M),Y=Math.min(S,d,w,M),m=t.longitude,f=m+o*c,p=m+s*u,v=m+s*u+o*c;return{north:X,south:Y,east:Math.max(m,f,p,v),west:Math.min(m,f,p,v),granYCos:g,granYSin:u,granXCos:c,granXSin:C,nwCorner:t}}r.computeOptions=function(t,a,n,r,e,o,s){var i,g,c,h,u,C=t.east,l=t.west,S=t.north,d=t.south,w=!1,M=!1;S===b.CesiumMath.PI_OVER_TWO&&(w=!0),d===-b.CesiumMath.PI_OVER_TWO&&(M=!0);var X=S-d;c=(u=C<l?b.CesiumMath.TWO_PI-l+C:C-l)/((i=Math.ceil(u/a)+1)-1),h=X/((g=Math.ceil(X/a)+1)-1);var Y=O.Rectangle.northwest(t,o),m=O.Rectangle.center(t,P);0===n&&0===r||(m.longitude<Y.longitude&&(m.longitude+=b.CesiumMath.TWO_PI),W=_.project(m,W));var f=h,p=c,v=O.Rectangle.clone(t,e),G={granYCos:f,granYSin:0,granXCos:p,granXSin:0,nwCorner:Y,boundingRectangle:v,width:i,height:g,northCap:w,southCap:M};if(0!==n){var x=T(Y,n,c,h,0,i,g);S=x.north,d=x.south,C=x.east,l=x.west,G.granYCos=x.granYCos,G.granYSin=x.granYSin,G.granXCos=x.granXCos,G.granXSin=x.granXSin,v.north=S,v.south=d,v.east=C,v.west=l}if(0!==r){n-=r;var R=O.Rectangle.northwest(v,s),y=T(R,n,c,h,0,i,g);G.stGranYCos=y.granYCos,G.stGranXCos=y.granXCos,G.stGranYSin=y.granYSin,G.stGranXSin=y.granXSin,G.stNwCorner=R,G.stWest=y.west,G.stSouth=y.south}return G},t.RectangleGeometryLibrary=r});
