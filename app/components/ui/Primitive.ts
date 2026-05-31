import { Fragment, Comment, mergeProps, cloneVNode } from "vue";

function flattenFragments(vnodes: VNode[]): VNode[] {
  return vnodes.flatMap((vnode) => {
    if (vnode.type === Fragment && Array.isArray(vnode.children)) {
      return flattenFragments(vnode.children as VNode[]);
    }
    return [vnode];
  });
}

const Slot = defineNuxtComponent({
  name: "Slot",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => {
      const children = slots.default?.();
      if (!children) return null;

      const flattened = flattenFragments(children);
      const idx = flattened.findIndex((child) => child.type !== Comment);
      if (idx === -1) return flattened;

      const target = flattened[idx]!;
      const cloned = cloneVNode(target, mergeProps(attrs, target.props ?? {}));

      if (flattened.length === 1) return cloned;

      flattened[idx] = cloned;
      return flattened;
    };
  },
});

export default defineNuxtComponent({
  name: "Primitive",
  inheritAttrs: false,
  props: {
    asChild: {
      type: Boolean,
      default: false,
    },
    as: {
      type: [String, Object] as PropType<keyof HTMLElementTagNameMap | Component>,
      default: "div",
    },
  },
  setup(props, { attrs, slots }) {
    if (props.asChild) return () => h(Slot, attrs, slots);

    return () => h(props.as, attrs, slots);
  },
});
