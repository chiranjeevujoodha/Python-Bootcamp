user_word = input('Enter a word: ')

new_word = ''

for letter in user_word:
    if letter not in new_word:
        new_word += letter

print(new_word)

