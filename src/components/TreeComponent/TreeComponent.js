import NodeComponent from '../NodeComponent/NodeComponent.vue';

export default {
  name: 'tree-component',
  components: {
    NodeComponent,
  },
  props: {
    treeData: {
      type: Object,
      default: () => {},
    },
  },
};
