algorit: sifas ak perimèt rektang

{algorit sa la pou li pemet ou kalkile perimèt ak sifas yon rektang}

varyab longè_an: reyel 

varyab lajè_an : reyel 

varyab sifas: reyel

varyab perimèt: reyel

demare 
	afiche("antre longè ou vle an:")

	antre(longè_an)

	afiche("antre lajè ou vle an")

	antre(lajè_an)


	si longè_an > 0 ak lajè_an > 0 donk 
		sifas <- longè_an * lajè_an

		perimet <- 2 * (longè_an + lajè_an)

	sinon

	   afiche ("ou pa dwe antre yon nonm negatif")

	fsi

	afiche(sifas)

	afiche(perimèt)


fen

