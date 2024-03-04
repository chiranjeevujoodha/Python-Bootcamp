number = int(input('Enter a number: '))
length = int(input('Enter a length: '))

max_length = length * number

list =[]

for i in range(1,max_length + 1):
    if len(list) < length:
        if i % number == 0:
            list.append(i)
            

print(list)
