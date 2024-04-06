class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    
    def bark(self):
        return f'{self.name} is barking'
    
    def run_speed(self):
        speed = (self.weight/self.age)*10
        return f'speed = {speed}'
    
    def fight(self, other_dog):
        if (self.run_speed() * self.weight) > (other_dog.run_speed() * other_dog.weight):
            return f'{self.name} won'
        else:
            return f'{other_dog.name} won'
    

lou = Dog('lou', 3, 22)
lola = Dog('lola', 2, 18)

print(lou.bark())

print(lou.fight(lola))
