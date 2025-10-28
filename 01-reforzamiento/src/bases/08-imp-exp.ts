import { heroes, type HeroData, Owner} from "../data/heroes.data";

const getHeroeById = (id:number): HeroData | undefined =>{
    const hero = heroes.find((hero) =>{
        return hero.id == id;
});
    /* if(!hero){
        throw new Error(`Hero with id ${id} not found`);    
    } */
    return hero;
}

console.log(getHeroeById(2));
console.log(getHeroeById(5));
console.log(getHeroeById(10));

export const getHeroeByOwner = (owner: Owner): HeroData[] =>{
    return heroes.filter((hero) => hero.owner === owner);
}