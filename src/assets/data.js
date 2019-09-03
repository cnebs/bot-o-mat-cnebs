const tasks =
[
  {
    description: 'Do the dishes',
    eta: 1000,
  },{
    description: 'Sweep the house',
    eta: 3000,
  },{
    description: 'Do the laundry',
    eta: 10000,
  },{
    description: 'Take out the recycling',
    eta: 4000,
  },{
    description: 'Make a sammich',
    eta: 7000,
  },{
    description: 'Mow the lawn',
    eta: 20000,
  },{
    description: 'Rake the leaves',
    eta: 18000,
  },{
    description: 'Give the dog a bath',
    eta: 14500,
  },{
    description: 'Bake some cookies',
    eta: 8000,
  },{
    description: 'Wash the car',
    eta: 20000,
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