# bouk while

# bouk while lan la pou li ekzekite yon yon kod toutotan li vre
# while == tanke

a = 1

while (a ):
	print("li vre lap fe repte")
	a = + 1


# enkremantasyon

a = 10

while (a > 0):
	print(a)
	a -= 1



non = input("Antre non w: ") # Nou mande itilizatè a pou l tape non l
while not non:
    non = input("Tanpri, tape non w: ")
print("Non w se: " + non)


# ^^^^^^^^^^^^^^^^^  

vwayel = ['a','o','e','i','u','y'] # sekans la se yon lis
for let in vwayel:
    print(let)


# ^^^^^^^^^^^
for i in "lavi mwen":
    print(i)


s = 0
lis_mwen = [3,4,98,108]
for i in lis_mwen:
    s = s + i # li te ka s+= i
print(s)
