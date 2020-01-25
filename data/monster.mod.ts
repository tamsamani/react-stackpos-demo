interface MonsterSpeiceModule {

}

interface MonsterTypeModule {

}


interface MonsterFamilyModule {

}

interface MonsterFormModule {

}

// the Basic Monster Module
interface MonsterModule {
  id: Number;
  name: String;
  spiece: MonsterSpeiceModule;
  types: Array<MonsterTypeModule>;
  family: MonsterFamilyModule;
  forms: Array<MonsterFormModule>;
}