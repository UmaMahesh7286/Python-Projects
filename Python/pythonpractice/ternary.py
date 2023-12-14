num1=int(input("enter first num"))
num2=int(input("enter second num"))
num3=int(input("enter third num"))

minimum=num1 if num1 < num2 and num1 < num3 else num2 if num2 < num3 else num3
print("minimum of three num is:",minimum)


# identity operator if both are pointing to same value or not
# applies to string too
a=33
b=33
print(a is b)
print(a is not b)
c="roshan"
d="subham"
print(c is not d)
print(id(a))
# id() wiill take u to memory location
print(id(b))
print(id(c))
# in python if u store same value in differnet variable
# then it will point to both variable in same location


# this is membership operators in and not in
print("e" in "eshwar")
print("e" not in "eshwar")
# for in operator will check and then print it will check for all like list tupple and all.
l=[3,4,4,4,44,3]
for i in l:
    print(i)



