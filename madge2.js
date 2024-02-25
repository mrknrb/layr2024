const fs = require('fs');
const madge = require('madge');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Specify the path to your entry file or directory
const entryPath = 'src/layrUI/LayrUIMain.tsx';

// Generate dependency graph
madge(entryPath, {format: 'json'}).then((res) => {
    // Access the dependency data
    const dependencyData = res.obj();

    // Create tables for nodes and edges
    const nodesTable = [];
    const edgesTable = [];

    // Iterate over the modules
    Object.keys(dependencyData).forEach((module) => {
        // Add the module to the nodes table
        nodesTable.push({node: module});

        // Add the edges to the edges table
        dependencyData[module].forEach((dependency) => {
            edgesTable.push({source: module, target: dependency});
        });
    });

    // Define CSV writers for nodes and edges
    const nodesCsvWriter = createCsvWriter({
        path: 'nodesTable.csv',
        header: [{id: 'node', title: 'Node'}],
    });

    const edgesCsvWriter = createCsvWriter({
        path: 'edgesTable.csv',
        header: [
            {id: 'source', title: 'Source'},
            {id: 'target', title: 'Target'},
        ],
    });

    // Write tables to CSV files
    nodesCsvWriter.writeRecords(nodesTable).then(() => {
        console.log('Nodes Table saved to nodesTable.csv');
    });

    edgesCsvWriter.writeRecords(edgesTable).then(() => {
        console.log('Edges Table saved to edgesTable.csv');
    });
}).catch((err) => {
    console.error('Error:', err.message);
});
