def isHappy(n):
    def getNext(num):
        nextNum = 0
        while num > 0:
            digit = num % 10
            nextNum += digit**2
            num //= 10

        return nextNum

    seen = set()
    while n != 1 and n not in seen:
        seen.add(n)
        n = getNext(n)
        print(seen)
        print(n)

    return n == 1
