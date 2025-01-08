# A+B - 4 : EOF 감지
# input() 에서는 try: ~ except EOFError:
# sys.stdin.readline() 에서는 if not
import sys

while True:
    user_input = sys.stdin.readline().rstrip()
    if not user_input:
        break

    numbers = user_input.split()
    print(int(numbers[0]) + int(numbers[1]))

# # A+B - 5
# import sys
#
# while True:
#     user_input = sys.stdin.readline().rstrip()
#     numbers = user_input.split()
#     if numbers[0] == numbers[1] == "0":
#         break
#     else:
#         print(int(numbers[0]) + int(numbers[1]))

# # 별 찍기 - 2
# num = int(input())
#
# for i in range(1, num + 1):
#     for j in range(num - i):
#         print(" ", end="")
#     for j in range(i):
#         print("*", end="")
#     print("")

# # 별 찍기 - 1
# num = int(input())
#
# for i in range(1, num + 1):
#     for j in range(i):
#         print("*", end="")
#     print("")

# # A+B - 8
# import sys
#
# num = int(input())
#
# for i in range(num):
#     user_input = sys.stdin.readline().rstrip()
#     numbers = user_input.split()
#     print(f"Case #{i + 1}: {numbers[0]} + {numbers[1]} = {int(numbers[0]) + int(numbers[1])}")

# # A+B - 7
# import sys
#
# num = int(input())
#
# for i in range(num):
#     user_input = sys.stdin.readline().rstrip()
#     numbers = user_input.split()
#     print(f"Case #{i + 1}: {int(numbers[0]) + int(numbers[1])}")

# # 빠른 A+B
# import sys
# num = int(input())
#
# for i in range(num):
#     user_input = sys.stdin.readline().rstrip()
#     numbers = user_input.split()
#     print(int(numbers[0]) + int(numbers[1]))

# # 코딩은 체육과목 입니다
# # 첫 번째 줄에는 문제의 정수 N이 주어진다. (4 <= N <= 1000, N은 4의 배수)
# byte = int(input())
#
# cnt = int(byte / 4)
# for i in range(cnt):
#     print("long ", end="")
# print("int")

# # 영수증
# total = int(input())
# items = int(input())
#
# calc_total = 0
# for i in range(items):
#     item_cnt = input().split()
#     calc_total += int(item_cnt[0]) * int(item_cnt[1])
#
# if total == calc_total:
#     print("Yes")
# else:
#     print("No")

# # 합 : n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
# num = int(input())
# # s = 0
# # for i in range(1, num+1):
# #     s += i
# # print(s)
# print(int(((num + 1)/2) * num))

# # A+B - 3
# num = int(input())
#
# for i in range(num):
#     user_input = input()
#     numbers = user_input.split()
#     print(int(numbers[0]) + int(numbers[1]))

# 구구단
# num = int(input())
#
# for i in range(9):
#     print(num, "*", i + 1, "=", num * (i + 1))
