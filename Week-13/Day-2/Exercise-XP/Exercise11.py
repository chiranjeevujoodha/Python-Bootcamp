number_of_people = int(input('How many people in your group? '))

age = []
ticket = 0

for i in range(number_of_people):
    enter_age = int(input('Enter age: '))
    age.append(enter_age)

print(age)

for i in age:
    if i < 3:
        ticket = 0
    if i >= 3 and i <= 12:
        ticket += 10
    if i > 12:
        ticket += 15
    
print(f"Total price = {ticket}.")


