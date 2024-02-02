import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Juan David Mejia Ardila',
  authorAddress: 'juadavard@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'cdk-tagging-best-practices',
  projenrcTs: true,
  repositoryUrl: 'git@github.com:juadavard/cdk-tagging-best-practices.git',
  eslint: true,
  devDeps: ['aws-cdk', 'ts-node'],
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

const common_exclude = ['cdk.out', 'cdk.context.json'];
project.npmignore?.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();