from zipfile import ZipFile


class Fruits:
    location:str

    def __int__(self,color,volume):
        color=color
        volume=volume
    @classmethod
    def eat(cls):
        print("less")


class Apple(Fruits):
      def __int__(self, color, volume):
          super.__init__(color,volume)
          color = color
          volume = volume

a=Apple()
print(a.eat())

#
#
# class Animal:
#     def speak(self):
#         print("Animal Speaking")
# #child class Dog inherits the base class Animal
# class Dog(Animal):
#     def bark(self):
#         print("dog barking")
# d = Dog()
# d.bark()
# d.speak()

# .ipnyb to .py
# jupyter nbconvert
f=open("D:\pythonpractice\demo01.py",'a')

# r w a

# f.write("   i am roshan nayak")
# f.read()
f.newlines
# print(f.readlines(88))
# f.truncate(77)#only in w or a mode.

# f.write("i am subham")
#
print(f.name)
print(f.name)
f.writelines("i am roshan nayak")
f.writelines("i am roshan nayak")
f.writelines("i am roshan nayak")
print(f.newlines,"2")
print(f.errors,"1")
f.writelines("i am roshan nayak")

f.writelines("i am roshan nayak")

f.close()
#this is advantages of with open file
# how to close file automatically.
# withblocks and then automaticallly it will close the file not needed to explicityly.
with open("demo01.py",'a') as f :
    f.writelines("subham is a good boy")
    print(f.closed)
print(f.closed)


# write a program to print no of word sentence and letter in a file.

# what is running in the top lvl code environment.
def callme():

    print(__name__,type(__name__))
callme()


#zippping fiile in python

# ZipFile("files.zip","w","ZIP_DEFLATED");