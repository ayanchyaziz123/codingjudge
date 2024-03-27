def productExceptSelf(nums):
    cnt = 0
    ple = 0
    val = 1
    for i, num in enumerate(nums):
        if num == 0:
            cnt += 1
            ple = i
        else:
            val *= num
    n = len(nums)
    res = [0] * n
    if cnt > 1:
        return res
    if cnt == 1:
        res[ple] = val
        return res
    for i in range(n):
        res[i] = val // nums[i]
    return res

n = int(input())
input_line = input()
arr = []
arr = list(map(int, input_line.split()))
print(productExceptSelf(arr))
