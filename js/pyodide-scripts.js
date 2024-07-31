<<<<<<< HEAD
async function loadPyodideAndPackages() {
    console.log("Loading Pyodide...");
    let pyodide = await loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/"
    });

    console.log("Loading necessary packages...");
    await pyodide.loadPackage('numpy');
    await pyodide.loadPackage('pandas');
    await pyodide.loadPackage('matplotlib');
    console.log("Packages loaded.");
    return pyodide;
}

let pyodideReadyPromise = loadPyodideAndPackages();

async function runPython() {
    let outputElement = document.getElementById("output");
    let code = document.getElementById("python-code").value;
    outputElement.textContent = "Running...";
    console.log("Running Python code...");

    let pyodide = await pyodideReadyPromise;
    try {
        let result = await pyodide.runPythonAsync(code);
        console.log("Execution result:", result);
        outputElement.textContent = result;
    } catch (err) {
        console.error("Execution error:", err);
        outputElement.textContent = `Error: ${err}`;
    }
}
=======
async function loadPyodideAndPackages() {
    console.log("Loading Pyodide...");
    let pyodide = await loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/"
    });

    console.log("Loading necessary packages...");
    await pyodide.loadPackage('numpy');
    await pyodide.loadPackage('pandas');
    await pyodide.loadPackage('matplotlib');
    console.log("Packages loaded.");
    return pyodide;
}

let pyodideReadyPromise = loadPyodideAndPackages();

async function runPython() {
    let outputElement = document.getElementById("output");
    let code = document.getElementById("python-code").value;
    outputElement.textContent = "Running...";
    console.log("Running Python code...");

    let pyodide = await pyodideReadyPromise;
    try {
        let result = await pyodide.runPythonAsync(code);
        console.log("Execution result:", result);
        outputElement.textContent = result;
    } catch (err) {
        console.error("Execution error:", err);
        outputElement.textContent = `Error: ${err}`;
    }
}
>>>>>>> 6b02f49391834f472f1960bdd6ffae9984b74a26
