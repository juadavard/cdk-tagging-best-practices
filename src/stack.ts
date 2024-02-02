import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface CustomStackProps{
  readonly securityTags?: number;

}

export class CustomStack extends cdk.Stack {
  readonly securityTags: number;
  constructor(scope: Construct, id: string, props: CustomStackProps) {
    super(scope, id);

    this.securityTags = props.securityTags ?? 2;

  }
}

