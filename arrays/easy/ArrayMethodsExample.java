package arrays;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

public class ArrayMethodsExample {
    public static void main(String[] args) {
        // Initializing an array
        int[] arr = {5, 3, 2, 4, 1};
        int[] array2;


//        int[] array1 = {1, 2, 3};
//        int[] array2 = {4, 5, 6};
//
//        // Concatenate using System.arraycopy
//        int[] concatenatedArray1 = concatenateUsingArraycopy(array1, array2);
//        System.out.println("Concatenated Array (using System.arraycopy): " + Arrays.toString(concatenatedArray1));
//
//        // Concatenate using Arrays.copyOf
//        int[] concatenatedArray2 = concatenateUsingCopyOf(array1, array2);
//        System.out.println("Concatenated Array (using Arrays.copyOf): " + Arrays.toString(concatenatedArray2));

        // Sorting the array
        Arrays.sort(arr);
        System.out.println("Sorted array: " + Arrays.toString(arr));

        // Binary search in the array (must be sorted first)
        int index = Arrays.binarySearch(arr, 3);
        System.out.println("Index of 3: " + index);

        // Copying the array to a new array
        int[] copiedArr = Arrays.copyOf(arr, 7);
        System.out.println("Copied array: " + Arrays.toString(copiedArr));

        // Filling the array with a specific value
        Arrays.fill(copiedArr, 9);
        System.out.println("Filled array: " + Arrays.toString(copiedArr));

        // Comparing two arrays
        int[] arr2 = {1, 2, 3, 4, 5};
        boolean areEqual = Arrays.equals(arr, arr2);
        System.out.println("Arrays equal: " + areEqual);

        // Converting an array to a list
        String[] strArr = {"a", "b", "c"};
        List<String> list = Arrays.asList(strArr);
        System.out.println("Array as list: " + list);

        // Using parallel sort
        int[] parallelArr = {5, 3, 2, 4, 1};
        Arrays.parallelSort(parallelArr);
        System.out.println("Parallel sorted array: " + Arrays.toString(parallelArr));

        // Deep toString for multidimensional arrays
        int[][] multiArr = {{1, 2}, {3, 4}};
        String deepStr = Arrays.deepToString(multiArr);
        System.out.println("Multidimensional array: " + deepStr);

        // Deep equals for multidimensional arrays
        int[][] multiArr2 = {{1, 2}, {3, 4}};
        boolean deepEqual = Arrays.deepEquals(multiArr, multiArr2);
        System.out.println("Multidimensional arrays equal: " + deepEqual);

        // Setting all elements of an array to a specific value using setAll
        int[] setAllArr = new int[5];
        Arrays.setAll(setAllArr, i -> i + 1); // sets values to [1, 2, 3, 4, 5]
        System.out.println("Array set with setAll: " + Arrays.toString(setAllArr));

        // Using stream to perform operations on arrays
        int sum = Arrays.stream(arr).sum();
        System.out.println("Sum of array elements: " + sum);

        // Using Arrays.mismatch to find the first differing index
        int[] arr3 = {1, 2, 3, 4, 5};
        int mismatchIndex = Arrays.mismatch(arr, arr3);
        System.out.println("First mismatch index: " + mismatchIndex);
    }
}

