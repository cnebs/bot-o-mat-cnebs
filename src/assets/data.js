const tasks =
[
  {
    description: 'Do the dishes',
    eta: 1000,
    completing: false
  },{
    description: 'Sweep the house',
    eta: 3000,
    completing: false
  },{
    description: 'Do the laundry',
    eta: 10000,
    completing: false
  },{
    description: 'Take out the recycling',
    eta: 4000,
    completing: false
  },{
    description: 'Make a sammich',
    eta: 7000,
    completing: false
  },{
    description: 'Mow the lawn',
    eta: 20000,
    completing: false
  },{
    description: 'Rake the leaves',
    eta: 18000,
    completing: false
  },{
    description: 'Give the dog a bath',
    eta: 14500,
    completing: false
  },{
    description: 'Bake some cookies',
    eta: 8000,
    completing: false
  },{
    description: 'Wash the car',
    eta: 20000,
    completing: false
  },
]

const types =
{ 
  UNIPEDAL: 'Unipedal',
  BIPEDAL: 'Bipedal',
  QUADRUPEDAL: 'Quadrupedal',
  ARACHNID: 'Arachnid',
  RADIAL: 'Radial',
  AERONAUTICAL: 'Aeronautical'
};

module.exports = { tasks, types }; // To be used in components