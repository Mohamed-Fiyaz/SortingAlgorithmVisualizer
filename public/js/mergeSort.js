import { someOriginalArray } from "./main.js";
import { speed } from "./main.js";

export async function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export async function mergeSort() {
  const array = [...someOriginalArray];
  await mergeSortRecursive(array, 0, array.length - 1);
  const elements = document.querySelectorAll(".number-box");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "#2ecc71";
    await new Promise((resolve) => setTimeout(resolve, speed));
  }
}

async function mergeSortRecursive(array, start, end) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);

    await mergeSortRecursive(array, start, mid);
    await mergeSortRecursive(array, mid + 1, end);

    await merge(array, start, mid, end);
  }
}

async function merge(array, start, mid, end) {
  const elements = document.querySelectorAll(".number-box");

  const leftArray = array.slice(start, mid + 1);
  const rightArray = array.slice(mid + 1, end + 1);

  let leftIndex = 0;
  let rightIndex = 0;
  let mergedIndex = start;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    elements[start + leftIndex].style.backgroundColor = "red";
    elements[mid + 1 + rightIndex].style.backgroundColor = "red";

    await new Promise((resolve) => setTimeout(resolve, speed));

    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      array[mergedIndex] = leftArray[leftIndex];

      elements[mergedIndex].innerText = array[mergedIndex];

      await new Promise((resolve) => setTimeout(resolve, speed));

      elements[mergedIndex].style.backgroundColor = "#2ecc71";

      leftIndex++;
    } else {
      array[mergedIndex] = rightArray[rightIndex];

      elements[mergedIndex].innerText = array[mergedIndex];

      await new Promise((resolve) => setTimeout(resolve, speed));

      elements[mergedIndex].style.backgroundColor = "#2ecc71"; // Default Blue

      rightIndex++;
    }

    mergedIndex++;
  }

  while (leftIndex < leftArray.length) {
    array[mergedIndex] = leftArray[leftIndex];

    elements[mergedIndex].innerText = array[mergedIndex];

    await new Promise((resolve) => setTimeout(resolve, speed));

    elements[mergedIndex].style.backgroundColor = "#3498db";

    leftIndex++;
    mergedIndex++;
  }

  while (rightIndex < rightArray.length) {
    array[mergedIndex] = rightArray[rightIndex];

    elements[mergedIndex].innerText = array[mergedIndex];

    await new Promise((resolve) => setTimeout(resolve, speed));

    elements[mergedIndex].style.backgroundColor = "#3498db";

    rightIndex++;
    mergedIndex++;
  }
}
