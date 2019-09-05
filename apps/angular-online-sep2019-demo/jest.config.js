module.exports = {
  name: 'angular-online-sep2019-demo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-online-sep2019-demo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
