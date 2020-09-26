// tablo 2 a


deamre

   
afiche(" ----- TABLO 2 -----")
afiche(" vale pozitif yo ")

// nap komanse ak yon bouk

pou x <- 0 a (x2 - 1) fè
    si tablo2[x] >= 0 donk
        afiche(tablo2[x])
    fsi

    // pou total yo 
    si tablo2[x] < 10 donk
        total2 = total2 + tablo2[x]
    fsi
    som2 <- som2 + tablo2[x]
    pwodw12 <- pwodwi2 * tablo2[x]

fpou

// tretman pou vale ki divizib pa 4 yo 

afiche(" vale ki divizib pa 4 yo")

pou x <- 0 a (x2 - 1) fè
    si tablo2 mod 4 = 0 donk
        afiche(tablo2[x])
    fsi
fpou

// afiche rezilta yo
afiche("afiche total pi piti ke 10")
afiche(total2)
afiche("total som tablo")
afiche(som2)
afiche("total pwodwi :")
afiche(pwodwi2)    

// kounya mwen pral fe tretman pou dezyem tablo an 
// men se nan colonne sa vle di nan y2
afiche(" vale posif yo")

pou y <- 0 a (y2 - 1 ) fè
    si tablo2[y] >= 0 donk
        afiche(tablo2[y])
    fsi

    si tablo2[y] < 10 donk
        total2 <- total2 + tablo2[y]
    fsi
    som2 <- som2 + tablo2[y]
    pwodwi2 <- pwodwi2 * tablo2[y]
fpou

afiche(" vale ki divizib pa 4 yo ")

pou y <- 0 a (y2 - 1) fè
    si tablo2[y] mod 4 = 0 donk
        afiche(tablo2[y])
    fsi
fpou

afiche("Total vale pipiti ke 10 :")
afiche(total2)
afiche("Total som tablo1 :")
afiche(som2)
    
afiche("Total pwodwi tablo1 :")
afiche(pwodwi2)
    

    
