'use strict'
const paragraph = document.getElementById('rending')
let Ingredients=[];
let Preparation=[];


function Recipes(userRecipes, userStory, userServing, userTime, userPerfectBreak, userPerfectLunch, userPerfectDinner,userImage) {
    this.userRecipes = userRecipes;
    this.userStory = userStory;
    this.userServing = userServing;
    this.userTime = userTime;
    this.userPerfectBreak = userPerfectBreak;
    this.userPerfectLunch = userPerfectLunch;
    this.userPerfectDinner = userPerfectDinner;
    this.userIngred=Ingredients;
    this.userPreparation=Preparation;
    this.userImage=userImage;
    Recipes.meals.push(this)
    save()
    
}
Recipes.meals = []
console.log(Recipes.userStory)
 function render () {
//     for(let i =0 ;i<Recipes.meals.length;i++){
//      const container = document.getElementById('headerm')

//  let nameOfRecipe = document.createElement('p');
//  container.appendChild(nameOfRecipe);
//  nameOfRecipe.textContent=Recipes.meals[i].userRecipes

// const ahmad=document.getElementById('servings')
//  let numberOfServing = document.createElement('p');
//  ahmad.appendChild(numberOfServing);
//  numberOfServing.textContent = `For ${Recipes.meals[i].userServing} People`;
//  const serving=document.getElementById('time')

//  let timeOfRecipe = document.createElement('p');
//  serving.appendChild(timeOfRecipe);
//  timeOfRecipe.textContent = `Cooking Time: ${Recipes.meals[i].userTime} Min`;
//  const story=document.getElementById('story')
 
//  let StoryText = document.createElement('p');
//  story.appendChild(StoryText);
//  StoryText.textContent = Recipes.meals[i].userStory;
//  const ingre=document.getElementById('ingre')

//  let Text = document.createElement('p');
// Text.setAttribute('id','textOfingred')
// ingre.appendChild(Text);
//  Text.textContent = "Ingrediants";
//  const ingreof=document.getElementById('ingreof')

//  let IngredText = document.createElement('ul');
//  ingreof.appendChild(IngredText);
//  for(let j=0;j<Ingredients.length;j++){
//  let li=document.createElement('li');
//  IngredText.appendChild(li)
//  li.textContent = Recipes.meals[i].userIngred[j];
//  }
//  const prepr=document.getElementById('prepr')

//  let prepText = document.createElement('p');
//  prepr.appendChild(prepText);
//  prepText.textContent = "Prepeartion";
//  const prepof=document.getElementById('prepof')

//  let PrepText = document.createElement('ol');
//  prepof.appendChild(PrepText);
//  for(let s=0;s<Preparation.length;s++){
//  let li=document.createElement('li');
//  PrepText.appendChild(li)
//  li.textContent = Recipes.meals[i].userPreparation[s];
//  }
//  while(Recipes.meals[i].userPerfectBreak===true ||Recipes.meals[i].userPerfectLunch===true||Recipes.meals[i].userPerfectDinner===true){
//  if(Recipes.meals[i].userPerfectBreak===true){
//  const prefer=document.getElementById('prefer')
//  let fectBreak = document.createElement('p');
//  prefer.appendChild(fectBreak);
//  fectBreak.textContent = 'Breakfast, ';
//  Recipes.meals[i].userPerfectBreak=false
//  }else if(Recipes.meals[i].userPerfectLunch===true){
//  const prefer=document.getElementById('prefer')
//  let Lunch = document.createElement('p');
//  prefer.appendChild(Lunch);
//  Lunch.textContent = 'Lunch, ';
//  Recipes.meals[i].userPerfectLunch=false
//  }else if(Recipes.meals[i].userPerfectDinner===true){
//  const prefer=document.getElementById('prefer')
//  let Dinner = document.createElement('p');
//  prefer.appendChild(Dinner);
//  Dinner.textContent = 'Dinner';
//  Recipes.meals[i].userPerfectDinner=false
 
//  }}
//  const imageof=document.getElementById('imageof')
//  let image = document.createElement('img');
//  imageof.appendChild(image);
//  image.setAttribute("src",`${Recipes.meals[i].userImage}`)
 










    const container= document.getElementById('showing')
    // container.innerHTML=` <p id="textIngred"></p>
    // <p id="textPrepar"></p>
    // `
   for(let i =0 ;i<Recipes.meals.length;i++){
       let dev = document.createElement('div')
    let nameOfRecipe = document.createElement('p');//done
    nameOfRecipe.setAttribute('id','header1')
    let StoryText = document.createElement('p');//done
    StoryText.setAttribute('id','storyOf')
    dev.appendChild(StoryText);
    StoryText.textContent = Recipes.meals[i].userStory;

    container.appendChild(dev);
    dev.appendChild(nameOfRecipe)
console.log(Recipes.meals)
    nameOfRecipe.textContent=Recipes.meals[i].userRecipes
    let numberOfServing = document.createElement('p');//done
    numberOfServing.setAttribute('id','servingaSize')
    dev.appendChild(numberOfServing);
    numberOfServing.textContent = `For ${Recipes.meals[i].userServing} Serving`;

    let timeOfRecipe = document.createElement('p');//done
   timeOfRecipe.setAttribute('id','timeOf')
    dev.appendChild(timeOfRecipe);
    timeOfRecipe.textContent = `Cooking Time: ${Recipes.meals[i].userTime} Min`;
    while(Recipes.meals[i].userPerfectBreak===true ||Recipes.meals[i].userPerfectLunch===true||Recipes.meals[i].userPerfectDinner===true){
        if(Recipes.meals[i].userPerfectBreak===true){
        let fectBreak = document.createElement('p');//done
        fectBreak.setAttribute('id','BREAKperfect')
        dev.appendChild(fectBreak);
        fectBreak.textContent = 'Breakfast, ';
        Recipes.meals[i].userPerfectBreak=false
        }else if(Recipes.meals[i].userPerfectLunch===true){
        let Lunch = document.createElement('p');//done
        Lunch.setAttribute('id','LUNCHperfect')
        dev.appendChild(Lunch);
        Lunch.textContent = 'Lunch, ';
        Recipes.meals[i].userPerfectLunch=false
        }else if(Recipes.meals[i].userPerfectDinner===true){
        let Dinner = document.createElement('p');//done
        Dinner.setAttribute('id','DINNERperfect')
        dev.appendChild(Dinner);
        Dinner.textContent = 'Dinner';
        Recipes.meals[i].userPerfectDinner=false
        }











    // let StoryText = document.createElement('p');//done
    // StoryText.setAttribute('id','storyOf')
    // dev.appendChild(StoryText);
    // StoryText.textContent = Recipes.meals[i].userStory;

    let Text = document.createElement('p');//done
   Text.setAttribute('id','textOfingred')
    dev.appendChild(Text);
    Text.textContent = "Ingrediants";
    
    // for (let i = 0; i <Ingredients.length; i++) {//done
    //     let listIngred =document.createElement('p')
    //  //   listPrepar += Recipes.meals[i].userPreparation[i] + "<br>"+ "<br>";
    //  listIngred.setAttribute('id','textINGRD')
    //    dev.appendChild(listIngred);
    //    listIngred.textContent=Recipes.meals[i].userIngred[i];
 
     
     let IngredText = document.createElement('ul');
    IngredText.setAttribute('id','ingerdUL')
    dev.appendChild(IngredText);
    for(let j=0;j<Ingredients.length;j++){
    let li=document.createElement('li');
    // li.setAttribute('class','ingerdli')
    IngredText.appendChild(li)
    li.textContent = Recipes.meals[i].userIngred[j];
    }

   

    let prepText = document.createElement('p');//done
    prepText.setAttribute('id','textOfprep')
    dev.appendChild(prepText);
    prepText.textContent = "Prepeartion";

    let PrepText = document.createElement('ul');
   dev.appendChild(PrepText);
    for(let n=0;n<Preparation.length;n++){
    let li=document.createElement('li');
    PrepText.appendChild(li)
    li.textContent = Recipes.meals[i].userPreparation[n];
    }

    // let listPrepar = "";
    
    // for (let j = 0; j< Preparation.length; j++) {//done
    //    let listPrepar =document.createElement('p')
    // //   listPrepar += Recipes.meals[i].userPreparation[i] + "<br>"+ "<br>";
    // listPrepar.setAttribute('id','textPREPARE')
    //   dev.appendChild(listPrepar);
    //   listPrepar.textContent=Recipes.meals[j].userPreparation[];


    // document.getElementById("textPrepar").innerHTML = listPrepar;
    
    
    
    // while(Recipes.meals[i].userPerfectBreak===true ||Recipes.meals[i].userPerfectLunch===true||Recipes.meals[i].userPerfectDinner===true){
    // if(Recipes.meals[i].userPerfectBreak===true){
    // let fectBreak = document.createElement('p');//done
    // fectBreak.setAttribute('id','BREAKperfect')
    // dev.appendChild(fectBreak);
    // fectBreak.textContent = 'Breakfast, ';
    // Recipes.meals[i].userPerfectBreak=false
    // }else if(Recipes.meals[i].userPerfectLunch===true){
    // let Lunch = document.createElement('p');//done
    // Lunch.setAttribute('id','LUNCHperfect')
    // dev.appendChild(Lunch);
    // Lunch.textContent = 'Lunch, ';
    // Recipes.meals[i].userPerfectLunch=false
    // }else if(Recipes.meals[i].userPerfectDinner===true){
    // let Dinner = document.createElement('p');//done
    // Dinner.setAttribute('id','DINNERperfect')
    // dev.appendChild(Dinner);
    // Dinner.textContent = 'Dinner';
    // Recipes.meals[i].userPerfectDinner=false
    // }
    }
    
    let image = document.createElement('img');
    container.appendChild(image);
    image.setAttribute('id',"imageRender")
    image.setAttribute("width", "100%")
    image.setAttribute("height", "100%")
    image.setAttribute("src",`${Recipes.meals[i].userImage}`)
    


    // let imageHead = document.createElement('img');
    // dev.appendChild(imageHead);
    // imageHead.setAttribute('id',"imageHeader")
    // imageHead.src= "https://i.ytimg.com/vi/omKbRsjNwV0/maxresdefault.jpg"
    
   
    }
}

    console.log(Recipes.userStory)



    const form = document.getElementById('dish')
    form.addEventListener('onclick', myFunction)
    function myFunction() {
        event.preventDefault()
        var Ingred = document.getElementById("myBtn").value;
        console.log(Ingred);
        Ingredients.push(Ingred)
        document.getElementById("myBtn").value=""
      }
    form.addEventListener('onclick', preFunction)
    function preFunction() {
        event.preventDefault()
        var preper = document.getElementById("prep").value;
        console.log(preper);
        Preparation.push(preper)
        document.getElementById("prep").value=""
       
       
      }
    //    save()


