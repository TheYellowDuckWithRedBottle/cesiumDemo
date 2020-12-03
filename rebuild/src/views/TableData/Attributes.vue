<template>
  <div>
    
  </div>
</template>

<script>
export default {
    name:'Attribute',
    data(){
        return{
            viewer:{},
            selected = {
                feature: undefined,
                originalColor: new Cesium.Color(),
            },
            clickHandler:window.cesiumViewer.screenSpaceEventHandler.getInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK),
        }
    },
    mounted(){
    var selectedEntity = new Cesium.Entity();
    this.viewer=window.cesiumViewer
    this.viewer.screenSpaceEventHandler.setInputAction(function onMouseMove(
      movement
    ) {
      // If a feature was previously highlighted, undo the highlight
      if (Cesium.defined(highlighted.feature)) {
        highlighted.feature.color = highlighted.originalColor;
        highlighted.feature = undefined;
      }
      // Pick a new feature
      var pickedFeature = viewer.scene.pick(movement.endPosition);
      if (!Cesium.defined(pickedFeature)) {
        nameOverlay.style.display = "none";
        return;
      }
      // A feature was picked, so show it's overlay content
      nameOverlay.style.display = "block";
      nameOverlay.style.bottom =
        viewer.canvas.clientHeight - movement.endPosition.y + "px";
      nameOverlay.style.left = movement.endPosition.x + "px";
      var name = pickedFeature.getProperty("name");
      if (!Cesium.defined(name)) {
        name = pickedFeature.getProperty("id");
      }
      nameOverlay.textContent = name;
      // Highlight the feature if it's not already selected.
      if (pickedFeature !== selected.feature) {
        highlighted.feature = pickedFeature;
        Cesium.Color.clone(
          pickedFeature.color,
          highlighted.originalColor
        );
        pickedFeature.color = Cesium.Color.YELLOW;
      }
    },
    Cesium.ScreenSpaceEventType.MOUSE_MOVE);

     viewer.screenSpaceEventHandler.setInputAction(function onLeftClick(
      movement
    ) {
      // If a feature was previously selected, undo the highlight
      if (Cesium.defined(selected.feature)) {
        selected.feature.color = selected.originalColor;
        selected.feature = undefined;
      }
      // Pick a new feature
      var pickedFeature = viewer.scene.pick(movement.position);
      if (!Cesium.defined(pickedFeature)) {
        clickHandler(movement);
        return;
      }
      // Select the feature if it's not already selected
      if (selected.feature === pickedFeature) {
        return;
      }
      selected.feature = pickedFeature;
      // Save the selected feature's original color
      if (pickedFeature === highlighted.feature) {
        Cesium.Color.clone(
          highlighted.originalColor,
          selected.originalColor
        );
        highlighted.feature = undefined;
      } else {
        Cesium.Color.clone(pickedFeature.color, selected.originalColor);
      }
      // Highlight newly selected feature
      pickedFeature.color = Cesium.Color.LIME;
      // Set feature infobox description
      var featureName = pickedFeature.getProperty("name");
      selectedEntity.name = featureName;
      selectedEntity.description =
        'Loading <div class="cesium-infoBox-loading"></div>';
      viewer.selectedEntity = selectedEntity;
      selectedEntity.description =
      
        pickedFeature.getProperty("BIN") +
      
        pickedFeature.getProperty("DOITT_ID") +
    
        pickedFeature.getProperty("SOURCE_ID") +
   
        pickedFeature.getProperty("longitude") +
      
        pickedFeature.getProperty("latitude") +
     
        pickedFeature.getProperty("height") +
     
        pickedFeature.getProperty("TerrainHeight")
    },
    Cesium.ScreenSpaceEventType.LEFT_CLICK);

    }

}
</script>

<style>

</style>