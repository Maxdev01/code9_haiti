// afiche vale pozitif yo

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