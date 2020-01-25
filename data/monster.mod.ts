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
  id: Number;
  starter: MonsterModule;
  list: Array<{
    index: Number;
    path: Number;
    monster: MonsterModule;
    requirement: MonsterEvolutionRequirement
  }>;
}

interface MonsterEvolution {
  serie: Array<MonsterEvolutionSerie>;
  index: Number;
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