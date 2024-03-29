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


# Implement the function unique_in_order which takes as argument a sequence 
# and returns a list of items without any elements with the same value next 
# to each other and preserving the original order of elements.

def unique_in_order(sequence):
    array = []
    for i in range(len(sequence)):
        prev = i - 1
        if i == 0 or sequence[i] != sequence[prev]:
            array.append(sequence[i])

    return array

# The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
# They would like your help with an application form that will tell prospective members which category they will be placed.

# To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
# In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

def open_or_senior(data):
    output = []
    for element in data:
        age = element[0]
        handicap = element[1]
        if age >= 55 and handicap > 7:
            output.append("Senior")
        else:
            output.append("Open")
    return output

# or

def openOrSenior(data):
  return ["Senior" if age >= 55 and handicap >= 8 else "Open" for (age, handicap) in data]


# Complete the function that accepts a string parameter, 
# and reverses each word in the string. All spaces in the string should be retained.
def reverse_words(text):
    array = text.split(' ')
    reverse_array = []
    for element in array:
        reverse = element[::-1]
        reverse_array.append(reverse)

    new_sentence = ' '.join(reverse_array)
    return new_sentence

# or

def reverse_words(str):
    return ' '.join(s[::-1] for s in str.split(' '))

# Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
# The first word within the output should be capitalized only if the original word was capitalized 
# (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
def to_camel_case(text):
    words = text.replace('-', '_').split('_')
    # Capitalize the first word if it was originally capitalized
    camel_case = words[0] + ''.join(word.capitalize() for word in words[1:])
    return camel_case

# Complete the solution so that the function will break up camel casing, using a space between words.
def solution(s):
    res = ""
    for i in range(len(s) - 1):
        res += s[i]
        if s[i + 1].isupper():
            res += " "

    res += s[-1]
    return res