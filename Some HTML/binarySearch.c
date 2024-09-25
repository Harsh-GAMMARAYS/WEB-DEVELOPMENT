#include <stdio.h>
#include <stdlib.h> 

int compare(const void *a, const void *b)
{
  return (*(int *)a - *(int *)b);
}

int binarySearch(int arr[], int low, int high, int x)
{
  if (high >= low)
  {
    int mid = low + (high - low) / 2;

    if (arr[mid] == x)
    {
      return mid;
    }

    if (arr[mid] > x)
    {
      return binarySearch(arr, low, mid - 1, x);
    }

    return binarySearch(arr, mid + 1, high, x);
  }
  
  return -1;
}

int main()
{
  int arr[] = {2, 3, 4, 5, 66, 77, 88, 43, 21, 554, 45};
  int n = sizeof(arr) / sizeof(arr[0]);
  int x = 77;

  // Sort the array before performing binary search
  qsort(arr, n, sizeof(int), compare);

  int result = binarySearch(arr, 0, n - 1, x);
  
  if (result == -1)
  {
    printf("Element not present in the array\n");
  }
  else
  {
    printf("Element is at index: %d\n", result);
  }

  return 0;
}
