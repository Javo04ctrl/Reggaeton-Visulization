import { Sigma } from "https://cdn.jsdelivr.net/npm/sigma@2.4.0/build/sigma.es.js";
import { Graph } from "https://cdn.jsdelivr.net/npm/graphology@0.25.4/dist/graphology.esm.min.js";
import { parse } from "https://cdn.jsdelivr.net/npm/graphology-gexf@0.13.2/browser/graphology-gexf.esm.min.js";

fetch("graph.gexf")
  .then(res => res.text())
  .then(gexfString => {
    const graph = parse(Graph, gexfString);
    const renderer = new Sigma(graph, document.getElementById("container"));
  })
  .catch(err => console.error("Error al cargar GEXF:", err));
