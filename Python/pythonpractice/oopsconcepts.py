# when u create of the obj then memory is allocated for a class;
class Student:
    # documnet string in double or triple string
    '''hii all'''

    def __init__(self,name,age,gender):
        self.name=name
        self.age=age
        self.gender=gender


    def print(self):
        print(self.name,self.age,self.gender)
    @staticmethod
    def printname(name1):
        print(name1)

#  differenec between method and function
# class method can only be acessed after cresting obj but not function

s1=Student("roshan",22,"male")
s1.print()
s1.printname(s1.name)
s1.printname("prakash")



# instance and static variable
# dont declare any self in static mathod and anotate with @static method
