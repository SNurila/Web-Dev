from itertools import product

k, m = map(int, input().split())

lists = []
for _ in range(k):
    data = list(map(int, input().split()))
    lists.append(data[1:])  

max_value = 0

for combination in product(*lists):
    value = sum(x*x for x in combination) % m
    max_value = max(max_value, value)

print(max_value)