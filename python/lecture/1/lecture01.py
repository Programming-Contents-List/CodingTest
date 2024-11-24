# def solution(my_string, s, e):
#     answer = my_string[s] + my_string[e]
#     return answer


# str = input()
# solution(str, 6, 12)

def solution(my_string, s, e):
    mylist = list(my_string)
    mylist[s:e+1] = reversed(mylist[s:e+1])
    answer = ''.join(mylist)
    return answer
# str = input("")

# result = solution(str, 6, 12)
# print(result)


print(solution("Progra21Sremm3", 6, 12))
print(solution("Stanley1yelnatS", 4, 10))
