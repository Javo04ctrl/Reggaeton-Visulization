import { Sigma } from "https://unpkg.com/sigma@2.4.0/build/sigma.es.js";
import Graph from "https://unpkg.com/graphology@0.25.4/dist/graphology.esm.min.js";
import { parse } from "https://unpkg.com/graphology-gexf@0.9.1/browser/graphology-gexf.es.min.js";

fetch("graph.gexf")
  .then(res => res.text())
  .then(gexf => {
    const graph = parse(Graph, gexf);
    const container = document.getElementById("container");
    const renderer = new Sigma(graph, container);
  })
  .catch(err => console.error("Error loading graph:", err));
