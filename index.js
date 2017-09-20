const app = "I don't do much."

function bumpCounter(){
  let counter = 0;
  return {
    addBump: () =>{
      counter+=1
    },
    getBumps: () => {
      return counter
    }
  }
}

function createAnimal(animalType){
  return (deadlyDevice) => {
    return {
      animalType,
      deadlyDevice
    }
  }
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')
