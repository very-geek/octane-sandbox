import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from 'tracked-built-ins';

interface Options {
  disabled: boolean;
  required: boolean;
}

export default class TrackingCompoundStructure extends Component {
  @tracked options: Options = tracked(
    Object.create({
      disabled: false,
      required: true,
    })
  );

  // options: Options = {
  //   disabled: false,
  //   required: true,
  // };

  @action update(property: keyof Options, _event: InputEvent): void {
    // set(this.options, property, !this.options[property]);
    this.options[property] = !this.options[property];
    this.options = this.options;
    // this.options = { ...this.options, [property]: !this.options[property] };
  }
}
