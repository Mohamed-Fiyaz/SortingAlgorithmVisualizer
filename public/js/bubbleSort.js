import { someOriginalArray } from "./main.js";
import { speed } from "./main.js";

export async function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export async function bubbleSort() {
  const array = [...someOriginalArray];
  const elements = document.querySelectorAll(".number-box");

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      elements[j].style.backgroundColor = "red";
      elements[j + 1].style.backgroundColor = "red";

      await new Promise((resolve) => setTimeout(resolve, speed));

      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);

        elements[j].innerText = array[j];
        elements[j + 1].innerText = array[j + 1];

        await new Promise((resolve) => setTimeout(resolve, speed));
      }

      elements[j].style.backgroundColor = "#3498db";
      elements[j + 1].style.backgroundColor = "#3498db";
    }

    elements[array.length - i - 1].style.backgroundColor = "#2ecc71";
  }
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "#2ecc71";
    await new Promise((resolve) => setTimeout(resolve, speed));
  }
}
