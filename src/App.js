import TreeComponent from './components/TreeComponent/TreeComponent.vue';
import createNode from './helpers/createNodeHelper';

export default {
  name: 'app',
  components: {
    TreeComponent,
  },
  data: () => ({
    tree: createNode('root'),
    treeJSON: '',
  }),
  methods: {
    removeNode(id) {
      // eslint-disable-next-line consistent-return
      const confirmFlag = window.confirm("Вы действительно хотите удалить этот элемент? Вместе с ним будут удалены все его потомки");
      const remove = (node) => {
        if (confirmFlag) {
          for (let i = 0; i < node.children.length; i++) {
            if (node.children[i].id === id) {
              node.children.splice(i, 1);
              return true;
            }

            if (remove(node.children[i])) {
              return true;
            }
          }
        }
      };

      remove(this.tree);
    },
    getJSON() {
      this.treeJSON = JSON.stringify(this.tree);
      const blob = new Blob([this.treeJSON], { type: 'text/plain;charset=utf-8;' });
      if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, 'tree.txt');
      } else {
        const link = document.createElement('a');
        if (link.download !== undefined) {
          const url = URL.createObjectURL(blob);
          link.setAttribute('href', url);
          link.setAttribute('download', 'tree.txt');
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    },
  },
  created() {
    this.$root.$on('removeNode', (id) => {
      this.removeNode(id);
    });
  },
};
