import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 500,
  menu: {
    name: '演示',
    path: '/demo',

    children: [
      {
        path: 'slot',
        name: '插槽',
        children: [
          {
            path: 'baseSlot',
            name: '插槽基础',
          },
          {
            path: 'signatureSlot',
            name: '具名插槽',
          },
          {
            path: 'scopeSlot',
            name: '作用域插槽',
          },
        ],
      },
    ],
  },
};
export default menu;
