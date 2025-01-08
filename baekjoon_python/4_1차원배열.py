# 평균 : 평균을 조작하는 문제
num = int(input())
scores = list(map(int, input().split()))

maxinum = 0
for sco in scores:
    if maxinum < sco:
        maxinum = sco

sum_cheat = 0
for sco in scores:
    sum_cheat += (100.0 * sco) / maxinum

print(sum_cheat / num)

# # 바구니 뒤집기 : 배열을 뒤집는 문제
# n, m = map(int, input().split())
#
# bucket = [0] * (n + 1)  # 0부터 시작하므로 한개 더 만든다.
# for i in range(1, n + 1):
#     bucket[i] = i
#
# for k in range(m):
#     i, j = map(int, input().split())
#     diff = j - i
#     if diff == 0:
#         continue
#     for add in range(diff):
#         if i + add < j - add:
#             b = bucket[i + add]
#             bucket[i + add] = bucket[j - add]
#             bucket[j - add] = b
#
# for k in range(1, n + 1):
#     print(bucket[k], end=" ")
# print()

# 나머지: 배열을 활용하여 서로 다른 값의 개수를 찾는 문제
# N = 10
# remain = []
# for i in range(N):
#     num = int(input()) % 42
#     if len(remain) == 0:
#         remain.append(num)
#     else:
#         found = False
#         for r in remain:
#             if r == num:
#                 found = True
#                 break
#         if not found:
#             remain.append(num)
# print(len(remain))

# # 과제 안 내신 분..? : 과제 제출 기한이 지났습니다.
# student = [0] * (30 + 1)  # 0부터 시작하므로 한개 더 만든다.
# for i in range(28):
#     num = int(input())
#     student[num] = 1
# for num in range(1, 30 + 1):
#     if student[num] == 0:
#         print(num)

# # 공 바꾸기 : 배열의 값을 교환하는 문제
# n, m = map(int, input().split())
#
# bucket = [0] * (n + 1)  # 0부터 시작하므로 한개 더 만든다.
# for i in range(1, n + 1):
#     bucket[i] = i
#
# for i in range(m):
#     a, b = map(int, input().split())
#     ball = bucket[a]
#     bucket[a] = bucket[b]
#     bucket[b] = ball
#
# for idx in range(1, n + 1):
#     print(bucket[idx], end=" ")
# print()

# # 공 넣기 : 배열에 값을 쓰는 문제
# n, m = map(int, input().split())
#
# bucket = [0] * (n + 1) # 0부터 시작하므로 한개 더 만든다.
# for idx in range(m):
#     i, j, k = map(int, input().split())
#     for a in range(i, j+1):
#         bucket[a] = k
#
# for idx in range(1, n+1):
#     print(bucket[idx], end=" ")
# print()

# # 최댓값 : 최댓값이 어디에 있는지 찾는 문제
# num = 9
#
# maxinum = 0
# max_idx = 0
# for i in range(1, num+1):
#     number = int(input())
#     if maxinum < int(number):
#         maxinum = int(number)
#         max_idx = i
# print(maxinum)
# print(max_idx)

# # 최소, 최대 : 최솟값과 최댓값을 찾는 문제
# num = int(input())
# numbers = input().split()
#
# mininum = 1_000_000
# maxinum = -1_000_000
# for number in numbers:
#     if int(number) < mininum:
#         mininum = int(number)
#     if maxinum < int(number):
#         maxinum = int(number)
# print(mininum, maxinum)

# # X보다 작은 수 : 배열을 입력받고 X보다 작은 수를 찾는 문제
# inputs = input().split()
# cnt = int(inputs[0])
# x = int(inputs[1])
# numbers = input().split()
#
# for number in numbers:
#     if int(number) < x:
#         print(number, end=" ")
#
# print()

# # 개수 세기 : 배열을 입력받고 v를 찾는 문제
# num = int(input())
# numbers = input().split()
# v = int(input())
#
# find = 0
# for number in numbers:
#     if int(number) == v:
#         find += 1
# print(find)
