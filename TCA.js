// devwa sou taks TCA 

algo: TCA

{algorit sa pral pemet mw kalkile TCA sou kob yon moun ap touche}

varyab nonb1 : reyel,
		nonb2 : reyel,
		nonb3 : reyel

demare
	
	// fonksyon sa se pou fe fe tretman TCA a
	fonksyon tca(varyab kantite : reyel) reyel
		varyab vale : reyel
		vale <- (10 / 100) * kantite
		tounen vale
	fen fonksyon

	// fonksyon sa se pouw mandel antre nonb yo

	fonksyon mande_li(varyab mesaj : chenn) chenn

		varyab nonb: reyel

		nonb <- -1 // se poum ka fosel antre yon nonb pozitif

		tanke nonb < 0 fe
			afiche(mesaj)
			antre(nonb)
			tounen nonb
		ftk

	fen fonksyon

	nonb1 <- mande_li('antre nonb1 : ')
	nonb2 <- mande_li('antre nonb2 : ')
	nonb3 <- mande_li('antre nonb2 : ')
	afiche (tca(nonb1))
	afiche (tca(nonb2))
	afiche (tca(non3))

fen 

		