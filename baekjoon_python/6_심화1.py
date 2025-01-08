# 너의 평점은 : 열심히 문제를 푸시는 여러분은 A+입니다.
sum_hour = 0
sum_score = 0.0
for i in range(20):
    user_inputs = input().split()
    subject = user_inputs[0]
    hour = float(user_inputs[1])
    grade = user_inputs[2]

    score = 0.0
    if grade[0] == "A":
        score = 4.0
    elif grade[0] == "B":
        score = 3.0
    elif grade[0] == "C":
        score = 2.0
    elif grade[0] == "D":
        score = 1.0
    if grade[-1] == "+":  # grade != "F" and grade != "P" and grade[1] == "+":
        score += 0.5

    if grade != "P":
        sum_score += score * hour
        sum_hour += hour

print(sum_score / sum_hour)

# # 그룹 단어 체커 : 조건에 맞는 문자열을 찾는 문제
# def is_group_word(word: str) -> bool:
#     found = [False] * (ord('z') + 1)
#     last_char = ""
#     for char in word:
#         if last_char != char and found[ord(char)]:
#             return False
#         last_char = char
#         found[ord(char)] = True
#     return True
#
#
# n = int(input())
# group_word_cnt = 0
# for i in range(n):
#     input_word = input()
#     if is_group_word(input_word):
#         group_word_cnt += 1
#
# print(group_word_cnt)

# # 크로아티아 알파벳 : 두세 문자가 한 글자로 묶일 수 있을 때 글자의 수를 세는 문제
# word = input()
#
# cnt = 0
# i = 0
# while i < len(word):
#     cnt += 1
#     if i + 2 <= len(word) and word[i:i + 2] in ["c=", "c-", "d-", "lj", "nj", "s=", "z="]:
#         i += 2
#     elif i + 3 <= len(word) and word[i:i + 3] == "dz=":
#         i += 3
#     else:
#         i += 1
# print(cnt)

# # 단어 공부 : 주어진 단어에서 가장 많이 사용된 알파벳을 출력하는 문제
# word = input().upper()
# cnt = [0] * (1 + ord('Z'))
# for char in word:
#     cnt[ord(char)] += 1
#
# max_cnt = 0
# max_char = ""
# for i in range(ord('A'), ord('Z') + 1):
#     if max_cnt < cnt[i]:
#         max_cnt = cnt[i]
#         max_char = chr(i)
#
# found_other_char = False
# for i in range(ord('A'), ord('Z') + 1):
#     if cnt[i] == max_cnt and chr(i) != max_char:
#         print("?")
#         found_other_char = True
#         break
#
# if not found_other_char:
#     print(max_char)

# # 팰린드롬인지 확인하기
# word = input()
# 
# for i in range(len(word)):
#     j = len(word) - i - 1
#     if i == j or i > j:
#         print(1)
#         break
#     elif word[i] != word[j]:
#         print(0)
#         break

# # 별 찍기 - 7
# n = int(input())
#
# for i in range(1, 2 * n):
#     space = abs(n - i)
#     star = (2 * n - 1) - (2 * space)
#     for j in range(space):
#         print(" ", end="")
#     for j in range(star):
#         print("*", end="")
#     print()

# # 킹, 퀸, 룩, 비숍, 나이트, 폰
# chess = [1, 1, 2, 2, 2, 8]
#
# word = list(map(int, input().split()))
#
# for i in range(len(chess)):
#     print(chess[i] - word[i], end=" ")
# print()

# # 새싹
# print("""         ,r'"7
# r`-_   ,'  ,/
#  \\. ". L_r'
#    `~\\/
#       |
#       |""")
