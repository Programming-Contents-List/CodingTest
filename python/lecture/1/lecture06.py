def solution(myString, pat):
    answer = int(pat.lower() in myString.lower())
    return answer
