n = int(input())

students = []

for _ in range(n):
    name = input()
    grade = float(input())
    students.append([name, grade])

grades = [s[1] for s in students]

second_lowest = sorted(set(grades))[1]

names = [s[0] for s in students if s[1] == second_lowest]

for name in sorted(names):
    print(name)