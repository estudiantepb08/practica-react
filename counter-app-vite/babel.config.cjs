module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {esmodules: true}}],     
      ['@babel/preset-react', {runtime: 'automatic'}],      
    ],
  };


/*Configuracion para JavaScript
 ["@babel/preset-react"],
presets: [
  ['@babel/preset-env', {targets: {node: 'current'}}],
  ['@babel/preset-env', {targets: {esmodules: true}}],
  ['@babel/preset-react', {runtime: 'automatic'}],
  '@babel/preset-typescript',
]
*/