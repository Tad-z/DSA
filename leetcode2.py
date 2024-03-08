def isHappy(n):
    cycle = set()
    a = n
    while a not in cycle:
        if a == n:
            pass
        else:
            cycle.add(a)
        sum = 0
        while a > 0:
            sum += (a % 10) ** 2
            a = a // 10

        if sum is 1:
            return True
        a = sum
    return False
