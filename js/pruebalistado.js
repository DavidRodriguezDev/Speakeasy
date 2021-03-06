const listadoCocteles = [
    {
        nombre : "Rusty Nail",       //------RUSTY NAIL COCKTAIL-----
        id : "1",
        principal : "Whisky",
        ingredientes : {
            ing1 : "Scotch Whisky",
            ing2 : "Drambuie"
        },
        medidasCl : {
            med1 : "3 cl",
            med2 : "3 cl"
        },
        medidasOz : {
            med1 : "1 oz",
            med2 : "1 oz"
        },
        tipoDeVaso : "Rocks",
        tipoDeHielo : "Cubed",
        metodo : "Build",
        decoracion : "None"
    },
    {
        nombre : "Godfather",       //------GODFATHER COCKTAIL-----
        id : "2",
        principal : "Whisky",
        ingredientes : {
            ing1 : "Scotch Whisky",
            ing2 : "Amaretto"
        },
        medidasCl : {
            med1 : "3 cl",
            med2 : "3 cl"
        },
        medidasOz : {
            med1 : "1 oz",
            med2 : "1 oz"
        },
        tipoDeVaso : "Rocks",
        tipoDeHielo : "Cubed",
        metodo : "Build",
        decoracion : "None"
    },
    {
        nombre : "Screwdriver",       //-----SCREWDRIVER------
        id: "3",
        principal : "Vodka",
        ingredientes : {
            ing1 : "Vodka",
            ing2 : "Orange Juice"
        },
        medidasCl : {
            med1 : "4 cl",
            med2 : "Fill"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "Fill"
        },
        tipoDeVaso : "Highball",
        tipoDeHielo : "Cubed",
        metodo : "Build",
        decoracion : "None"
    },
    {
        nombre : "Rob Roy",       //------ROB ROY COCKTAIL-----
        id : "4",
        principal : "Whisky",
        ingredientes : {
            ing1 : "Scotch Whisky",
            ing2 : "Sweet Vermouth",
            ing3 : "Angostura Bitters"
        },
        medidasCl : {
            med1 : "6 cl",
            med2 : "2 cl",
            med3 : "2 dashes"
        },
        medidasOz : {
            med1 : "6 oz",
            med2 : "2 oz",
            med3 : "2 dashes"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Stir and Julep Strain",
        decoracion : "Cherry"
    },
    {
        nombre : "Cuba Libre",       //------CUBA LIBRE-----
        id : "5",
        principal : "Ron",
        ingredientes : {
            ing1 : "Light Rum",
            ing2 : "Fresh Lime Juice",
            ing3 : "Coca-Cola"
        },
        medidasCl : {
            med1 : "4 cl",
            med2 : "1 cl",
            med3 : "Fill"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "1/2 oz",
            med3 : "Fill"
        },
        tipoDeVaso : "Highball",
        tipoDeHielo : "Cubed",
        metodo : "Build",
        decoracion : "Lime Wedge"
    },
    {
        nombre : "Tequila Sunrise",       //------TEQUILA SUNRISE-----
        id : "6",
        principal : "Tequila",
        ingredientes : {
            ing1 : "Tequila",
            ing2 : "Orange Juice",
            ing3 : "Grenadine"
        },
        medidasCl : {
            med1 : "4 cl",
            med2 : "Fill",
            med3 : "1 cl"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "Fill",
            med3 : "1/2"
        },
        tipoDeVaso : "Rocks",
        tipoDeHielo : "Cubed",
        metodo : "Build and Sink",
        decoracion : "None"
    },
    {
        nombre : "Black Russian",       //------BLACK RUSSIAN-----
        id : "7",
        principal : "Vodka",
        ingredientes : {
            ing1 : "Vodka",
            ing2 : "Kahlua"
        },
        medidasCl : {
            med1 : "4 cl",
            med2 : "2 cl"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "3/4 oz"
        },
        tipoDeVaso : "Rocks",
        tipoDeHielo : "Cubed",
        metodo : "Build",
        decoracion : "None"
    },
    {
        nombre : "White Russian",       //------WHITE RUSSIAN-----
        id : "8",
        principal : "Vodka",
        ingredientes : {
            ing1 : "Vodka",
            ing2 : "Kahlua",
            ign3 : "Milk"
        },
        medidasCl : {
            med1 : "4 cl",
            med2 : "2 cl",
            med3 : "Fill"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "3/4 oz",
            med3 : "Fill"
        },
        tipoDeVaso : "Rocks",
        tipoDeHielo : "Cubed",
        metodo : "Build",
        decoracion : "None"
    },
    {
        nombre : "Moscow Mule",       //------MOSCOW MULE COCKTAIL-----
        id : "9",
        principal : "Vodka",
        ingredientes : {
            ing1 : "Vodka",
            ing2 : "Fresh Lime Juice",
            ing3 : "Ginger Beer"
        },
        medidasCl : {
            med1 : "4 cl",
            med2 : "2 cl",
            med3 : "Fill"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "3/4 oz",
            med3 : "Fill"
        },
        tipoDeVaso : "Highball / Cooper Mug",
        tipoDeHielo : "Cubed",
        metodo : "Build",
        decoracion : "Lime Wedge"
    },
    {
        nombre : "See Breeze",       //------SEE BREEZE COCKTAIL-----
        id : "10",
        principal : "Vodka",
        ingredientes : {
            ing1 : "Vodka",
            ing2 : "Cranberry Juice",
            ing3 : "Grapefruit Juice"
        },
        medidasCl : {
            med1 : "4 cl",
            med2 : "6 cl",
            med3 : "4 cl (float)"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "2 oz",
            med3 : "1 1/2 oz (float)"
        },
        tipoDeVaso : "Rocks",
        tipoDeHielo : "Cubed",
        metodo : "Build and Float",
        decoracion : "None"
    },
    {
        nombre : "Screaming Orgasm",       //------SCREAMING ORGASM COCKTAIL-----
        id : "11",
        principal : "Vodka",
        ingredientes : {
            ing1 : "Vodka",
            ing2 : "Kahlua",
            ing3 : "Amaretto",
            ing4 : "Bailey??s",
            ing5 : "Milk"
        },
        medidasCl : {
            med1 : "1 cl",
            med2 : "1 cl",
            med3 : "1 cl",
            med4 : "1 cl",
            med5 : "4 cl"
        },
        medidasOz : {
            med1 : "1/2 oz",
            med2 : "1/2 oz",
            med3 : "1/2 oz",
            med4 : "1/2 oz",
            med5 : "2 oz"
        },
        tipoDeVaso : "Rocks",
        tipoDeHielo : "Cubed",
        metodo : "Shake and Strain",
        decoracion : "None"
    },
    {
        nombre : "Sex on the Beach",       //------SEX ON THE BEACH COCKTAIL-----
        id : "12",
        principal : "Vodka",
        ingredientes : {
            ing1 : "Vodka",
            ing2 : "Peachtree",
            ing3 : "Cranberry Juice",
            ing4 : "Orange Juice"
        },
        medidasCl : {
            med1 : "2 cl",
            med2 : "2 cl",
            med3 : "5 cl",
            med4 : "5 cl"
        },
        medidasOz : {
            med1 : "3/4 oz",
            med2 : "3/4 oz",
            med3 : "2 oz",
            med4 : "2 oz"
        },
        tipoDeVaso : "Rocks",
        tipoDeHielo : "Cubed",
        metodo : "Build",
        decoracion : "None"
    },
    {
        nombre : "Cosmopolitan",       //------COSMOPOLITAN COCKTAIL-----
        id:  "13",
        principal : "Vodka",
        ingredientes : {
            ing1 : "Citron Vodka",
            ing2 : "Cointreau",
            ing3 : "Fresh Lime Juice",
            ing4 : "Cranberry Juice"
        },
        medidasCl : {
            med1 : "4 cl",
            med2 : "2 cl",
            med3 : "1 cl",
            med4 : "3 cl"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "3/4 oz",
            med3 : "1/2 oz",
            med4 : "1 oz"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Shake and Fine Strain",
        decoracion : "Orange Zest"
    },
    {
        nombre : "Daiquiri",       //------DAIQUIRI COCKTAIL-----
        id : "14",
        principal : "Ron",
        ingredientes : {
            ing1 : "Light Rum",
            ing2 : "Fresh Lime Juice",
            ing3 : "Sugar Syrup"
        },
        medidasCl : {
            med1 : "6 cl",
            med2 : "3 cl",
            med3 : "1,5 cl"
        },
        medidasOz : {
            med1 : "2 oz",
            med2 : "1 oz",
            med3 : "1/2 oz"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Shake and Fine Strain",
        decoracion : "None"
    },
    {
        nombre : "French Martini",       //------FRENCH MARTINI COCKTAIL-----
        id : "15",
        principal : "Vodka",
        ingredientes : {
            ing1 : "Vodka",
            ing2 : "Chambord",
            ing3 : "Pineapple Juice"
        },
        medidasCl : {
            med1 : "4 cl",
            med2 : "2 cl",
            med3 : "4 cl"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "3/4 oz",
            med3 : "1 1/2 oz"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Shake and Fine Strain",
        decoracion : "1 Raspberry"
    },
    {
        nombre : "Lynchburg L.",       //------LYNCHBURG LEMONADE COCKTAIL-----
        id : "16",
        principal : "Whisky",
        ingredientes : {
            ing1 : "Jack Daniel??s",
            ing2 : "Cointreau",
            ing3 : "Fresh Lemon Juice",
            ing4 : "Sugar Syrup",
            ing5 : "Sprite / Lemonade"
        },
        medidasCl : {
            med1 : "4 cl",
            med2 : "2 cl",
            med3 : "2 cl",
            med4 : "1 cl",
            med5 : "Top"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "3/4 oz",
            med3 : "3/4 oz",
            med4 : "1/2 oz",
            med5 : "Top"
        },
        tipoDeVaso : "Highball",
        tipoDeHielo : "Cubed",
        metodo : "Shake and Strain",
        decoracion : "Lemon Wedge"
    },
    {
        nombre : "Tom Collins",       //------TOM COLLINS COCKTAIL-----
        id : "17",
        principal : "Gin",
        ingredientes : {
            ing1 : "Gin",
            ing2 : "Fresh Lemon Juice",
            ing3 : "Sugar Syrup",
            ing4 : "Soda"
        },
        medidasCl : {
            med1 : "6 cl",
            med2 : "3 cl",
            med3 : "1,5 cl",
            med4 : "Top"
        },
        medidasOz : {
            med1 : "2 oz",
            med2 : "1 oz",
            med3 : "1/2 oz",
            med4 : "Top"
        },
        tipoDeVaso : "Highball",
        tipoDeHielo : "Cubed",
        metodo : "Shake and Strain",
        decoracion : "Lemon Wedge"
    },
    {
        nombre : "Dry Martini",       //------DRY MARTINI COCKTAIL-----
        id : "18",
        principal : "Gin",
        ingredientes : {
            ing1 : "Gin or Vodka",
            ing2 : "Dry Vermouth"
        },
        medidasCl : {
            med1 : "6 cl",
            med2 : "1 Barspoon"
        },
        medidasOz : {
            med1 : "2 oz",
            med2 : "1 Barspoon"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Stir and Julep Strain",
        decoracion : "Olive or Lemon Zest"
    },
    {
        nombre : "Manhattan",       //------MANHATTAN COCKTAIL-----
        id : "19",
        principal : "Bourbon",
        ingredientes : {
            ing1 : "Angostura bitters",
            ing2 : "Bourbon",
            ing3 : "Sweet Vermouth"
        },
        medidasCl : {
            med1 : "2 Dashes",
            med2 : "6 cl",
            med3 : "2 cl"
        },
        medidasOz : {
            med1 : "2 Dashes",
            med2 : "2 oz",
            med3 : "3/4 oz"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Stir and Julep Strain",
        decoracion : "1 Cherry"
    },
    {
        nombre : "Batanga",       //------BATANGA COCKTAIL-----
        id : "20",
        principal : "Tequila",
        ingredientes : {
            ing1 : "Tequila",
            ing2 : "Fresh Lime Juice",
            ing3 : "Coca-Cola"
        },
        medidasCl : {
            med1 : "4 cl",
            med2 : "Juice from 1/2 Lime",
            med3 : "Fill"
        },
        medidasOz : {
            med1 : "1 1/2oz",
            med2 : "Juice from 1/2 Lime",
            med3 : "Fill"
        },
        tipoDeVaso : "Highball",
        tipoDeHielo : "Cubed",
        metodo : "Build",
        decoracion : "Salt Rim"
    },
    {
        nombre : "Margarita",       //------MARGARITA COCKTAIL-----
        id : "21",
        principal : "Tequila",
        ingredientes : {
            ing1 : "Tequila",
            ing2 : "Cointreau",
            ing3 : "Fresh Lime Juice",
            ing4 : "Coca-Cola"
        },
        medidasCl : {
            med1 : "4cl",
            med2 : "2 cl",
            med3 : "3 cl",
            med4 : "1 cl"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "3/4 oz",
            med3 : "1 oz",
            med4  : "1/2 oz"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Shake and Fine Strain",
        decoracion : "Salt Rim (Half, Full or None)"
    },
    {
        nombre : "Side Car",       //------SIDE CAR COCKTAIL-----
        id : "22",
        principal : "Otros",
        ingredientes : {
            ing1 : "Cognac",
            ing2 : "Cointreau",
            ing3 : "Fresh Lemon Juice",
            ing4 : "Sugar Syrup"
        },
        medidasCl : {
            med1 : "4cl",
            med2 : "2 cl",
            med3 : "3 cl",
            med4 : "1 cl"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "3/4 oz",
            med3 : "1 oz",
            med4  : "1/2 oz"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Shake and Fine Strain",
        decoracion : "Sugar Rim (Half, Full or None)"
    },
    {
        nombre : "Amaretto Sour",       //------AMARETTO SOUR COCKTAIL-----
        id : "23",
        principal : "Otros",
        ingredientes : {
            ing1 : "Angostura Bitters",
            ing2 : "Egg White",
            ing3 : "Amaretto",
            ing4 : "Fresh Lemon Juice",
            ing5 : "Sugar Syrup"
        },
        medidasCl : {
            med1 : "2 Dashes",
            med2 : "1,5 cl",
            med3 : "6 cl",
            med4 : "3 cl",
            med5 : "1 cl"
        },
        medidasOz : {
            med1 : "2 Dashes",
            med2 : "1/2 oz",
            med3 : "2 oz",
            med4 : "1 oz",
            med5 : "1/2 oz"
        },
        tipoDeVaso : "Rocks",
        tipoDeHielo : "Cubed",
        metodo : "Dry Shake, Shake and Strain",
        decoracion : "Lemon Wedge and Cherry"
    },
    {
        nombre : "Whisky Sour",       //------WHISKY SOUR COCKTAIL-----
        id : "24",
        principal : "Bourbon",
        ingredientes : {
            ing1 : "Angostura Bitters",
            ing2 : "Egg White",
            ing3 : "Bourbon",
            ing4 : "Fresh Lemon Juice",
            ing5 : "Sugar Syrup"
        },
        medidasCl : {
            med1 : "2 Dashes",
            med2 : "1,5 cl",
            med3 : "6 cl",
            med4 : "3 cl",
            med5 : "1 cl"
        },
        medidasOz : {
            med1 : "2 Dashes",
            med2 : "1/2 oz",
            med3 : "2 oz",
            med4 : "1 oz",
            med5 : "1/2 oz"
        },
        tipoDeVaso : "Rocks",
        tipoDeHielo : "Cubed",
        metodo : "Dry Shake, Shake and Strain",
        decoracion : "Orange Zest and Cherry"
    },
    {
        nombre : "Clover Club",       //------CLOVER CLUB COCKTAIL-----
        id : "25",
        principal : "Gin",
        ingredientes : {
            ing1 : "Raspberry puree",
            ing2 : "Egg White",
            ing3 : "Gin",
            ing4 : "Fresh Lemon Juice",
            ing5 : "Sugar Syrup"
        },
        medidasCl : {
            med1 : "1,5 cl",
            med2 : "1,5 cl",
            med3 : "6 cl",
            med4 : "3 cl",
            med5 : "1 cl"
        },
        medidasOz : {
            med1 : "1/2 oz",
            med2 : "1/2 oz",
            med3 : "2 oz",
            med4 : "1 oz",
            med5 : "1/2 oz"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Dry Shake, Shake and Strain",
        decoracion : "1 Raspberry"
    },
    {
        nombre : "Bramble",       //------BRAMBLE COCKTAIL-----
        id : "26",
        principal : "Gin",
        ingredientes : {
            ing1 : "Gin",
            ing2 : "Fresh Lemon Juice",
            ing3 : "Sugar Syrup",
            ing4 : "Cr??me de Mure"
        },
        medidasCl : {
            med1 : "4 cl",
            med2 : "2 cl",
            med3 : "1 cl",
            med4 : "2 cl"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "3/4 oz",
            med3 : "1/2 oz",
            med4 : "1/2 oz"
        },
        tipoDeVaso : "Rocks",
        tipoDeHielo : "Crushed",
        metodo : "Build, Churn and Float",
        decoracion : "Lemon Wedge and 2 Blackberries"
    },
    {
        nombre : "Mojito",       //------MOJITO COCKTAIL-----
        id : "27",
        principal : "Ron",
        ingredientes : {
            ing1 : "Light Rum",
            ing2 : "Lime Wedges",
            ing3 : "Sugar Syrup",
            ing4 : "Mint Leaves",
            ing5 : "Soda"
        },
        medidasCl : {
            med1 : "6 cl",
            med2 : "4 wedges",
            med3 : "2 cl",
            med4 : "8 - 12 leaves",
            med5 : "Fill"
        },
        medidasOz : {
            med1 : "2 oz",
            med2 : "4 Wedges",
            med3 : "1/2 oz",
            med4 : "8 - 12 Leaves",
            med5 : "Fill"
        },
        tipoDeVaso : "Highball",
        tipoDeHielo : "Crushed",
        metodo : "Muddle, Bash, Build and Churn",
        decoracion : "Mint Sprig"
    },
    {
        nombre : "Mint Julep",       //------MINT JULEP COCKTAIL-----
        id : "28",
        principal : "Bourbon",
        ingredientes : {
            ing1 : "Angostura Soaked Sugar Cube",
            ing2 : "Barspoon of Soda",
            ing3 : "Mint leaves",
            ing4 : "Bourbon"
        },
        medidasCl : {
            med1 : "1 Cube",
            med2 : "1 Barspoon",
            med3 : "8 - 12 Leaves",
            med4 : "6 cl"
        },
        medidasOz : {
            med1 : "1 Cube",
            med2 : "1 Barspoon",
            med3 : "8 - 12 Leaves",
            med4 : "2 oz"
        },
        tipoDeVaso : "Rocks",
        tipoDeHielo : "Crushed",
        metodo : "Soak, Muddle, Bash, Build and Churn",
        decoracion : "Mint Sprig"
    },
    {
        nombre : "Gin Basil Smash",       //------GIN BASIL SMASH COCKTAIL-----
        id : "29",
        principal : "Gin",
        ingredientes : {
            ing1 : "Basil",
            ing2 : "Gin",
            ing3 : "Fresh Lemon Juice",
            ing4 : "Sugar Syrup"
        },
        medidasCl : {
            med1 : "8 - 12 Leaves",
            med2 : "6 cl",
            med3 : "3 cl",
            med4 : "1,5 cl"
        },
        medidasOz : {
            med1 : "8 - 12 Leaves",
            med2 : "2 oz",
            med3 : "1 oz",
            med4 : "1/2 oz"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Shake and Fine Strain",
        decoracion : "Basil Leaf"
    },
    {
        nombre : "Southside",       //------SOUTHSIDE COCKTAIL-----
        id : "30",
        principal : "Gin",
        ingredientes : {
            ing1 : "Mint Leaves",
            ing2 : "Gin",
            ing3 : "Fresh Lime Juice",
            ing4 : "Sugar Syrup"
        },
        medidasCl : {
            med1 : "8 - 12 Leaves",
            med2 : "6 cl",
            med3 : "3 cl",
            med4 : "1,5 cl"
        },
        medidasOz : {
            med1 : "8 - 12 Leaves",
            med2 : "2 oz",
            med3 : "1 oz",
            med4 : "1/2 oz"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Shake and Fine Strain",
        decoracion : "Single Mint Leaf"
    },
    {
        nombre : "Bellini",       //------BELLINII COCKTAIL-----
        id : " 31",
        principal : "Otros",
        ingredientes : {
            ing1 : "Peach Puree",
            ing2 : "Peachtree",
            ing3 : "Prosecco"
        },
        medidasCl : {
            med1 : "1 cl",
            med2 : "1 cl",
            med3 : "Top"
        },
        medidasOz : {
            med1 : "1/2 oz",
            med2 : "1/2 oz",
            med3 : "Top"
        },
        tipoDeVaso : "Champagne Flute",
        tipoDeHielo : "None",
        metodo : "Build and Stir Gently",
        decoracion : "None"
    },
    {
        nombre : "Old Fashioned",       //------OLD FASHIONED COCKTAIL-----
        id : "32",
        principal : "Bourbon",
        ingredientes : {
            ing1 : "Angostura Bitters",
            ing2 : "Bourbon",
            ing3 : "Sugar Syrup"
        },
        medidasCl : {
            med1 : "2 Dashes",
            med2 : "6 cl",
            med3 : "1,5 cl"
        },
        medidasOz : {
            med1 : "2 Dashes",
            med2 : "2 oz",
            med3 : "1/2 oz"
        },
        tipoDeVaso : "Rocks",
        tipoDeHielo : "Cubed",
        metodo : "Build and Stir",
        decoracion : "Orange Zest"
    },
    {
        nombre : "Dark and Stormy",       //------DARK AND STORMY COCKTAIL-----
        id : "33",
        principal : "Ron",
        ingredientes : {
            ing1 : "Fresh Lime Juice",
            ing2 : "Ginger Beer",
            ing3 : "Goslings Black Rum"
        },
        medidasCl : {
            med1 : "2 cl",
            med2 : "Fill",
            med3 : "4 cl"
        },
        medidasOz : {
            med1 : "3/4 oz",
            med2 : "Fill",
            med3 : "1 1/2 oz"
        },
        tipoDeVaso : "Highball",
        tipoDeHielo : "Cubed",
        metodo : "Build and Float",
        decoracion : "Lime Wedge"
    },
    {
        nombre : "Hemingway Daiquiri",       //------HEMINGWAY DAIQUIRI COCKTAIL-----
        id : "34",
        principal : "Ron",
        ingredientes : {
            ing1 : "Light Rum",
            ing2 : "Maraschino",
            ing3 : "Fresh Lime Juice",
            ing4 : "Grapefruit Juice"
        },
        medidasCl : {
            med1 : "5 lc",
            med2 : "1 cl",
            med3 : "2 cl",
            med4 : "2 cl"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "1/4 oz",
            med3 : "3/4 oz",
            med4 : "3/4 oz"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Shake and Fine Strain",
        decoracion : "Cherry"
    },
    {
        nombre : "Aviation",       //------AVIATION COCKTAIL-----
        id : "35",
        principal : "Gin",
        ingredientes : {
            ing1 : "Gin",
            ing2 : "Maraschino",
            ing3 : "Fresh Lemon Juice",
            ing4 : "Sugar Syrup"
        },
        medidasCl : {
            med1 : "5 lc",
            med2 : "1 cl",
            med3 : "3 cl",
            med4 : "2 cl"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "1/4 oz",
            med3 : "1 oz",
            med4 : "3/4 oz"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Shake and Fine Strain",
        decoracion : "Single Mint Leaf"
    },
    {
        nombre : "Negroni",       //------NEGRONI COCKTAIL-----
        id : "36",
        principal : "Gin",
        ingredientes : {
            ing1 : "Gin",
            ing2 : "Sweet Vermouth",
            ing3 : "Campari"
        },
        medidasCl : {
            med1 : "3 cl",
            med2 : "3 cl",
            med3 : "3 cl"
        },
        medidasOz : {
            med1 : "1 oz",
            med2 : "1 oz",
            med3 : "1 oz"
        },
        tipoDeVaso : "Rocks",
        tipoDeHielo : "Cubed",
        metodo : "Roll or Build and Stir",
        decoracion : "Orange Zest"
    },
    {
        nombre : "Boulevardier",       //------BOULEVARDIER COCKTAIL-----
        id : "37",
        principal : "Bourbon",
        ingredientes : {
            ing1 : "Bourbon o Rye",
            ing2 : "Sweet Vermouth",
            ing3 : "Campari"
        },
        medidasCl : {
            med1 : "3 cl",
            med2 : "3 cl",
            med3 : "3 cl"
        },
        medidasOz : {
            med1 : "1 oz",
            med2 : "1 oz",
            med3 : "1 oz"
        },
        tipoDeVaso : "Rocks",
        tipoDeHielo : "Cubed",
        metodo : "Roll or Build and Stir",
        decoracion : "Orange Zest"
    },
    {
        nombre : "Aperol Spritz",       //------APEROL SPRITZ COCKTAIL-----
        id : "38",
        principal : "Otros",
        ingredientes : {
            ing1 : "Prosecco",
            ing2 : "Aperol",
            ing3 : "Soda"
        },
        medidasCl : {
            med1 : "6 cl",
            med2 : "4 cl",
            med3 : "2 cl"
        },
        medidasOz : {
            med1 : "2 oz",
            med2 : "1 1/2 oz",
            med3 : "3/4 oz"
        },
        tipoDeVaso : "Wine Glass",
        tipoDeHielo : "Cubed",
        metodo : "Build",
        decoracion : "Orange Zest"
    },
    {
        nombre : "Mimosa",       //------MIMOSA COCKTAIL-----
        id : "39",
        principal : "Otros",
        ingredientes : {
            ing1 : "Orange Juice",
            ing2 : "Champagne"
        },
        medidasCl : {
            med1 : "1 part",
            med2 : "1 part"
        },
        medidasOz : {
            med1 : "1 part",
            med2 : "1 part"
        },
        tipoDeVaso : "Champagne Flute",
        tipoDeHielo : "None",
        metodo : "Build",
        decoracion : "None"
    },
    {
        nombre : "Expresso Martini",       //------EXPRESSO MARTINI COCKTAIL-----
        id : "40",
        principal : "Vodka",
        ingredientes : {
            ing1 : "Vodka",
            ing2 : "Kahlua",
            ing3 : "Espresso",
            ing4 : "Sugar Syrup"
        },
        medidasCl : {
            med1 : "4 lc",
            med2 : "2 cl",
            med3 : "1 Espresso",
            med4 : "1 cl"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "3/4 oz",
            med3 : "1 Espresso",
            med4 : "1/4 oz"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Shake and Fine Strain",
        decoracion : "3 Coffee Beans"
    },
    {
        nombre : "Brandy Alexander",       //------BRANDY ALEXANDER COCKTAIL-----
        id : "41",
        principal : "Otros",
        ingredientes : {
            ing1 : "Brandy",
            ing2 : "Dark Cacao Liqueur",
            ing3 : "Milk"
        },
        medidasCl : {
            med1 : "4 cl",
            med2 : "2 cl",
            med3 : "4 cl"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "3/4 oz",
            med3 : "1 1/2 oz"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Shake and Fine Strain",
        decoracion : "Grated Nutmeg"
    },
    {
        nombre : "Kir Royal",       //------KIR ROYAL COCKTAIL-----
        principal : "Otros",
        id : "42",
        ingredientes : {
            ing1 : "Cr??me de Cassis",
            ing2 : "Champagne"
        },
        medidasCl : {
            med1 : "2 cl",
            med2 : "Fill"
        },
        medidasOz : {
            med1 : "3/4 oz",
            med2 : "Fill"
        },
        tipoDeVaso : "Champagne Flute",
        tipoDeHielo : "None",
        metodo : "Build",
        decoracion : "None"
    },
    {
        nombre : "Class Champagne",       //------CLASSIC CHAMPAGNE COCKTAIL-----
        id : "43",
        principal : "Otros",
        ingredientes : {
            ing1 : "Angostura Soaked Sugar Cube",
            ing2 : "Cognac",
            ing3 : "Champagne"
        },
        medidasCl : {
            med1 : "1 Cube",
            med2 : "2 cl",
            med3 : "Fill"
        },
        medidasOz : {
            med1 : "1 Cube",
            med2 : "3/4 oz",
            med3 : "Fill"
        },
        tipoDeVaso : "Champagne Flute",
        tipoDeHielo : "None",
        metodo : "Soak and Build",
        decoracion : "None"
    },
    {
        nombre : "Apple Martini ",       //------APPLE  MARTINI COCKTAIL-----
        id : "44",
        principal : "Vodka",
        ingredientes : {
            ing1 : "Vodka",
            ing2 : "Apple Liqueur",
            ing3 : "Fresh Lemon Juice",
            ing4 : "Simple Syrup"
        },
        medidasCl : {
            med1 : "4 cl",
            med2 : "2 cl",
            med3 : "3 cl",
            med4 : "1 cl"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "3/4 oz",
            med3 : "1 oz",
            med4 : "1/2 oz"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Shake and Fine Strain",
        decoracion : "Apple Leaf"
    },
    {
        nombre : "Gimlet",       //------GIMLET COCKTAIL-----
        id : "45",
        principal : "Gin",
        ingredientes : {
            ing1 : "Gin",
            ing2 : "Lime Cordial"
        },
        medidasCl : {
            med1 : "6 cl",
            med2 : "1 cl"
        },
        medidasOz : {
            med1 : "2 oz",
            med2 : "1/2 oz"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Stir and Julep Strain",
        decoracion : "Lime Zest"
    },
    {
        nombre : "Caipirinha",       //------CAIPIRINHA COCKTAIL-----
        id : "46",
        principal : "Otros",
        ingredientes : {
            ing1 : "Lime Wedges",
            ing2 : "Sugar Syrup",
            ing3 : "Cacha??a"
        },
        medidasCl : {
            med1 : "6 Wedges",
            med2 : "2 cl",
            med3 : "6 cl"
        },
        medidasOz : {
            med1 : "6 Wedges",
            med2 : "3/4 oz",
            med3 : "2 oz"
        },
        tipoDeVaso : "Rocks",
        tipoDeHielo : "Crushed",
        metodo : "Muddle, Build and Churn",
        decoracion : "Lime Wedge"
    },
    {
        nombre : "B52",       //------B52 COCKTAIL-----
        id : "47",
        principal : "Otros",
        ingredientes : {
            ing1 : "Kahlua",
            ing2 : "Bailey??s",
            ing3 : "Cointreau"
        },
        medidasCl : {
            med1 : "2 cl",
            med2 : "2 cl",
            med3 : "2 cl"
        },
        medidasOz : {
            med1 : "1/2 oz",
            med2 : "1/2 oz",
            med3 : "1/2 oz"
        },
        tipoDeVaso : "Shooter",
        tipoDeHielo : "None",
        metodo : "Layer in Order",
        decoracion : "None"
    },
    {
        nombre : "White Lady",       //------WHITE LADY COCKTAIL-----
        id : "48",
        principal : "Gin",
        ingredientes : {
            ing1 : "Gin",
            ing2 : "Cointreau",
            ing3 : "Fresh Lemon Juice",
            ing4 : "Simple Syrup"
        },
        medidasCl : {
            med1 : "4cl",
            med2 : "2 cl",
            med3 : "3 cl",
            med4 : "1 cl"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "3/4 oz",
            med3 : "1 oz",
            med4  : "1/2 oz"
        },
        tipoDeVaso : "Chilled Martini / Coupe",
        tipoDeHielo : "None",
        metodo : "Shake and Fine Strain",
        decoracion : "Lemon Zest"
    },
    {
        nombre : "Mai Tai",       //------MAI TAI COCKTAIL-----
        id : "49",
        principal : "Ron",
        ingredientes : {
            ing1 : "Dark Rum",
            ing2 : "Cointreau",
            ing3 : "Fresh Lime Juice",
            ing4 : "Orgeat Syrup",
            ing5 : "Overproof Rum"
        },
        medidasCl : {
            med1 : "4 cles",
            med2 : "1 cl",
            med3 : "2 cl",
            med4 : "1 cl",
            med5 : "1 cl"
        },
        medidasOz : {
            med1 : "1 1/2 oz",
            med2 : "1/2 oz",
            med3 : "3/4 oz",
            med4 : "1/4 oz",
            med5 : "1/4 oz"
        },
        tipoDeVaso : "Tiki Mug",
        tipoDeHielo : "Cubed",
        metodo : "Shake, Strain and Float",
        decoracion : "Mint Sprig"
    },
    {
        nombre : "Grasshopper",       //------GRASSHOPPER COCKTAIL-----
        id : "50",
        principal : "Otros",
        ingredientes : { 
            ing1 : "Cr??me de Menthe",
            ing2 : "White Cacao Liqueur",
            ing3 : "Milk"
        },
        medidasCl : {
            med1 : "3 cl",
            med2 : "3 cl",
            med3 : "4 cl"
        },
        medidasOz : {
            med1 : "1 oz",
            med2 : "1 oz",
            med3 : "1 1/2 oz"
        },
        tipoDeVaso : "Shooter",
        tipoDeHielo : "None",
        metodo : "Shake and Fine Strain",
        decoracion : "None"
    },
]

const form = document.querySelector(".buscador");
const search = document.getElementById("search");
const input = document.getElementById("input");
const dropdown = document.getElementById("dropdown");
const cards = document.querySelector(".cards");
const coctel = listadoCocteles.nombre;
const limpiar = document.querySelector(".limpiar");


/*---Filtrado de c??cteles en funci??n del valor introducido en el input---*/


form.addEventListener("submit", e => {
    
    e.preventDefault();
    
    if(input.value.length == 0) {
        alert("Por favor, introduce un destilado");
    }
    else if(input.value.toLowerCase() == "gin") {
        const filtradoGin = listadoCocteles.filter(function(coctel){
            return coctel.principal === "Gin";
        })

        filtradoGin.forEach(item => createCoctelCard(item));

    }
    else if(input.value.toLowerCase() == "ron") {
        const filtradoRon = listadoCocteles.filter(function(coctel){
            return coctel.principal === "Ron";
        })

        filtradoRon.forEach(item => createCoctelCard(item));
    }
     else if(input.value.toLowerCase() == "tequila") {
        const filtradoTequila = listadoCocteles.filter(function(coctel){
            return coctel.principal === "Tequila";
        })

        filtradoTequila.forEach(item => createCoctelCard(item));
    }
     else if(input.value.toLowerCase() == "vodka") {
        const filtradoVodka = listadoCocteles.filter(function(coctel){
            return coctel.principal === "Vodka";
        })

        filtradoVodka.forEach(item => createCoctelCard(item));
    }
     else if(input.value.toLowerCase() == "whisky") {
        const filtradoWhisky = listadoCocteles.filter(function(coctel){
            return coctel.principal === "Whisky";
        })

        filtradoWhisky.forEach(item => createCoctelCard(item));
    }
     else if(input.value.toLowerCase() == "otros") {
        const filtradoOtros = listadoCocteles.filter(function(coctel){
            return coctel.principal === "Otros";
        })

        filtradoOtros.forEach(item => createCoctelCard(item));
    }
    else {
        alert("Por favor, introduce una de estas opciones v??lidas: Gin, Ron, Tequila, Vodka, Whisky u Otros.")
    }
    
})

/*---Filtrado de c??cteles en funci??n del valor seleccionado en el dropdown---*/

dropdown.addEventListener("change", e => {
    

    if(dropdown.value == 1) {
        
        const filtradoBuild = listadoCocteles.filter(function(coctel){  //-------- FILTRADO M??TODO BUILD
            return coctel.metodo === "Build";
        })
        const filtradoBuildASink = listadoCocteles.filter(function(coctel){  //-------- FILTRADO M??TODO BUILD AND SINK
            return coctel.metodo === "Build and Sink";
        })
        
        const filtradoBuildAFloat = listadoCocteles.filter(function(coctel){  //-------- FILTRADO M??TODO BUILD AND FLOAT
            return coctel.metodo === "Build and Float";
        })
        
        const filtradoBuildChurnAFloat = listadoCocteles.filter(function(coctel){  //-------- FILTRADO M??TODO BUILD, CHURN AND FLOAT
            return coctel.metodo === "Build, Churn and Float";
        })
        
        const filtradoMBBC = listadoCocteles.filter(function(coctel){  //-------- FILTRADO M??TODO MUDDLE, BASH, BUILD AND CHURN
            return coctel.metodo === "Muddle, Bash, Build and Churn";
        })
        
        const filtradoSMBBC = listadoCocteles.filter(function(coctel){  //-------- FILTRADO M??TODO SOAK, MUDDLE, BASH, BUILD AND CHURN
            return coctel.metodo === "Soak, Muddle, Bash, Build and Churn";
        })
        
        const filtradoBuildAStirGently = listadoCocteles.filter(function(coctel){  //-------- FILTRADO M??TODO BUILD AND STIR GENTLY
            return coctel.metodo === "Build and Stir Gently";
        })

        const filtradoBuildAStir = listadoCocteles.filter(function(coctel){  //-------- FILTRADO M??TODO BUILD AND STIR 
            return coctel.metodo === "Build and Stir";
        })
        
        const filtradoRollOrBuildAStir = listadoCocteles.filter(function(coctel){  //-------- FILTRADO M??TODO ROLL OR BUILD AND STIR
            return coctel.metodo === "Roll or Build and Stir";
        })
        
        const filtradoSoakABuild = listadoCocteles.filter(function(coctel){  //-------- FILTRADO M??TODO SOAK AND BUILD
            return coctel.metodo === "Soak and Build";
        })
        
        const filtradoMuddleBuildAChurn = listadoCocteles.filter(function(coctel){  //-------- FILTRADO M??TODO MUDDLE, BUILD AND CHURN
            return coctel.metodo === "Muddle, Build and Churn";
        })


        for(let i=0; i< filtradoBuild.length; i++){
            createCoctelCard(filtradoBuild[i]);
        }
        for(let i=0; i< filtradoBuildASink.length; i++){
            createCoctelCard(filtradoBuildASink[i]);
        }
        for(let i=0; i< filtradoBuildAFloat.length; i++){
            createCoctelCard(filtradoBuildAFloat[i]);
        }
        for(let i=0; i< filtradoBuildChurnAFloat.length; i++){
            createCoctelCard(filtradoBuildChurnAFloat[i]);
        }
        for(let i=0; i< filtradoMBBC.length; i++){
            createCoctelCard(filtradoMBBC[i]);
        }
        for(let i=0; i< filtradoSMBBC.length; i++){
            createCoctelCard(filtradoSMBBC[i]);
        }
        for(let i=0; i< filtradoBuildAStir.length; i++){
            createCoctelCard(filtradoBuildAStir[i]);
        }
        for(let i=0; i< filtradoBuildAStirGently.length; i++){
            createCoctelCard(filtradoBuildAStirGently[i]);
        }
        for(let i=0; i< filtradoRollOrBuildAStir.length; i++){
            createCoctelCard(filtradoRollOrBuildAStir[i]);
        }
        for(let i=0; i< filtradoSoakABuild.length; i++){
            createCoctelCard(filtradoSoakABuild[i]);
        }
        for(let i=0; i< filtradoMuddleBuildAChurn.length; i++){
            createCoctelCard(filtradoMuddleBuildAChurn[i]);
        }
       
    }
    else if(dropdown.value == 2) {
        
        const filtradoShakeAStrain = listadoCocteles.filter(function(coctel){  //-------- FILTRADO M??TODO SHAKE AND STRAIN
            return coctel.metodo === "Shake and Strain";
        })
        const filtradoShakeAFineStrain = listadoCocteles.filter(function(coctel){  //-------- FILTRADO M??TODO SHAKE AND FINE STRAIN
            return coctel.metodo === "Shake and Fine Strain";
        })
        
        const filtradoDryShakeShakeAStrain = listadoCocteles.filter(function(coctel){  //-------- FILTRADO M??TODO DRY SHAKE, SHAKE AND STRAIN
            return coctel.metodo === "Dry Shake, Shake and Strain";
        })
        
        const filtradoShakeStrainAFloat = listadoCocteles.filter(function(coctel){  //-------- FILTRADO M??TODO SHAKE, STRAIN AND FLOAT
            return coctel.metodo === "Shake, Strain and Float";
        })


        for(let i=0; i< filtradoShakeAStrain.length; i++){
            createCoctelCard(filtradoShakeAStrain[i]);
        }
        for(let i=0; i< filtradoShakeAFineStrain.length; i++){
            createCoctelCard(filtradoShakeAFineStrain[i]);
        }
        for(let i=0; i< filtradoDryShakeShakeAStrain.length; i++){
            createCoctelCard(filtradoDryShakeShakeAStrain[i]);
        }
        for(let i=0; i< filtradoShakeStrainAFloat.length; i++){
            createCoctelCard(filtradoShakeStrainAFloat[i]);
        }

    }
     else if(dropdown.value == 3) {
        const filtradoStirAndJS = listadoCocteles.filter(function(coctel){  //-------- FILTRADO M??TODO STIR AND JULEP STRAIN
            return coctel.metodo === "Stir and Julep Strain";
        })

        for(let i=0; i< filtradoStirAndJS.length; i++){
            createCoctelCard(filtradoStirAndJS[i]);
        }
    }
     else if(dropdown.value == 4) {
        const filtradoLayerInOrder = listadoCocteles.filter(function(coctel){  //-------- FILTRADO M??TODO LAYER IN ORDER
            return coctel.metodo === "Layer in Order";
        })
    

        for(let i=0; i< filtradoLayerInOrder.length; i++){
            
            createCoctelCard(filtradoLayerInOrder[i]);
        }   
    }
})

/*----------CREACI??N DE LAS CARTAS DE LOS C??CTELES----------*/

function createCoctelCard(coctel) {
    const cardHTML =`
    <div class="container-card">
        <h2 class="nombre">${coctel.nombre}</h2>
        <h3>Ingredientes</h3>   
        <ul class="ingredientes">
            <li>
                <span class="cantidad">${coctel.medidasCl.med1}</span>
                <span class="ingrediente">${coctel.ingredientes.ing1}</span>
            </li>
            <li>
                <span class="cantidad">${coctel.medidasCl.med2}</span>
                <span class="ingrediente">${coctel.ingredientes.ing2}</span>
            </li>
            <li>
                <span class="cantidad">${coctel.medidasCl.med3}</span>
                <span class="ingrediente">${coctel.ingredientes.ing3}</span>
            </li>
            <li>
                <span class="cantidad">${coctel.medidasCl.med4}</span>
                <span class="ingrediente4">${coctel.ingredientes.ing4}</span>
            </li>
            <li>
                <span class="cantidad">${coctel.medidasCl.med5}</span>
                <span class="ingrediente5">${coctel.ingredientes.ing5}</span>
            </li>
        </ul>
        <div class="informacion-coctel">
            <h3>M??todo de preparaci??n</h3> 
            <p>${coctel.metodo}</p>
            <h3>Tipo de vaso</h3> 
            <p>${coctel.tipoDeVaso}</p>
            <h3>Tipo de hielo</h3> 
            <p>${coctel.tipoDeHielo}</p>
            <h3>Decoraci??n</h3> 
            <p>${coctel.decoracion}</p>
        </div>
    </div>
    
    `
    cards.innerHTML += cardHTML;

}

/*-------BOT??N DE LA PAPELERA PARA BORRAR CONTENIDO DE LAS CARDS*/ 

limpiar.addEventListener("click", e=> {
    e.preventDefault();

    cards.innerHTML = "";
    input.value = "";
})