def solution(myString, pat):
    # 한 방향이기 때문에 template가 필요하다.
    myString = myString.replace('A', 'X')
    myString = myString.replace('B', 'A')
    myString = myString.replace('X', 'B')
    answer = int(pat in myString)
    return answer


print(solution("ABBAA", "AABB"))
print(solution("ABAB", "ABAB"))
