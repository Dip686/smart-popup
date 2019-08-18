let UNDEF;
export default class PopupBase {
  constructor () {
    let self = this;
    self.childComponents = [];
  }
  configure (options) {
    let self = this,
      children = self.childComponents;
    self.configureAttributes(options);
    for (let index = 0; index < children.length; index++) {
      const childComponent = children[index];
      childComponent.configure(options);
    }
  }
  addChildComponent (child) {
    let self = this;
    if (self.childComponents === UNDEF) {
      self.childComponents = [];
    }
    self.childComponents.push(child);
    child.parentComponent = self;
  }
  renderDecendents () {
    let self = this,
      children = self.childComponents;
    self.render();
    for (let index = 0; index < children.length; index++) {
      const childComponent = children[index];
      childComponent.renderDecendents();
    }
  }
}