<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/>-->
    <div class="top">上部</div>
    <div class="middle">
      <div ref="earthContainer" id="earthContainer" style="width:100%;height:100%;"></div>
    </div>
    <div class="left">左部</div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    XbsjEarthUI.create("earthContainer").then(earthUI => {
      earthUI.earth.sceneTree.root = {
        expand: true,
        title: "影像",
        children: [
          {
            expand: true,
            title: "地图",
            children: [
              {
                czmObject: {
                  xbsjType: "Imagery",
                  name: "谷歌影像&标注",
                  xbsjImageryProvider: {
                    XbsjImageryProvider: {
                      url:
                        "//www.google.cn/maps/vt?lyrs=s,h&gl=CN&x={x}&y={y}&z={z}"
                    }
                  }
                },
                enabled: true
              }
            ]
          }
        ]
      };
    });
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  height: 10%;
  background: rebeccapurple;
}
.middle {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 90%;
  height: 90%;
}
.left {
  width: 10%;
  height: 100%;
  background: rosybrown;
}
</style>
