
bon_an = 100
chans = 5
chwazi = int(input("chwazi yon nomb: "))

while chwazi != bon_an and (chans > 0):
    if (chwazi < bon_an):
        print("nomb ou an trop piti")
        chwazi = int(input("chwazi yon nomb: "))
    elif (chwazi > bon_an):
        print("nomb ou an tro gran")
        chwazi = int(input("chwazi yon nomb: "))
    elif (chwazi == bon_an):
        print("ou genyn ou jwenn bon an")

    chans -= 1
    continue

