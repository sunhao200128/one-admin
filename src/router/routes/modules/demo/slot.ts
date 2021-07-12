import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const Demo: AppRouteModule = {
  path: '/demo',
  name: 'Demo',
  component: LAYOUT,
  redirect: '/demo/slot/baseSlot',
  meta: {
    // icon: 'ion:git-compare-outline',
    icon: 'dynamic-avatar-1|svg',
    title: '演示',
  },
  children: [
    {
      path: 'slot',
      name: 'Slot',
      component: getParentLayout('Slot'),
      meta: {
        title: '插槽',
      },
      redirect: '/demo/slot/baseSlot',
      children: [
        {
          path: 'baseSlot',
          name: 'BaseSlot',
          component: () => import('/@/views/demo/demos/slot/baseSlot.vue'),
          meta: {
            title: '插槽基础',
          },
        },
        {
          path: 'signatureSlot',
          name: 'SignatureSlot',
          component: () => import('/@/views/demo/demos/slot/signatureSlot.vue'),
          meta: {
            title: '具名插槽',
          },
        },
        {
          path: 'scopeSlot',
          name: 'ScopeSlot',
          component: () => import('/@/views/demo/demos/slot/scopeSlot.vue'),
          meta: {
            title: '具名插槽',
          },
        },
      ],
    },
  ],
};

export default Demo;
