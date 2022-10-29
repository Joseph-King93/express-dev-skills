const skills = [
    {id: 123456, skill:'HTML', learned: true}, 
    {id: 234567, skill:'CSS', learned: true},
    {id: 345678, skill:'Javascript', learned: false},
    {id: 456789, skill:'Express', learned: false}
]

module.exports = {
getAll,
getOne,
create,
deleteOne,
updateOne
}

function getAll() {
    return skills
}

function getOne(id) {
id = parseInt(id)
return skills.find((skill) => skill.id === id)
}

function create(skill) {
skill.id = Date.now() % 1000000
skill.learned = false
skills.push(skill)
}

function deleteOne(id) {
id = parseInt(id)
const i = skills.findIndex((skill) => skill.id === id)
skills.splice(i, 1)
}

function updateOne(skill) {
const id = parseInt(skill.id)
const foundSkill = skills.find((skill) => skill.id === id)
foundSkill.skill = skill.skill
foundSkill.learned = skill.learned !== 'false'
}

