algorit: tablo dam

{algorit sa la pou li pemet mwen konn pozisyon pyon nan tablo}

tablo dam(10,10): reyel

varyab x : reyel
varyab y : reyel


damare

		pou x <- 0 a 9 fe
			pou y <- 0 a 9 fe
				si x + y mod 2 = 0 donk 
					 afiche("antre pozisyon wap mete pyon yo an chif", x, "x" , y)
					 antre(dam[x][y])
				fsi
		 	fpou
		fpou
fen





algorit: total not

{algorit sa la pou kalkile not mwen}

tablo not(,) : reyel

varyab x: reyel,
	   y: reyel

reyel total <- 0 : reyel

varyab lx: antye,
		ly: antye


demare
	 	afiche("tape longe tablo ou an nan ranje")

	 	antre(lx)

	 	afiche("tape longe tablo ou an nan colonne")

	 	antre(ly)

	 	redim not(lx,ly)

	 	pou x <- o ak lx - 1 fe
	 		pou y <- 0 ak ly - 1 fe
	 			total <- total +  not[x][y]

	 		fpou
	 	fpou


	  	afiche("totol not ou yo se: ", total)
fen


redim toujou itilize pou w redimansyone tablo yo, sitou sa ki dinamik yo.
malgre mwen mande longè yo, nou wè nan bouk la, mwen retire 1 ladan. Se paske pwogramasyon
 kontwole a pati 0,
 donk si moun nan bay yon longè 4 ekzanp ([0,1,2,3]), donk dènye valè a ap nan pozisyon 3 (4-1).
