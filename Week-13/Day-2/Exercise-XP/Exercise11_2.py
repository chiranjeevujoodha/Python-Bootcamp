number_people = int(input('How many people: '))

names = []
ages = []

for person in range(number_people):
    name = input('Enter your name: ')
    age = int(input('Enter your age: '))
    if age > 21:
        names.append(name)
        ages.append(age)

print(f"Final list: {names}")

