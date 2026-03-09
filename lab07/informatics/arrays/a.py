numbers = list(map(int, input().split()))
for i in range(len(numbers)):
    if i % 2 == 0:
        print(numbers[i])