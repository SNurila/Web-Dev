def average(arr):
    s = set(arr)           
    return sum(s) / len(s)


n = int(input())
arr = list(map(int, input().split()))

result = average(arr)
print(result)