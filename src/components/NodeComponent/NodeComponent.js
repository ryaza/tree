import createNode from '../../helpers/createNodeHelper';

export default {
  name: 'node-component',
  props: {
    node: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      nodeValueAdd: '',
      nodeValueEdit: '',
      showEditInput: false,
      showAddInput: false,
    };
  },
  methods: {
    addNode() {
      this.node.children.push(createNode(this.nodeValueAdd));
      this.showAddInput = false;
      this.nodeValueAdd = '';
    },
    editNode() {
      this.node.label = this.nodeValueEdit;
      this.showEditInput = false;
      this.nodeValueEdit = '';
    },
    removeNode() {
      this.$root.$emit('removeNode', this.node.id);
    },
    toggleAddNode() {
      this.showAddInput = !this.showAddInput;
      this.showEditInput = false;

      this.setFocusState(this.showAddInput, 'addInput');
    },
    toggleEditNode() {
      this.showEditInput = !this.showEditInput;
      this.showAddInput = false;

      this.setFocusState(this.showEditInput, 'editInput');
    },
    setFocusState(flag, refName) {
      if (flag) {
        this.$nextTick(() => this.$refs[refName].focus());
      } else {
        this.$nextTick(() => this.$refs[refName].blur());
      }
    },
  },
};
