






algo: kalkil not 


varyab longe_not : antre,
		i : antye,
		j ; antye,
		total : reyel,
		moy : reyel,
		not : reyel,
tablo tablo_not: reyel
konstant not_pase <- 75 : antye
varyab lot_fason_longe_not: antye


damare
	// fonktyn sa se li ki pral pemet mwen awondi not yo
	// ladan ap tou gen kondisyon 
	fonksyon awondi(varyab not: reyel) reyel
		varyab not_awondi : reyel

		si not >= 7 ak not < 10 donk
		 	not_awondi <- 10
		 sinon si not >= 17 donk

		 	not_awondi <- 20

		 sinon 

		 	not_awondi <- not
		 fsi

		tounen not_awondi
	fen fonksyon


// pati sa pral pemet ou konnen
// konbyen not kap anndan tablo an 
	afiche("konbyen not ou pral tape ?")

	antre(longe_not)

	redim tablo_not(longe_not) // li pemet konn konbyn eleman ki anndan tablo an


	// bouk sa ap pemet ou rekipere not yo 
	// epi pouw tou fe yon treman sou yo

	pou i <- 0 a longe_not  - 1 fe
		afiche("antre not ou a")
		antre(not)

	 	not <- reyel (not)

	 	tanke not < 0 ak not > 20 fe 

		 	afiche("not la dwe de 0 a 20")

		 	afiche("antre not ou an la :")
		 	antre(not)

	 		not <- reyel (not)

	 	ftk 
		// wap tou awondil 
		// la ou tou rele font=syon awondi an
		not <- awondi(not)
		// epi wap tou ajoutel nan tablo an 
		tablo_not[i] <- not

	fpou


	afiche("nou finn pran not ou yo men rezilta yo")


	total <- 0

	j <- 0

	lot_fason_longe_not <- longe(tablo_not)

	tanke j <= longe(tablo_not) - 1 fè

		total <- total + tablo_not[j]

		j <- j + 1

	ftk

	// kounya nou pral afiche 
	// total pwen ak mwayen lan
	moy <- total / lot_fason_longe_not

	afiche("total pwen ou fe an se :", total)

	afiche("mwayen ou fe an se :", moy)

	// sa se yon kondisyon ki pral pemet ou
	// pemet konnen si li pase ou pas

	si moy >= not_pase donk
		afiche("moun sa pase kou a")

	sinon 
		afiche("moun sa pa pase kou an")
	fsi

	// kounya nou pral detemine si moun sa gen kapasite
	afiche("eskeu elev sa ou trouve li kapab?  Yes/no")
	varyab chwa : chenn

	antre(chwa)

	selon chwa

	'yes' : afiche("oui elev sa kapab")
	'non' : afiche("non elev sa pa kapab")

	finalman: afiche ("nou pa konn chwa sa ou fe an")

