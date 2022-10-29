const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
  };

function index(req, res) {
res.render('skills/index', {
    skills: Skill.getAll()
    });
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  Skill.create(req.body)
  res.redirect('/skills')
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id)
  res.redirect('/skills')
}

function edit(req, res) {
  res.render('skills/edit', {
    skill: Skill.getOne(req.params.id)
  })
}

function update(req, res) {
  // Option 1: We pass two arguments to this function
  // Skill.updateOne(req.params.id, req.body)

  // Option 2: Modify req.body to add the id
  req.body.id = req.params.id
  Skill.updateOne(req.body)

  res.redirect('/skills/' + req.params.id)
}