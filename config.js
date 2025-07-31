window.graphFile = 'graph.gexf';  // nombre exacto de tu archivo GEXF
window.settings = {
  showEdges: true,
  curvedEdges: true,
  nodeSizeFactor: 1,
  textDisplayThreshold: 8,
  // Añade otras configuraciones disponibles según gexf-js
};
window.onload = function() {
  gexf.fetch(window.graphFile, function(graph) {
    var container = document.getElementById('sigma-container');
    var s = new sigma({graph: graph, container: container});
  });
};
