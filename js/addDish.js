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

 function render () {


    const container= document.getElementById('showing')
  
   for(let i =0 ;i<Recipes.meals.length;i++){
       let dev = document.createElement('div')
       dev.setAttribute('id','dev1')
       let dev2= document.createElement('div')
       dev2.setAttribute('id','dev2')
    let nameOfRecipe = document.createElement('p');//done
    nameOfRecipe.setAttribute('id','header1')
    

    container.appendChild(dev);
    container.appendChild(dev2);
    dev.appendChild(nameOfRecipe)
console.log(Recipes.meals)
    nameOfRecipe.textContent=Recipes.meals[i].userRecipes
    let numberOfServing = document.createElement('p');//done
    let imageHead = document.createElement('img');
    imageHead.setAttribute('id',"imagehead")
        imageHead.src= "https://img.icons8.com/plasticine/27/000000/alarm-clock--v2.png";
        dev.appendChild(imageHead)

    let timeOfRecipe = document.createElement('p');//done
    timeOfRecipe.setAttribute('id','timeOf')
     dev.appendChild(timeOfRecipe);
     timeOfRecipe.textContent = ` ${Recipes.meals[i].userTime} Minutes`;
     while(Recipes.meals[i].userPerfectBreak===true ||Recipes.meals[i].userPerfectLunch===true||Recipes.meals[i].userPerfectDinner===true){
         if(Recipes.meals[i].userPerfectBreak===true){
         let fectBreak = document.createElement('p');//done
         fectBreak.setAttribute('id','BREAKperfect')
         dev.appendChild(fectBreak);
         fectBreak.textContent = 'Breakfast';
         Recipes.meals[i].userPerfectBreak=false
         }else if(Recipes.meals[i].userPerfectLunch===true){
         let Lunch = document.createElement('p');//done
         Lunch.setAttribute('id','LUNCHperfect')
         dev.appendChild(Lunch);
         Lunch.textContent = 'Lunch ';
         Recipes.meals[i].userPerfectLunch=false
         }else if(Recipes.meals[i].userPerfectDinner===true){
         let Dinner = document.createElement('p');//done
         Dinner.setAttribute('id','DINNERperfect')
         dev.appendChild(Dinner);
         Dinner.textContent = 'Dinner';
         Recipes.meals[i].userPerfectDinner=false
         }
     }




    let Text = document.createElement('p');//done
   Text.setAttribute('id','textOfingred')
    dev.appendChild(Text);
    Text.textContent = "Ingrediants";



    numberOfServing.setAttribute('id','servingaSize')
    dev.appendChild(numberOfServing);
    numberOfServing.textContent = `For ${Recipes.meals[i].userServing} Serving `;






    let StoryText = document.createElement('p');//done
    StoryText.setAttribute('id','storyOf')
    dev2.appendChild(StoryText);
    StoryText.textContent = Recipes.meals[i].userStory;







        let prepText = document.createElement('p');//done
        prepText.setAttribute('id','textOfprep')
        dev2.appendChild(prepText);
        prepText.textContent = "Prepeartion";
    
        let PrepText = document.createElement('ul');
        PrepText.setAttribute('id','prepUL')
       dev2.appendChild(PrepText);
        for(let n=0;n<Preparation.length;n++){
        let li=document.createElement('li');
        PrepText.appendChild(li)
        li.textContent = Recipes.meals[i].userPreparation[n];
        }



     
     let IngredText = document.createElement('ul');
    IngredText.setAttribute('id','ingerdUL')
    dev.appendChild(IngredText);
    for(let j=0;j<Ingredients.length;j++){
    let li=document.createElement('li');
    // li.setAttribute('class','ingerdli')
    IngredText.appendChild(li)
    li.textContent = Recipes.meals[i].userIngred[j];
    }

   

  

    
    
    
 
    
    
    let image = document.createElement('img');
    container.appendChild(image);
    image.setAttribute('id',"imageRender")
    image.setAttribute("width", "100%")
    image.setAttribute("height", "100%")
    image.setAttribute("src",`${Recipes.meals[i].userImage}`)
    
    
   
    }
}

    console.log(Recipes.userStory)



    

    const form = document.getElementById('dish')
    form.addEventListener('onclick', myFunction)
    function myFunction(event) {
        event.preventDefault()
        var Ingred = document.getElementById("myBtn").value;
        console.log(Ingred);
        Ingredients.push(Ingred)
        document.getElementById("myBtn").value=""
      }
    form.addEventListener('onclick', preFunction)
    function preFunction(event) {
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


retrive()