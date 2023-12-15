def get_count(sentence):
    count = 0
    for element in sentence:
        if element=='a' or element=='e' or element=='i' or element=='o' or element=='u':
            count += 1
            
    return count

# Write a function that takes in a string of one or more words,
#  and returns the same string, but with all five or more letter words reversed
#   (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. 
#   Spaces will be included only when more than one word is present.

def spin_words(sentence):
    array = sentence.split()
    reverse_array = []
    for element in array:
        if len(element) >= 5:
            reverse = element[::-1]
            reverse_array.append(reverse)
        else:
            reverse_array.append(element)

    new_sentence = ' '.join(reverse_array)
    return new_sentence

# Your task is to write a function that takes a string and return a new string with all vowels removed.

def disemvowel(string_):
    remove = ['a','e','i','o','u','A','E','I','O','U']
    for element in string_:
        if element in remove:
            string_ = string_.replace(element, "")
    return string_

# or

import re

def disemvowel(string_):
    return re.sub(r'[aeiouAEIOU]', '', string_)