# 주사위 세개
user_input = input()
dice = user_input.split()

# 1. 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
if dice[0] == dice[1] == dice[2]:
    print(10_000 + int(dice[0]) * 1_000)
# 3. 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.
elif dice[0] != dice[1] and dice[0] != dice[2] and dice[1] != dice[2]:
    greatest = dice[0]
    if dice[1] > dice[0] and dice[1] > dice[2]:
        greatest = dice[1]
    elif dice[2] > dice[0] and dice[2] > dice[1]:
        greatest = dice[2]
    print(int(greatest) * 100)
# 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
else:
    same = dice[0]
    if dice[1] == dice[2]:
        same = dice[1]
    print(1_000 + int(same) * 100)

# 오븐시계 : 시간 더하기
# hhmm = input()
# plus = int(input())
#
# numbers = hhmm.split()
# hh = int(numbers[0])
# mm = int(numbers[1])
#
# plus += hh * 60 + mm
# hh = int(plus / 60)
# mm = plus - (hh * 60)
# if hh >= 24:
#     hh = hh - 24
#
# print(hh, mm)

# # 알람시계 : 45분 일찍
# hhmm = input()
# numbers = hhmm.split()
# hh = int(numbers[0])
# mm = int(numbers[1])
#
# if mm < 45:
#     hh = hh - 1
#     mm = mm - 45 + 60
# else:
#     mm = mm - 45
#
# if hh < 0:
#     hh = hh + 24
#
# print(hh, mm)

# # 사분면 고르기
# x = int(input())
# y = int(input())
#
# if x > 0 and y > 0:
#     print(1)
# elif x < 0 and y > 0:
#     print(2)
# elif x < 0 and y < 0:
#     print(3)
# else:
#     print(4)

# # 윤년
# year = int(input())
#
# if year % 4 == 0 and (year % 100 > 0 or year % 400 == 0):
#     print(1)
# else:
#     print(0)

# # 시험 성적
# score = int(input())
#
# if score >= 90:
#     print("A")
# elif score >= 80:
#     print("B")
# elif score >= 70:
#     print("C")
# elif score >= 60:
#     print("D")
# else:
#     print("F")

# 두 수 비교하기
# user_input = input()
# numbers = user_input.split()
# a = int(numbers[0])
# b = int(numbers[1])
# if a > b:
#     print(">")
# elif a < b:
#     print("<")
# else:
#     print("==")
