

algorit: kalkile rezilta
{algorit sa la pou li kalkile rezilta yon elev apati de not li}

varyab not1: reyel,
	   not2: reyel,
	   not3: reyel

varyab total_pwen: reyel

varyab mwayen: reyel

varyab mansyon_reyisit: chenn

demare
	
	afiche("ou gen pouw antre 3 not piga yo negatif")

	afiche("antre premye not ou an: ")
	antre(not1)

	afiche("antre dezyem not an : ")

	antre(not2)

	afiche (" antre twazyem not ou an : ")

	antre(not3)

	si (not1 >= 0 ak not1 <= 100) ak (not2 >= 0 ak not2 <= 100) ak (not3 >= 0 ak not3 <= 100) donk

		total_pwen <- not1 + not2 + not3

		mwayen <- total_pwen / 3

		selon mansyon_reyisit

			mwayen <= 49 : afiche("ou elimine")
			mwayen >= 50 ak mwayen <= 64 : afiche("ou ajoute")
			mwayen >= 65 ak mwayen <= 100 : afiche("ou reyisi")

		finalman afiche("nou pa konn mwayèn sa")

	sinon si not1 > 100 ak not2 > 100 ak not3 > 100 donk

		afiche("ou pa dwe antre yon nonm ki pi gran ke 100")

		afiche("eseye anko")

		afiche("antre premye not ou an: ")
	antre(not1)

	afiche("antre dezyem not an : ")

	antre(not2)

	afiche (" antre twazyem not ou an : ")

	antre(not3)

	total_pwen <- not1 + not2 + not3

		mwayen <- total_pwen / 3

		selon mansyon_reyisit

			mwayen <= 49 : afiche("ou elimine")
			mwayen >= 50 ak mwayen <= 64 : afiche("ou ajoute")
			mwayen >= 65 ak mwayen <= 100 : afiche("ou reyisi")

		finalman afiche("nou pa konn mwayèn sa")

	sinon

		afiche("ou pa dwe antre yon nonm negatif")

	fsi

	afiche(total_pwen)
	afiche(mwayen)
	afiche(mansyon_reyisit)
    
fen