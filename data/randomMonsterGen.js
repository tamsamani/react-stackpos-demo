export function initRandomGen(seed, variation, df) {
  // here the requirements set
  let result = seed;

  return (v=0) => {
    result = df(result + variation, seed + v);
    return result;
  }
}


const RDM = initRandomGen(0, 1, (vres, max)=> (vres + max)%100);

export const randomList100 = Array(1000).fill(0).map(RDM);