

// ^^^^^^^^^^^^^^^^^^^^^^^    SA SE MW TAP VOYE M PAT SAVE CHNJMAN YO SORRY ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^66

Algo: Triyaj

tablo tablo1(,): antye
 varyab tablo2(,): antye
varyab x1 :antye 
	   x2  : antye ,
	   y2 : antye,
	    som1 : antye ,
	    total1 : antye ,
	     pwodwi1: antye

// varyab pou dezyem tablo
varyab som2 : antye 
varyab total2 : antye
varyab pwodwi2 : antye

demare
	afiche("Mete dimansyon tablo1 : ")
	antre(x1)
	afiche("Tape dimansyon tablo2 ranje : ")
	antre(x2)
	afiche("Tape dimansyon tablo2 kolon : ")
	antre(y2)
	si (x1 > 0) ak (x2 > 0) ak (y2 > 0) donk
	
		redim tablo1(x1)
		redim tablo2(x2, y2)
		
		total1 <- 0
		som1 <- 0
		pwodwi1 <- 1
		afiche("Ranpli tablo1 svp !")
		pou x <- 0 a (x1 - 1) fè
			antre(tablo1[x])
		fpou
		
		//  ********tablo1*********
		afiche("-- Tablo 1 --")
		afiche("Vale positif yo :")
		
		pou x <- 0 a (x1 - 1) fè
			si tablo1[x] >= 0 donk
				afiche(tablo1[x])
			fsi
			si tablo1[x] < 10 donk
				total1 = total1 + tablo1[x]
			fsi
			som1 <- som1 + tablo1[x]
			pwodwi1 <- pwodwi1 * tablo1[x]
		fpou
		
		afiche("Vale divizib pa 4")
		 pou x <- 0 a (x1 - 1) fè
			si tablo1[x] mod 4 = 0 donk
				afiche(tablo1[x])
			fsi
		fpou
		
		afiche("Total vale pipiti ke 10 :")
		afiche(total1)
	  afiche("Total som tablo1 :")
		afiche(som1)
		
		afiche("Total pwodwi tablo1 :")
		afiche(pwodwi1)



		// &&&&&&&&&&&&&&& dezyem pati TP an  %%%%%%%%%%%%%%%%
		
		total2 <- 0
		som2 <- 0
		pwodwi2 <- 1
		// tablo a 2 dimansyon an 

		afiche(" ----- TABLO 2 -----")
	     // afiche vale pozitif yo
	     afiche(" vale pozitif yo")
		pou x <- 0 a (x2 - 1)  fè
			pou y <- 0 a (y2 - 1)  fè
				si tablo2[x] >= 0 donk
					afiche(tablo2[x])
				fsi 
				// pou total yo 
				si tablo2[x] < 10 donk 
					total2 <- total2 + tablo2[x]
				fsi
				// som ak pwodwi
				som2 = som2 + tablo2[x]
				pwodwi2 <- pwodwi2 * tablo2[x]


				  // kondisyon pou kolonne yo 
				  si tablo2[y] >= 0 donk 
				  	afiche(tablo2[y])
				  fsi

				  // pou total kolonn yo 
				  si tablo2[y] < 10 donk
				  	total2 <- total2 + tablo2[y]
				  fsi

				  // som ak pwodwi kolonn
				  som2 <- som2 + tablo2[y]
				  pwodwi2 <- pwodwi2 * tablo2[y]

			fpou
		fpou




		afiche("vale ki divizib pa 4 yo : ")

		pou x <- 0 a (x2 - 1)  fè
			pou y <- 0 a (y2 - 1)  fè

				si tablo2 mod 4 = 0 donk 
					afiche(tablo2[x])
				fsi 
					// pou kolonn
					si tablo2 mod 4 = 0 donk
						afiche(tablo2[y])
					fsi
			fpou
		fpou

	// afiche rezilta yo
	afiche("afiche total pi piti ke 10")
	afiche(total2)
	afiche("total som tablo")
	afiche(som2)
	afiche("total pwodwi :")
	afiche(pwodwi2)    

	
		
	
	
	fsi




fen