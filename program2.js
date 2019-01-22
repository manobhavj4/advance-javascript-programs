const obj ={
player : "bobby",
experience: 100,
wizardlevel: false
}

// -------------------------------------

// const player = obj.player;
// const experience = obj.experience;
// let wizardlevel = obj.wizardlevel;
// |
// |
// |
// |
// \/

  const	{ player, experience} = obj;
  let {wizardlevel}=obj;

  

// if (experience > 90) {
// var wizardlevel = true;
// console.log("inside", wizardlevel);
// }
// console.log("outside", wizardlevel);
