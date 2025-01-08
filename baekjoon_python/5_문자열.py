# 그대로 출력하기 : EOF 감지
# input() 에서는 try: ~ except EOFError:
# sys.stdin.readline() 에서는 if not
while True:
    try:
        input_str = input()
        print(input_str)
    except EOFError:
        break


# # 다이얼 : 규칙에 따라 문자에 대응하는 수를 출력하는 문제
# # A = 65, Z= 90
# word = input()
# clicks = [3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10]
# second = 0
# for char in word:
#     second += clicks[ord(char) - ord('A')]
#
# print(second)

# # 상수 : 숫자를 뒤집어서 비교하는 문제
# a, b = input().split()
#
# reversed_a = int(a[0]) + int(a[1]) * 10 + int(a[2]) * 100
# reversed_b = int(b[0]) + int(b[1]) * 10 + int(b[2]) * 100
#
# if reversed_a > reversed_b:
#     print(reversed_a)
# else:
#     print(reversed_b)

# # 단어의 개수 : 단어의 개수를 구하는 문제
# words = input().split()
# print(len(words))

# # 문자열 반복 : 각 문자를 반복하여 출력하는 문제
# t = int(input())
# for i in range(t):
#     user_inputs = input().split()
#     r = int(user_inputs[0])
#     s = user_inputs[1]
#
#     for c in s:
#         for j in range(r):
#             print(c, end="")
#     print()

# # 알파벳 찾기 : 한 단어에서 각 알파벳이 처음 등장하는 위치를 찾는 문제
# input_string = input()
#
# pos = [-1] * 26
# for i, char in enumerate(input_string):
#     idx = ord(char) - ord('a')
#     if pos[idx] == -1:
#         pos[idx] = i
#
# for j in range(26):
#     print(pos[j], end=" ")
# print()

# # 숫자의 합 : 정수를 문자열로 입력받는 문제. Python처럼 정수 크기에 제한이 없다면 상관 없으나, 예제 3은 일반적인 정수 자료형에 담기에 너무 크다는 점에 주목합시다.
# num = int(input())
# input_string = input()
#
# sum_of_str = 0
# for n in input_string:
#     sum_of_str += int(n)
# print(sum_of_str)

# # 아스키 코드 : 데이터는 결국 0과 1일 텐데 문자를 어떻게 만드는 걸까요? 아스키 코드에 대해 알아봅시다.
# input_char = input()
# print(ord(input_char[0]))

# # 문자열 : 문...제
# num = int(input())
# for i in range(num):
#     input_str = input()
#     print(input_str[0], end="")
#     print(input_str[-1])

# # 단어 길이 재기 : 문자열을 입력받고 길이를 재는 문제
# input_string = input()
# print(len(input_string))

# # 문자와 문자열 : 문자열을 입력받고 문자열의 특정 위치를 읽어 봅시다.
# input_string = input()
# pos = int(input())
# print(input_string[pos - 1])
