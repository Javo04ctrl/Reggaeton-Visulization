import Graph from "https://cdn.jsdelivr.net/npm/graphology@0.25.1/+esm";
import { parse } from "https://cdn.jsdelivr.net/npm/graphology-gexf@0.8.0/+esm";
import { Sigma } from "https://cdn.jsdelivr.net/npm/sigma@2.4.0/+esm";

fetch("graph.gexf")
  .then(res => res.text())
  .then(gexfString => {
    const graph = parse(Graph, gexfString);
    const container = document.getElementById("container");
    const renderer = new Sigma(graph, container);
  })
  .catch(err => {
    console.error("Error cargando el grafo:", err);
  });
