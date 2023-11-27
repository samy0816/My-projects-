var randomIndex;
const randomWords = [
    "apple",
    "banana",
    "cherry",
    "dog",
    "elephant",
    "flower",
    "giraffe",
    "happy",
    "ice cream",
    "jazz",
    "kangaroo",
    "lemon",
    "mountain",
    "notebook",
    "ocean",
    "penguin",
    "quasar",
    "rainbow",
    "sunflower",
    "tiger",
    "umbrella",
    "victory",
    "waterfall",
    "xylophone",
    "zeppelin",
    "acoustic",
    "butterfly",
    "caterpillar",
    "dragonfly",
    "effervescent",
    "fantasy",
    "gargantuan",
    "hologram",
    "indigo",
    "jubilant",
    "kaleidoscope",
    "labyrinth",
    "magnificent",
    "nebula",
    "opulent",
    "paradise",
    "quixotic",
    "radiant",
    "serendipity",
    "tranquility",
    "universe",
    "velvet",
    "whimsical",
    "xanadu",
    "yonder",
    "zephyr",
  ];
  const hints = [
    "A red fruit",
    "A yellow fruit",
    "A small, round fruit",
    "A common domesticated animal",
    "A large mammal with a trunk",
    "A colorful and fragrant bloom",
    "A tall, long-necked animal",
    "Feeling joy or pleasure",
    "A frozen dessert",
    "A genre of music",
    "A hopping marsupial",
    "A sour citrus fruit",
    "A large natural elevation of the earth's surface",
    "A book with blank pages for notes",
    "A vast expanse of sea",
    "A flightless bird",
    "A celestial object emitting light",
    "A meteorological phenomenon",
    "A bright yellow flower",
    "A large cat with stripes",
    "A device to shield from rain or sun",
    "An act of defeating an opponent",
    "A cascade of falling water",
    "A musical instrument",
    "A type of airship",
    "Relating to sound or music",
    "An insect with colorful wings",
    "A larval stage of a butterfly",
    "An insect with long wings and big eyes",
    "Bubbling and fizzing",
    "An imaginative or fanciful idea",
    "Extremely large or extensive",
    "A three-dimensional image",
    "A deep blue or purple color",
    "Feeling or expressing great happiness",
    "A constantly changing pattern",
    "A complex and confusing network",
    "Very beautiful and impressive",
    "A cloud of gas and dust in space",
    "Rich and luxurious",
    "A place of extreme beauty and delight",
    "Extremely idealistic",
    "Shining or glowing brightly",
    "A fortunate or chance discovery",
    "A state of peace and quiet",
    "All that exists",
    "A soft fabric",
    "Playfully quaint or fanciful",
    "A place of idyllic beauty",
    "Distant but within sight",
    "A gentle, mild breeze",
  ];
function getRandomWord() {
    randomIndex = Math.floor(Math.random() * randomWords.length);
    return randomWords[randomIndex];
  }
  function gethint()
  {
    return hints[randomIndex];
  }
  
  const randomWord = getRandomWord();
  document.getElementById('Hint').innerHTML="Hint: "+  gethint();

document.getElementById('sbutton').addEventListener('click',function(){
    var key=document.getElementById('eword').value;
    console.log(key);

    if(key==randomWord)
    document.getElementById('result').innerHTML="Correct";
    else
    document.getElementById('result').innerHTML="Wrong!"+" Correct Answer is : "+randomWord;
})

  
  
  let str1 =randomWord;
const split_string = str1.split("");

split_string[1]='_ ';
split_string[4]='_ ';
split_string[6]='_ ';
 var finstring=split_string.join('');
 console.log(finstring);
 document.getElementById('gword').innerHTML=finstring;



  