

from random import randrange
bon_an = randrange(0,100)
chans = 5
print("byenvini nan jwèt  La woulèt la")
print("ou gen pouw chwazi yon nonb ant 0 a 100")
chwazi = int(input("ki nonb ou chwazi?: "))


#mwen use konekte logik ou t moutrem nan kou algorit lan ak (and)
while chwazi != bon_an and (chans > 0):
    if(chwazi < bon_an):
        print("nonb ou an tro piti")
        chwazi = int(input("chwazi yon nonb: "))
    elif(chwazi > bon_an):
        print("nonb lan tro gran")
        chwazi = int(input("chwazi yon nonb: "))
    else:
        print("mwen jwenn li")
    
    chans -= 1
    continue

if (chans == 0):
    print("ou pa gen chans anko")

# mwen vinn fe kondisyon deyo paskeu leu m t anndan bouk lan
# malgre moun lan t gen li pat afiche sam di an li t jis kanpe
# mwen swete ou pa mwens pou sa
if(chwazi == bon_an):
    print(" OU GENYN MESI PASKE OU T CHWAZI JWE")
    print("BYE")
    
# CODE9 AFE PAM MESI ANPIL 
