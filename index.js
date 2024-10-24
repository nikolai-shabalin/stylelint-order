const config = {
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [
      'custom-properties',
      'declarations',
    ],
    'order/properties-order': [
      {
        groupName: 'custom properties',
        properties: [

        ]
      },
      {
        groupName: 'parent layout',
        properties: [

        ]
      },
      {
        groupName: 'layout flex grid',
        properties: [

        ]
      },
      {
        groupName: 'box model',
        properties: [

        ]
      },
      {
        groupName: 'position',
        properties: [

        ]
      },
      {
        groupName: 'display',
        properties: [

        ]
      },
      {
        groupName: 'typography',
        properties: [

        ]
      },
      {
        groupName: 'background',
        properties: [

        ]
      },
      {
        groupName: 'border',
        properties: [

        ]
      },
      {
        groupName: 'effects',
        properties: [

        ]
      },
      {
        groupName: 'transform',
        properties: [

        ]
      },
      {
        groupName: 'transition',
        properties: [

        ]
      },
    ]
  }
}

export default config;