form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    let Recipe = event.target.nameField.value
    let Story = event.target.recipeStory.value
    let serving = event.target.serving.value
    let time = event.target.cookTime.value
    let perfectBreak = event.target.breakfast.checked
    let perfectLunch = event.target.lunch.checked
    let perfectDinner = event.target.dinner.checked
    
    let evenImage=event.target.recipeImage.value
    var newRecipe = new Recipes(Recipe, Story, serving, time, perfectBreak, perfectLunch, perfectDinner,evenImage)
    console.log(newRecipe );
    
  
  render()
//    save()
    form.removeEventListener('submit', handleSubmit)
}
// render()
// form.addEventListener('click', add)
// function shayFunction() {
//     // const dev = document.getElementById('showing')
//     document.getElementById('showing').style.background = "#A69E97 ";
//     document.getElementById("showing").style.backgroundSize = "100% 100%";
//     document.getElementById("showing").style.height="500px";
//     document.getElementById("showing").style.width="100%";
//     // document.getElementById("textPREPARE").style.overflowY="scroll ";
//     // document.getElementById("textIngred").style.overflowY="scroll "

//   }

function shayFunction() {
    document.getElementById('showing');
    document.getElementById('par');
    document.getElementById('headerm');
    document.getElementById('servings');
    document.getElementById('time');
    document.getElementById('prefer');
    document.getElementById('story');
    document.getElementById('ingre');
    document.getElementById('prepr');
    document.getElementById('ingreof');
    document.getElementById('prepof');
    document.getElementById('footer');
    document.getElementById('imageof');
}

  function save() {
    let dataArray = JSON.stringify(Recipes.meals)
    console.log(typeof Recipes.meals)
    localStorage.setItem('meals', dataArray)
    console.log(typeof Recipes.meals)
    console.log(Recipes.meals)
}
function retrive() {

    let userMEAL = localStorage.getItem('meals')
    let content = JSON.parse(userMEAL)
    console.log(Recipes.meals)

    if (content != null) {
        
        Recipes.meals = content
        
    }
   
    console.log(typeof Recipes.meals)
}


// retrive()