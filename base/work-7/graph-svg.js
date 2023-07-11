const width = 1000;
const height = 1000;
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", width);
svg.setAttribute("height", height);
document.body.appendChild(svg);

const graph = [
  [0, 1, 1, 0],
  [1, 0, 1, 1],
  [1, 1, 0, 0],
  [0, 1, 0, 0],
];

let movX = 0,
  movY = 0;

graph.forEach((vertexNodes, i) => {
  const inc = i + 1;
  const dir = i % 2 ? 1 : -1;
  const distance = 50;
  const vertex = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  vertex.setAttribute("cx", inc * dir * distance + width / 2);
  vertex.setAttribute("cy", inc * distance);
  vertex.setAttribute("r", 20);
  vertex.setAttribute("fill", "blue");
  svg.appendChild(vertex);

  vertexNodes.forEach((value, j) => {
    if(value === 0) return;
    const startPos = inc
    const endPos = j + 1
    // const dir = j % 2 ? 1 : -1;
    const edge = document.createElementNS("http://www.w3.org/2000/svg", "line");
    edge.setAttribute("x1", startPos * dir * distance + width / 2);
    edge.setAttribute("y1", distance * startPos);
    edge.setAttribute("x2", endPos * -dir * distance + width / 2);
    edge.setAttribute("y2", distance * endPos);
    edge.setAttribute("stroke-width", 2);
    edge.setAttribute("stroke", "black");
    svg.appendChild(edge);

    vertex.addEventListener("mouseover", () => {
      vertex.setAttribute("fill", "blue");
    });

    edge.addEventListener("click", () => {
      edge.setAttribute("stroke", "red");
    });
  });
});
