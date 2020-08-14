const friends = [
  { id: 1, name: 'Sting', nearMe: true },
  { id: 2, name: 'Radiohead', nearMe: false },
  { id: 3, name: 'Pink', nearMe: true}
]


function isNearMe({ nearMe }) {
  console.log(nearMe);
  return nearMe;
}


function getName({ name }) {
  console.log(name);
  return name;
}




function getFriendsNearMe(x) {
  return compose(
    mapTransducer(getName),
    filterTransducer(isNearMe)
  )(x);
}


const compose = (...fns) => (x) => (fns.reduce((acc, cur) => cur(acc), x));
const mapTransducer = transform => step => (acc, cur) => step(acc, transform(cur));
const filterTransducer = filter => step => (acc, cur) => filter(cur) ? step(acc, cur) : acc;
const concatArray = (acc, cur) => acc.concat([cur]);


const toArray = (xform, foldable) => foldable.reduce(xform(concatArray), []);


// need toArray to tell transducers to start the process.
toArray(getFriendsNearMe, friends); //?
