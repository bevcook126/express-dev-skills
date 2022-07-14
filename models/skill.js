const skills = [
    {id: 111111, skill: 'juggling', proficient: true},
    {id: 222222, skill: 'sewing', proficient: false},
    {id: 333333, skill: 'cartwheeling', proficient: true}
];

module.exports = {
    getAll,
    getOne,
    create
};

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }
  
function getAll() {
  return skills;
}

function create(skill) {
  skills.id = Date.now() % 1000000;
  skills.proficient = false;
  skills.push(skill);
}