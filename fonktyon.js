
/*  Fason ki premye vin nan
 tèt ou a la, se repete tout blòk sa pou kantite 
 fwa w ap mande l la. Se metòd sa ki mwens efikas.  */

 demare
    afiche("Eske se 1 Janvye 1804 Ayiti te pran endepandans?")
    repete
        afiche("Tape repons ou a wi oubyen non")
        antre(repons)
    tanke(repons != 'wi' ak repons != 'non')

    afiche("Antoine Simon se prezidan ki mennen elektrisite an Ayiti?")
    repete
        afiche("Tape repons ou a wi oubyen non")
        antre(repons)
    tanke(repons != 'wi' ak repons != 'non')

    afiche("Eske se an 1821 nou te kòmanse gouvène Dominikani?")
    repete
        afiche("Tape repons ou a wi oubyen non")
        antre(repons)
    tanke(repons != 'wi' ak repons != 'non')
fen




Nou pral kreye yon fonksyon ki pral gen wòl sèlman pou retounen repons itilizatè a fè pou
 kesyon an. Sentaks pou kreye l la se: mo kle fonksyon an plis non fonksyon an kole ak (),
  touswit aprè l se tip done fonksyon sa dwe retounen aprè l fin ekzekite. Toujou konnen ke 
  yon fonksyon dwe tounen yon valè. Itilize mo kle tounen pou w fè fonksyon an tounen valè w
   vle a. Tounen yon valè vle di se sa fonksyon an ap bay pou rezilta lè w ekzekite li.



algorit: kesyon

varyab repons : chenn 

deamare
		
	fonktyon reponn() chenn

		varyab repons: chenn

		repete 

		afiche("antre repons ou an oui oubyn non")

		antre(repons)

		tanke (repons != 'wi' ak repons != 'non')

		tounen(repons)

	fen fonksyon



	afiche("eskeu mwen rele maxime vre")

	afiche(reponn())

	afiche("eskeu jesus ap retoune ?")

	afiche(reponn())


	afiche("eskeu neg jalou konn bat fanm")

	afiche(reponn())

fen



//  fonktyon sa pral pemet mwen jwenn yon rakousi 
// pou evite mwen tape trop kod


fonktyon reponn(varyab kesyon: chenn) chenn
		afiche(kesyon)

		varyab repons : chenn 

		repte
			afiche("antre repons ou a wi oubyn non")

			antre(repons)
		tanke(repons != 'wi' ak repons != 'non')

		tounen repons

fen fonksyon


reponn("eskeu m se yon gro programe pou ou?")

reponn("eskeuw kwe keu algorit sa edew vre nan programsyon?")




Algo: Kesyon
varyab repons: chenn,

demare         
    fonksyon reponn(varyab kesyon: chenn) chenn
        afiche(kesyon)
        varyab repons: chenn
        repete
            afiche("Tape repons ou a wi oubyen non")
            antre(repons)
        tanke(repons != 'wi' ak repons != 'non')
        tounen repons
    fen fonksyon

    reponn("Eske se 1 Janvye 1804 Ayiti te pran endepandans?")
    reponn("Antoine Simon se prezidan ki mennen elektrisite an Ayiti?")
    reponn("Eske se an 1821 nou te kòmanse gouvène Dominikani?")
fen


