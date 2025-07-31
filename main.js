fetch("graph.gexf")
  .then(res => res.text())
  .then(gexfString => {
    const graph = window.graphologyGexf.parse(window.graphology, gexfString);
    const renderer = new window.sigma.Sigma(graph, document.getElementById("container"));
  })
  .catch(err => {
    console.error("Error cargando el grafo:", err);
  });