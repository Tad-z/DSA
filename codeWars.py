def get_count(sentence):
    count = 0
    for element in sentence:
        if element=='a' or element=='e' or element=='i' or element=='o' or element=='u':
            count += 1
            
    return count