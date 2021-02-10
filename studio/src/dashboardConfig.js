export default {
  widgets: [
      {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Sanity Studio',
            apiId: 'add2c845-e3aa-4a2e-ad48-f96eca46daf4',
            buildHookId: 'https://api.netlify.com/build_hooks/6023c5b739bdd518c68a00b9',
            name: 'aukoyy-studio',
          },
          {
            title: 'Website',
            apiId: '28e466ca-7351-461d-bf7e-95c5b26ede02',
            buildHookId: 'https://api.netlify.com/build_hooks/6023c09206955f0fda05eb35',
            name: 'aukoyy-web'
          }
        ]
      }
    }
  ]
}