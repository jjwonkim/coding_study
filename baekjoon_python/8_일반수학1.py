# 진법 변환 : 진법에 대해 배우는 문제

n, b = input().split()
b = int(b)

dec = 0
for i in range(len(n)):
    num = 0
    if '0' <= n[i] <= '9':
        num = int(n[i])
    else:
        num = 10 + ord(n[i]) - ord('A')
    dec = dec * b + num

print(dec)
