# Sorting Algorithms

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Best</th>
            <th>Average</th>
            <th>Worst</th>
            <th>Memory</th>
            <th>Stable</th>
            <th>Method</th>
        <tr>
    </thead>
    <tbody>
        <tr>
            <td>Selection Sort</td>
            <td>n2</td>
            <td>n2</td>
            <td>n2</td>
            <td>1</td>
            <td>No</td>
            <td>Selection</td>
        </tr>
        <tr>
            <td>Bubble Sort</td>
            <td>n</td>
            <td>n2</td>
            <td>n2</td>
            <td>1</td>
            <td>Yes</td>
            <td>Exchanging</td>
        </tr>
        <tr>
            <td>Insertion Sort</td>
            <td>n</td>
            <td>n2</td>
            <td>n2</td>
            <td>1</td>
            <td>Yes</td>
            <td>Insertion</td>
        </tr>
        <tr>
            <td>Merge Sort</td>
            <td>n*log(n)</td>
            <td>n*log(n)</td>
            <td>n*log(n)</td>
            <td>1 (or n)</td>
            <td>Yes</td>
            <td>Merging</td>
        </tr>
        <tr>
            <td>Quick Sort</td>
            <td>n*log(n)</td>
            <td>n*log(n)</td>
            <td>n2</td>
            <td>log(n)</td>
            <td>Depends</td>
            <td>Partitioning</td>
        </tr>
    </tbody>
</table>

## Selection sort 

Simple, but inefficient algorithm.
Swap the first with the min element on the right, then the second, etc.

* Memory: **O(1)**
* Stable: **No**
* Method: **Selection**

## Bubble sort 

Simple, but inefficient algorithm.
Swaps to neighbor elements when not in order until sorted.

* Memory: **O(1)**
* Stable: **Yes**
* Method: **Exchanging**

## Insertion sort  

Simple, but inefficient algorithm.
Move the first unsorted element left to its place.

* Memory: **O(1)**
* Stable: **Yes**
* Method: **Insertion**

## Merge sort  

Efficient sorting algorithm.

1. Divide the list into sub-lists (typically 2 sub-lists)
2. Sort each sub-list (recursively call merge-sort)
3. Merge the sorted sub-lists into a single list

Best, average and worst case: O(n*log(n))

* Memory: **O(n)** / **O(1)**
* Stable: **Yes**
* Method: **Merging**

## QuickSort  

Efficient sorting algorithm.

1. Choose a pivot 
2. Move smaller elements left & larger right
3. sort left & right

Best & average case: O(n*log(n)); Worst: O(n2)

* Memory: **O(log(n))**
* Stable: **Depends**
* Method: **Partitioning**

