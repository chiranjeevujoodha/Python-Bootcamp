height_in = float(input('Enter your height in inches: '))

height_cm = height_in * 2.54

if height_cm > 145:
    print("You're tall enough to ride" )
else:
    print("You need to be taller to ride")