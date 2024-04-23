/*
The JavaScript code provided serves the purpose of fixing duplicate IDs within a JSON file recursively. 
node fixDuplicateIds.js input.json output.json
*/

const fs = require('fs');

// Function to recursively assign unique IDs to elements
function fixDuplicateIds(obj, idMap) {
    if (Array.isArray(obj)) {
        obj.forEach((item, index) => {
            if (typeof item === 'object') {
                fixDuplicateIds(item, idMap);
            }
        });
    } else if (typeof obj === 'object') {
        // Generate a unique ID if the 'id' property is duplicated
        if (obj.id in idMap) {
            obj.id = idMap[obj.id]++;
        } else {
            idMap[obj.id] = 1;
        }
        // Recursively fix IDs in nested objects or arrays
        Object.values(obj).forEach((val) => {
            if (typeof val === 'object') {
                fixDuplicateIds(val, idMap);
            }
        });
    }
}

// Function to read input JSON file, fix duplicate IDs, and write to output file
function fixDuplicateIdsInFile(inputFilePath, outputFilePath) {
    // Read input file
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading input file:', err);
            return;
        }

        try {
            // Parse JSON data
            const jsonObj = JSON.parse(data);

            // Fix duplicate IDs
            const idMap = {}; // Map to track assigned IDs
            fixDuplicateIds(jsonObj, idMap);

            // Write fixed JSON to output file
            fs.writeFile(outputFilePath, JSON.stringify(jsonObj, null, 2), (err) => {
                if (err) {
                    console.error('Error writing to output file:', err);
                } else {
                    console.log('Fixed JSON with unique IDs has been written to', outputFilePath);
                }
            });
        } catch (err) {
            console.error('Error parsing JSON:', err);
        }
    });
}

// Usage: node fixDuplicateIds.js input.json output.json
const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];
fixDuplicateIdsInFile(inputFilePath, outputFilePath);
