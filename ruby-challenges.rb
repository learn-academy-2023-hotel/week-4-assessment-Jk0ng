# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# input: an integer
# out put: a string that tells whether the integer is even or odd
# create a method that takes in an integer
# write an conditional statement using unless 
# unless the condition .even? is false, the output is always "#{integer} is odd"
# use else to return the other scenerio when the condition is true and the integer is even

def even_or_odd (integer)
    unless integer.even? 
        "#{integer} is odd"
    else 
        "#{integer} is even"
    end
end
p even_or_odd (reposts1)
p even_or_odd (reposts2)
p even_or_odd (reposts3)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# input: a string
# output: a string that contains only the consenant from the original strings but not vowels. 
# create a function that takes in a string
# use .delete to remove "AEIOUaeiou"

def consonance (string)
    string.delete "AEIOUaeiou"
end
p consonance(beatles_album1)
p consonance(beatles_album2)
p consonance(beatles_album3)



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# input: a string 
# output: a message/string that tells wheter the string passed in is a palindorm or not
# create a method that takes in a string 
# set up a condtional statement 
# use .reverse and boolean evaluation to see if the the string in reverse order is the same as it is before. if yes -->the "#{string} is a palindrome"
# else print out a message that "#{string} is not a palindrome"

def palindrome (string)
    if string.downcase == string.downcase.reverse
        "#{string} is a palindrome"
    else 
        "#{string} is not a palindrome"
    end
end

p palindrome(palindrome_test_case1)
p palindrome(palindrome_test_case2)
p palindrome(palindrome_test_case3)