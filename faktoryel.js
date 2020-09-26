// devwa sou faktoryel 

algo: faktoryel

varyab nonb: reyel, 	
		total : reyel

demare 
	nonb <- -1
	tanke  nonb < 0 fe 
		 	afiche("antre nonb ou an : ")
		 	antre(nonb)
	ftk


	total <- 1
	tanke nonb >= 1 fe
		total <- total * nonb
		nonb <- nonb -1
	ftk

	afiche(total)

fen


