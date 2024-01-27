import { someOriginalArray } from "./main.js";
import { speed } from "./main.js";

export async function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export async function quickSort(array, low, high) {
  if (low < high) {
    const pivotIndex = await partition(array, low, high);

    await Promise.all([
      quickSort(array, low, pivotIndex - 1),
      quickSort(array, pivotIndex + 1, high),
    ]);
  }
  const elements = document.querySelectorAll(".number-box");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "#2ecc71";
    await new Promise((resolve) => setTimeout(resolve, speed));
  }
}

async function partition(array, low, high) {
  const elements = document.querySelectorAll(".number-box");
  const pivotValue = array[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    elements[j].style.backgroundColor = "red";

    await new Promise((resolve) => setTimeout(resolve, speed));

    if (array[j] < pivotValue) {
      i++;
      swap(array, i, j);

      elements[i].innerText = array[i];
      elements[j].innerText = array[j];

      await new Promise((resolve) => setTimeout(resolve, speed));

      elements[i].style.backgroundColor = "#3498db";
    } else {
      elements[j].style.backgroundColor = "#3498db";
    }
  }

  swap(array, i + 1, high);

  elements[i + 1].innerText = array[i + 1];
  elements[high].innerText = array[high];

  await new Promise((resolve) => setTimeout(resolve, speed));

  elements[i + 1].style.backgroundColor = "#2ecc71";
  elements[high].style.backgroundColor = "#2ecc71";

  return i + 1;
}

document.addEventListener("DOMContentLoaded", () => {});
