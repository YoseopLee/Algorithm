const graph = {
    A : ['B', 'C'],
    B : ['A', 'D'],
    C : ['A', 'G', 'H', 'I'],
    D : ['B', 'E', 'F'],
    E : ['D'],
    F : ['D'],
    G : ['C'],
    H : ['C'],
    I : ['C', 'J'],
    J : ['I']
};

const BFS  = (graph, startNode) => {
    const visted = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야할 노드들

    needVisit.push(startNode); // 노드 탐색 시작

    while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면?
        const node = needVisit.shift(); // queue이기 때문에 FIFO, shift()사용.
        if (!visted.includes(node)) { // 해당 노드가 탐색된 적이 없다면
            visted.push(node);
            needVisit = [...needVisit, ...graph[node]];
        }
    }
    return visted;
};

console.log(BFS(graph, "A")); // startNode = 'A'