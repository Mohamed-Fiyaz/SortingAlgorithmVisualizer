// Import sorting algorithms
import("./bubbleSort.js").then(
  (module) => (window.bubbleSort = module.bubbleSort)
);
import("./mergeSort.js").then((module) => {
  window.mergeSort = module.mergeSort;
  window.mergeSortRecursive = module.mergeSortRecursive;
  window.merge = module.merge;
});
import("./quickSort.js").then((module) => {
  window.quickSort = module.quickSort;
  window.partition = module.partition;
});

export let someOriginalArray;
export let speed = 800; // Default speed

document.addEventListener("DOMContentLoaded", () => {
  // Initial setup and event listeners

  function resetVisualization() {
    const elements = document.querySelectorAll(".number-box");
    elements.forEach((element) => {
      element.style.backgroundColor = "#3498db";
    });
  }

  document
    .getElementById("reset-btn")
    .addEventListener("click", resetVisualization);

  function createBoxes(array) {
    const container = document.getElementById("array-container");
    container.innerHTML = "";

    array.forEach((value) => {
      const box = document.createElement("div");
      box.className = "number-box";
      box.innerText = value;
      container.appendChild(box);
    });
  }

  document
    .getElementById("generate-array-btn")
    .addEventListener("click", () => {
      const input = document.getElementById("array-input").value;
      const inputArray = input.split(",").map(Number);

      if (inputArray.every((num) => !isNaN(num))) {
        // If all elements are numbers
        someOriginalArray = inputArray;
        createBoxes(someOriginalArray);
        resetVisualization();
      } else {
        // Display error message
        alert("Please enter only numbers separated by commas.");
      }
    });

  document.getElementById("sort-btn").addEventListener("click", () => {
    const selectedAlgorithm =
      document.getElementById("algorithm-selector").value;

    switch (selectedAlgorithm) {
      case "bubbleSort":
        bubbleSort();
        break;
      case "mergeSort":
        mergeSort();
        break;
      case "quickSort":
        quickSort(someOriginalArray, 0, someOriginalArray.length - 1);
        break;
      default:
        console.error("Invalid algorithm selected");
    }
  });

  document.getElementById("speed-btn").addEventListener("click", () => {
    speed = speed === 50 ? 200 : 50;
    const speedBtn = document.getElementById("speed-btn");
    speedBtn.innerText = `Current Speed: ${speed === 50 ? "Fast" : "Slow"}`;
  });
});
