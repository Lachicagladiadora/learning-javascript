// game with objects

// en un videojuego tenemos personaje, jugador , enemigo y armas. todos pueden tener armas. 
// intancia una espada que le puedas pasar al personaje
// en la funcion atacar, recibir un objeto (ser vivo) quien recibira el danio

const player=document.getElementById("player")
const enemyElement=document.getElementById("enemy")
const character=document.getElementById("character")
const animal=document.getElementById("animal")
const mount=document.getElementById("mount")
const guns=document.getElementById("guns")
const treasure=document.getElementById("treasure")
const attackElement=document.getElementById("attack")
const addMount=document.querySelector(".addMount")
const addGuns=document.querySelector(".addGuns")
const take=document.querySelector(".take")
const playerLifeElement=document.getElementById("player-life")
const enemyLifeElement=document.getElementById("enemy-life")
const golpeElement=document.getElementById("golpe")

class SerVivo {
    constructor(name,gender,life){
        this.name=name
        this.gender=gender
        this.life=life
    }
}

class Player extends SerVivo{
    #currentLife
    constructor(name,gender,life,level,guns,mount,murders,armaSeleccionada){
        super(name,gender,life)
        this.level=level
        this.guns=guns
        this.mount=mount
        this.murders=murders
        this.#currentLife = level*0.1*life+life
        this.armaSeleccionada=armaSeleccionada        
    }


    getMaxLife() {
        return this.level*0.1*this.life+this.life
    }

    getDamage(damage){
        console.log('get damage',damage,this.currentLife)
        this.currentLife = this.currentLife<damage ? 0 : this.currentLife-damage
    }
    
    get currentLife() {
        return this.#currentLife
    }

    set currentLife(newCurrentLife){
        this.#currentLife=newCurrentLife
    }

    attack(enemy){
        const armaSelecionadaObj = this.guns.find(cur=>cur.name===this.armaSeleccionada)
        const damage = armaSelecionadaObj?armaSelecionadaObj.stroke:1
        // console.log('attack',enemy,damage)
        enemy.getDamage(damage)
    }
  }

const getMaxLifeForm = (level)=>level*2

class Enemy extends SerVivo{
    #maxLife
    constructor({name,gender,level,guns,malice}){
        super(name,gender)
        this.level=level
        this.guns=guns
        this.malice=malice
        this.#maxLife = getMaxLifeForm(level)
        this.life = getMaxLifeForm(level)
    }

    // getLifeEnemy(){
    //     return this.level*0.1*this.life+this.life
    // }

    get maxLife(){
        return this.#maxLife
    }
    
    set maxLife(newMaxLife){
        this.#maxLife=newMaxLife
    }

    getDamage(damage){
        console.log('get damage',damage,this.life)
        this.life = this.life<damage ? 0 : this.life-damage
        console.log('this.life',this.life)
    }

    attack(player){
        console.log("sdf", this.guns)
        const armaSelecionadaObj=this.guns.find(cur=>cur.name===this.armaSeleccionada)
        const damage=armaSelecionadaObj?armaSelecionadaObj.stroke:5
        player.getDamage(damage)
    }
}

class Character extends SerVivo{
    constructor(name,gender,life,origin){
        super(name,gender,life)
        this.origin=origin
    }
}

class Animal extends SerVivo{
    constructor(name,gender,life,vertebrate,carnivorous){
        super(name,gender,life)
        this.vertebrate=vertebrate
        this.carnivorous=carnivorous
    }    
}

class Mount{
    constructor(name){
        this.name=name
    }
}

class Guns{
    constructor(name,stroke){
        this.name=name
        this.stroke=stroke
    }
}


class Treasure{
    constructor(origin,worth){
        this.origin=origin
        this.worth=worth
    }
}

class Gremio{
    constructor(name,membershipLimit,Player,location){
        this.name=name
        this.membershipLimit=membershipLimit
        this.Player=Player
        this.location=location
    }
}

class Alianza{
    constructor(name,gremio){ // guild
        this.name=name
        this.Gremio=Gremio
    }
}

class Duel{
    
}

const start = ()=>{

    // validations
    if(!playerLifeElement) return console.error('there isnot player life element')
    if(!enemyLifeElement) return console.error('there isnot enemy life element')
    if(!attackElement) return console.error('there isnot attack of the element')
    if(!golpeElement) return console.error('there isnot golpe of the element')
    // instances
    const swordX = new Guns('swordX',10)
    const rosendoPlayer = new Player('Rosendo','MachoMacho',100,10,[swordX],[],[])
    const enemy1Enemy = new Enemy({gender:'MachoMacho',guns: [],level:8,malice:1 })
    // const enemy2Enemy = new Enemy('enemy2','MachoMacho',100,12,[],[])
    rosendoPlayer.armaSeleccionada=swordX.name

    // functions
    const renderLife = (lifeElement,percentageLife)=>{
        const right = 100-percentageLife
        console.log({right,lifeElement})
        lifeElement.style.right=`${right}px`
    }

    const renderPlayerLife = (lifeElement)=>{
        const percentageLife = rosendoPlayer.currentLife*100/rosendoPlayer.getMaxLife()
        renderLife(lifeElement,percentageLife)
    }

    const renderEnemyLife = (lifeElement)=>{
        const lifeEnemy=enemy1Enemy.life*100/enemy1Enemy.maxLife
        console.log('enemy1Enemy.life',enemy1Enemy.life,lifeElement)
        renderLife(lifeElement,lifeEnemy)
    }

    function playerAttackToEnemy () {
        console.log('PLAYER_ATTACK_TO_ENEMY')
        rosendoPlayer.attack(enemy1Enemy)
        renderEnemyLife(enemyLifeElement)
    }

    function enemyAttackToPlayer () {
        console.log('sd')
        enemy1Enemy.attack(rosendoPlayer)
        renderPlayerLife(playerLifeElement)
    }

    // render html
    renderPlayerLife(playerLifeElement)
    renderEnemyLife(enemyLifeElement)
    
    // events listeners
    attackElement.addEventListener('click',playerAttackToEnemy)
    golpeElement.addEventListener('click',enemyAttackToPlayer)
}

start()


            
