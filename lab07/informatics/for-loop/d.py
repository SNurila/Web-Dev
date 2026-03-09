x = int(input())
d = int(input())

counter = 0
while x > 0:
    last = x % 10
    if d == last:
        counter += 1
    x //= 10
print(counter)
