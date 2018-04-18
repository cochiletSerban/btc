// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Bitcoin",
        "main":    "<p>Test cu scop de autoevaluare</p>",
        "results": "<h5>Testul s-a finalizat</h5><p></p>",
        "level1":  "10",
        "level2":  "8",
        "level3":  "6",
        "level4":  "4",
        "level5":  "0" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Ce este Bitcoin?",
            "a": [
                {"option": "Un sistem de plată peer-to-peer descentralizat",      "correct": true},
                {"option": "Un standard",     "correct": false},
                {"option": "Un nou trend",      "correct": false},
                {"option": "O componenta hardware ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Un sistem de plată peer-to-peer descentralizat este varianta corecta</p>" // no comma here
        },
       
	   
	   
	   
	      { // Question 2 - Multiple Choice, Single True Answer
            "q": "In ce se masoara gradul de eficienta a hardwareului de minat?",
            "a": [
                {"option": "Gb",                       "correct": false},
                {"option": "Mb",     "correct": false},
                {"option": "Hz",            "correct": false},
				{"option": "Hash/watt",            "correct": true}
                // no comma here
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Hash/watt este varianta corecta</p>" // no comma here
        },
		
		 { // Question 3 - Multiple Choice, Single True Answer
            "q": "Ce este un ASIC?",
            "a": [
                {"option": "este un microcip relizat pentru un scop foarte specific", "correct": true},
                {"option": "este un circuit integrat digital configurabil",     "correct": false},
                {"option": "O alta moneda care a devin populara rapid ",            "correct": false},
				{"option": "Un portofel digital pentru bitcoin",            "correct": false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>este un microcip relizat pentru un scop foarte specific este varianta corecta</p>" // no comma here
        },
		
		{ // Question 4 - Multiple Choice, Single True Answer
            "q": "Ce este un FPGA?",
            "a": [
                {"option": "este un circuit integrat digital configurabil",  "correct": true},
                {"option": "un producator de hardware de minat",     "correct": false},
                {"option": "o distributie special optimizata pentru obtinearea de bitcoin", "correct": false},
				{"option": "un controller pentru ASIC-uri ",            "correct": false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>este un circuit integrat digital configurabil este varianta corecta</p>" // no comma here
        },
		
		
		{ // Question 5 - Multiple Choice, Single True Answer
            "q": "Ce este rapsbery pi ?",
            "a": [
                {"option": "Un site unde putem sa cumparam bitcoin ",  "correct": false},
                {"option": "Un Single-Board Computer", "correct": true},
                {"option": "Un software de minat",        "correct": false},
				{"option": "Un model de FPGA",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Un Single-Board Computer este varianta corecta</p>" // no comma here
        },
		
		{ // Question 6 - Multiple Choice, Single True Answer
            "q": "Placile video de la _______ sunt cele mai eficiente pentru minat monezi de tip SCRYPT",
            "a": [
                {"option": "Nvidia",  "correct": false},
                {"option": "Ati",     "correct": true},
                {"option": "Intel",        "correct": false},
				{"option": "Sony",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Ati este varianta corecta</p>" // no comma here
        },
		
		
		{ // Question 7 - Multiple Choice, Single True Answer
            "q": "Care este un software de minat conceput pentru a fi utilizat numai pentru placile video de la Nvidia?",
            "a": [
                {"option": "Cgminer ",  "correct": false},
                {"option": "Cudaminer",     "correct": true},
                {"option": "Cpuminer",        "correct": false},
				{"option": "Pimp",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Cudaminer este varianta corecta</p>" // no comma here
        },
		
		
		{ // Question 8 - Multiple Choice, Single True Answer
            "q": "Care este cel mai ineficinet hardware de minat la ora actuala?",
            "a": [
                {"option": "Cpu",  "correct": true},
                {"option": "gpu",     "correct": false},
                {"option": "asic",        "correct": false},
				{"option": "fpga",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Cpu este varianta corecta</p>" // no comma here
        },
		
		{ // Question 9 - Multiple Choice, Single True Answer
            "q": "Care este o caracteristica specifica programului cgminer?",
            "a": [
                {"option": "Suporta numai placi video", "correct": false},
                {"option": "Functioneaza numai pe linux",     "correct": false},
                {"option": "Este open surce",        "correct": true},
				{"option": "Permite folosirea a maxim 4 placi video",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Este open surce este varianta corecta</p>" // no comma here
        },
		
		{ // Question 10 - Multiple Choice, Single True Answer
            "q": "Ce este CUDA",
            "a": [
                {"option": "Un producator de placi video",  "correct": false},
                {"option": "Un moneda virtuala",     "correct": false},
                {"option": "o arhitectură  pentru calculul paralel al datelor ",   "correct": true},
				{"option": "un microcip ",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>o arhitectură  pentru calculul paralel al datelor este varianta corecta</p>" // no comma here
        },
		
		{ // Question 11 - Multiple Choice, Single True Answer
            "q": "Ce este PIMP ?",
            "a": [
                {"option": "Un mod de a transfera monezi virtuale ",  "correct": false},
                {"option": "O companie de procesare a plăților online ",     "correct": false},
                {"option": "Un contract de minat cu durata limitata",        "correct": false},
				{"option": "o platformă minerit instant portabiala",        "correct":true}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>o platformă minerit instant portabiala  este varianta corecta</p>" // no comma here
        },
		
		{ // Question 12 - Multiple Choice, Single True Answer
            "q": "Care dintre siturile de mai jos pot fi folosite pentru a schimba alte monezi virtuale in bitcoin?",
            "a": [
                {"option": "Coinbase ",  "correct": false},
                {"option": "Paypal",     "correct": false},
                {"option": "cleverMining",        "correct": false},
				{"option": "cryptsy ",        "correct":true}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>cryptsy este varianta corecta</p>" // no comma here
        },
		
		{ // Question 13 - Multiple Choice, Single True Answer
            "q": "O alta modalitate de obtinere a acestor monezi este si inchirierea de hardware dedicat – acest procedeu se mai numeste si?",
            "a": [
                {"option": "Transfer",  "correct": false},
                {"option": "Depozit",     "correct": false},
                {"option": "Contract de minare",        "correct": true},
				{"option": "Cloud minig ",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Contract de minare este varianta corecta</p>" // no comma here
        },
		
			{ // Question 14 - Multiple Choice, Single True Answer
            "q": "Cel mai mare dezavantaj al contractelor de minat este?",
            "a": [
                {"option": "daca valuare bitcointului scade clientul pe parcursul contractului la sfarsitul acestia clientul va obtine mai putini bani",  "correct": true},
                {"option": "la incheierea contractului clientul nu poate sa vanda dispozitivele de minat",     "correct": false},
                {"option": "comisioanele ascunse pe care unele situri le aplica",        "correct": false},
				{"option": "pretul ridicat al acestora",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>daca valuare bitcointului scade clientul pe parcursul contractului la sfarsitul acestia clientul va obtine mai putini bani este varianta corecta</p>" // no comma here
        },
		
		{ // Question 15 - Multiple Choice, Single True Answer
            "q": "Siturile pricipale care ofera aceste contracte de minat sunt:",
            "a": [
                {"option": "zeushash, pbmining, ghash.io",  "correct": true},
                {"option": "Coinwarz , coinbase",     "correct": false},
                {"option": "Btc-e,cryptsy",        "correct": false},
				{"option": "Pimp,bamt",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>zeushash, pbmining, ghash.io  este varianta corecta</p>" // no comma here
        }
		
		
		
    ]
};
