algorit: bonis 
{algorit sa la pou li baw yon bonis 10 pwen siw konekte}

varyab bonis : antye <- 10
varyab pwen: antye <- 0

varyab user: chenn

varyab repons: repons


demare
		fonksyon reponn(varyab kesyon: chenn) chenn
		afiche(kesyon)
		varyab repons : chenn
		varyab bonis <- 0
		repete
			afiche("tape repons ou an:")

		tanke (repons != 'wi' ak repons != 'non') fe
			si repons == 'wi' donk
				pwen <- bonis + 10
			fsi
		tounen(repons)

		fen fonksyon

		afiche("antre nomw :")

		antre(user)

		reponn("eskeuw konekte sou platfom lan?")

