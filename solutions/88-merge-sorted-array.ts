const merge = (nums1: number[], m: number, nums2: number[], n: number) => {
  let left = m - 1;
  let right = n - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (right < 0) break;

    if (left >= 0 && nums1[left] > nums2[right]) {
      nums1[i] = nums1[left--];
      console.log(nums1);
    } else {
      nums1[i] = nums2[right--];
    }
  }

  console.log(nums1);
};

const arr1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
const m = 6;
const arr2 = [1, 2, 2];
const n = 3;

merge(arr1, m, arr2, n);
