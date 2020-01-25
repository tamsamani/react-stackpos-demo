interface MonsterSpeiceModule {

}

interface MonsterTypeModule {

}


interface MonsterFamilyModule {

}

interface MonsterFormModule {

}

interface MonsterEvolutionRequirement {

}

interface MonsterEvolutionSerie {
  id: Number; // identify evolution serie
  starter: MonsterModule; // the starter monster
  list: Array<{
    index: Number; // index of evoultion
    path: Number; // path line of evolution
    monster: MonsterModule; // next evolved monster
    requirement: MonsterEvolutionRequirement; // requirement for evolve this monster
  }>;
}

interface MonsterEvolution {
  serie: Array<MonsterEvolutionSerie>; //related serie of evolution
  index: Number; // actual index of evolution
  path: Number; // path of evolution for this monster
}

// the Basic Monster Module
interface MonsterModule {
  id: Number; // identical number for monster
  name: String; // name of monster
  spiece: MonsterSpeiceModule; // the specei 
  types: Array<MonsterTypeModule>;
  family: MonsterFamilyModule;
  forms: Array<MonsterFormModule>;
  evolution: MonsterEvolution;
}