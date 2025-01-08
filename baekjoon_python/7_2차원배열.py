# 색종이 : 2차원 배열을 활용하여 색종이로 평면을 덮는 문제
arr = [[0 for j in range(101)] for i in range(101)]
area = 0

num = int(input())
for n in range(num):
    x, y = map(int, input().split())

    for i in range(y, y + 10):
        for j in range(x, x + 10):
            if arr[i][j] == 0:
                arr[i][j] = 1
                area += 1
print(area)


# 색종이 : 2차원 배열을 활용하여 색종이로 평면을 덮는 문제
arr = [[0 for j in range(101)] for i in range(101)]
area = 0

num = int(input())
for n in range(num):
    x, y = map(int, input().split())

    for i in range(y, y + 10):
        for j in range(x, x + 10):
            if arr[i][j] == 0:
                arr[i][j] = 1
                area += 1
print(area)

# # 세로읽기 : 문자열의 배열을 다루는 문제
# arr = [["" for j in range(15)] for i in range(5)]
#
# for i in range(5):
#     word = input()
#     for j in range(len(word)):
#         arr[i][j] = word[j]
#
# for j in range(15):
#     for i in range(5):
#         print(arr[i][j], end="")

# # 최댓값 : 최댓값을 2차원에서 찾는 문제
# max_num = -1
# max_i = -1
# max_j = -1
#
# for i in range(9):
#     numbers = list(map(int, input().split()))
#     for j in range(9):
#         if max_num < numbers[j]:
#             max_num = numbers[j]
#             max_i = i
#             max_j = j
# print(max_num)
# print(max_i + 1, max_j + 1)

# # 행렬 덧셈 : 행렬을 2차원 배열로 만들어 더하는 문제
# row, col = map(int, input().split())
#
# arr = [[0 for j in range(col)] for i in range(row)]
#
# for k in range(2):
#     for i in range(row):
#         numbers = list(map(int, input().split()))
#         for j in range(col):
#             arr[i][j] += numbers[j]
#
# for i in range(row):
#     for j in range(col):
#         print(arr[i][j], end=" ")
#     print()
