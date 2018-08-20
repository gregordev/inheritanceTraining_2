/*
  G A M E

  Moves:
    - attack
    - heal

*/

function Me(name) {
  this.name;
  this.health = 100;
}

let monster = {
  name: 'Mountain Troll',
  health: 100
}

Me.prototype.heal = function() {
  this.health += 12;
  console.log(`
  You healed yourself 12 health points.
  Monster health: ${monster.health}
  Your health: ${this.health}
`);
monsterMove(this);
}

Me.prototype.attack = function() {
  let damage = Math.floor(Math.random() * 22) + 1;
  monster.health -= damage;
  console.log(`
    You damaged monster for ${damage} health points.
    Monster health: ${monster.health}
    Your health: ${this.health}
  `);
  if (monster.health <= 0) {
    console.log('You won');
  } else {
    monsterMove(this);
  }
  
}

function monsterMove(obj) {
  let monsterDamage = Math.floor(Math.random() * 11) + 1;
  obj.health -= monsterDamage;
  console.log(`
  Monster fight you back for ${monsterDamage} health points.
  Monster health: ${monster.health}
  Your health: ${obj.health}
  
  `);
  checkYourResult(me);
}

function checkYourResult(obj) {
  if (obj.health <= 0) {
    console.log('You lose!');
  }
}


console.log(`
  Type exactly given commands  |
  -----------------------------|

  To heal yourself: 
  me.heal()

  To attack monster: 
  me.attack()
`);

/*

  Here only create objects

*/

let me = new Me('Greg');


