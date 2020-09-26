# fonksyon ki retounen yon nomb aleatwa
from random import randrange

bon_an = randrange(0,100)
chans = 5
chwazi = int(input("ki nonb ou chwazi?: "))

while chwazi != bon_an and (chans > 0):
    if (chwazi < bon_an):
        print("nomb ou an trop piti")
        chwazi = int(input("chwazi yon nomb: "))
    elif (chwazi > bon_an):
        print("nomb ou an tro gran")
        chwazi = int(input("chwazi yon nomb: "))
    else:
        print("ou jwenn bon nonb lan")

    chans -= 1
    continue